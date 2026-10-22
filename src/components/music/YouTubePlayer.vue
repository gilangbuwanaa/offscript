<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { PhPause, PhPlay, PhSkipBack, PhSkipForward, PhSpeakerHigh, PhSpeakerSlash } from '@phosphor-icons/vue'

const props = defineProps({ track: { type: Object, required: true } })
const emit = defineEmits(['next', 'previous'])
const playerHost = ref(null)
const playerReady = ref(false)
const playerError = ref(false)
const playerErrorMessage = ref('The YouTube player could not be loaded.')
const isPlaying = ref(false)
const isMuted = ref(false)
const volume = ref(70)
const currentTime = ref(0)
const actualDuration = ref(0)
const playbackStatus = ref('Loading YouTube player…')

let player
let pollTimer
let isMounted = false
let apiPromise

function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT)
  if (apiPromise) return apiPromise

  apiPromise = new Promise((resolve, reject) => {
    const timeout = window.setTimeout(() => reject(new Error('YouTube player API timed out.')), 15000)
    const previousReadyHandler = window.onYouTubeIframeAPIReady
    window.onYouTubeIframeAPIReady = () => {
      previousReadyHandler?.()
      window.clearTimeout(timeout)
      resolve(window.YT)
    }

    let script = document.querySelector('script[data-youtube-iframe-api]')
    if (!script) {
      script = document.createElement('script')
      script.src = 'https://www.youtube.com/iframe_api'
      script.async = true
      script.dataset.youtubeIframeApi = 'true'
      script.onerror = () => {
        window.clearTimeout(timeout)
        reject(new Error('YouTube player API could not be downloaded.'))
      }
      document.head.append(script)
    }
  })

  return apiPromise
}

function getVideoId(url) {
  const parsedUrl = new URL(url)
  if (parsedUrl.hostname === 'youtu.be') return parsedUrl.pathname.slice(1)
  return parsedUrl.searchParams.get('v') ?? ''
}

function readPlayerTime() {
  if (!playerReady.value || !player) return
  try {
    const duration = player.getDuration()
    if (Number.isFinite(duration) && duration > 0) actualDuration.value = Math.floor(duration)
    const time = player.getCurrentTime()
    if (Number.isFinite(time)) currentTime.value = Math.floor(time)
    isMuted.value = player.isMuted()
    const currentVolume = player.getVolume()
    if (Number.isFinite(currentVolume)) volume.value = currentVolume
  } catch {
    // Player state can be unavailable briefly while the iframe initializes.
  }
}

function handlePlayerReady(event) {
  if (!isMounted) return
  player = event.target
  player.getIframe().setAttribute('title', `YouTube player for ${props.track.title}`)
  playerReady.value = true
  playbackStatus.value = 'Ready to play'
  player.setVolume(volume.value)
  readPlayerTime()
  pollTimer = window.setInterval(readPlayerTime, 500)
}

function handlePlayerState(event) {
  if (!window.YT?.PlayerState) return
  const states = window.YT.PlayerState
  isPlaying.value = event.data === states.PLAYING
  if (event.data === states.PLAYING) playbackStatus.value = 'Playing'
  else if (event.data === states.PAUSED) playbackStatus.value = 'Paused'
  else if (event.data === states.BUFFERING) playbackStatus.value = 'Buffering'
  else if (event.data === states.ENDED) {
    playbackStatus.value = 'Track ended'
    isPlaying.value = false
  }
  readPlayerTime()
}

function handlePlayerError(event) {
  const errorMessages = {
    2: 'The video URL or identifier is invalid.',
    5: 'This video cannot be played in the embedded player.',
    100: 'This video is unavailable or has been removed.',
    101: 'The video owner does not allow embedded playback.',
    150: 'The video owner does not allow embedded playback.',
    153: 'YouTube could not verify the request origin for this player.',
  }
  playerErrorMessage.value = errorMessages[event.data] ?? 'YouTube could not play this video.'
  playerError.value = true
  playbackStatus.value = 'Playback unavailable'
}

async function initializePlayer() {
  try {
    const youtube = await loadYouTubeApi()
    if (!isMounted || !playerHost.value) return
    player = new youtube.Player(playerHost.value, {
      width: '640',
      height: '360',
      videoId: getVideoId(props.track.url),
      playerVars: { autoplay: 0, controls: 0, playsinline: 1, origin: window.location.origin },
      events: {
        onReady: handlePlayerReady,
        onStateChange: handlePlayerState,
        onError: handlePlayerError,
      },
    })
  } catch {
    playerErrorMessage.value = 'The YouTube player could not be reached. Check your connection or open the video on YouTube.'
    playerError.value = true
    playbackStatus.value = 'Player unavailable'
  }
}

function togglePlayback() {
  if (!playerReady.value || !player) return
  if (isPlaying.value) player.pauseVideo()
  else player.playVideo()
}

function toggleMute() {
  if (!playerReady.value || !player) return
  if (isMuted.value) player.unMute()
  else player.mute()
  isMuted.value = !isMuted.value
}

function updateVolume(event) {
  const nextVolume = Number(event.target.value)
  volume.value = nextVolume
  if (!playerReady.value || !player) return
  player.setVolume(nextVolume)
  if (nextVolume > 0 && isMuted.value) {
    player.unMute()
    isMuted.value = false
  }
  if (nextVolume === 0) {
    player.mute()
    isMuted.value = true
  }
}

function seek(event) {
  if (!playerReady.value || !player || actualDuration.value <= 0) return
  const time = Number(event.target.value)
  player.seekTo(time, true)
  currentTime.value = time
}

function formatTime(seconds) {
  const safeSeconds = Math.max(0, Math.floor(seconds))
  return `${String(Math.floor(safeSeconds / 60)).padStart(2, '0')}:${String(safeSeconds % 60).padStart(2, '0')}`
}

onMounted(() => {
  isMounted = true
  initializePlayer()
})

onBeforeUnmount(() => {
  isMounted = false
  window.clearInterval(pollTimer)
  player?.destroy()
  player = undefined
})
</script>

<template>
  <div class="youtube-player" :class="{ 'youtube-player--error': playerError }">
    <div v-show="!playerError" ref="playerHost" class="youtube-frame" :aria-label="`YouTube player for ${track.title}`"></div>
    <div v-if="playerError" class="player-fallback" role="status">
      <p>{{ playerErrorMessage }}</p>
      <a :href="track.url" target="_blank" rel="noopener noreferrer">Open on YouTube <span aria-hidden="true">↗</span></a>
    </div>

    <div class="player-controls" :aria-label="`Playback controls for ${track.title}`">
      <div class="transport-controls">
        <button type="button" class="icon-button" aria-label="Previous track" @click="emit('previous')"><PhSkipBack :size="19" weight="fill" aria-hidden="true" /></button>
        <button type="button" class="play-button" :disabled="!playerReady || playerError" :aria-label="isPlaying ? 'Pause track' : 'Play track'" @click="togglePlayback">
          <PhPause v-if="isPlaying" :size="20" weight="fill" aria-hidden="true" />
          <PhPlay v-else :size="20" weight="fill" aria-hidden="true" />
        </button>
        <button type="button" class="icon-button" aria-label="Next track" @click="emit('next')"><PhSkipForward :size="19" weight="fill" aria-hidden="true" /></button>
        <span class="player-status" role="status" aria-live="polite">{{ playbackStatus }}</span>
      </div>

      <div class="progress-controls">
        <span>{{ formatTime(currentTime) }}</span>
        <input
          type="range"
          min="0"
          :max="Math.max(actualDuration, 1)"
          step="1"
          :value="currentTime"
          :disabled="!playerReady || playerError || actualDuration === 0"
          :aria-label="`Seek ${track.title}`"
          @input="seek"
        />
        <span>{{ formatTime(actualDuration) }}</span>
      </div>

      <div class="volume-controls">
        <button type="button" class="icon-button" :disabled="!playerReady || playerError" :aria-label="isMuted ? 'Unmute' : 'Mute'" @click="toggleMute">
          <PhSpeakerSlash v-if="isMuted" :size="19" aria-hidden="true" />
          <PhSpeakerHigh v-else :size="19" aria-hidden="true" />
        </button>
        <input type="range" min="0" max="100" step="1" :value="volume" :disabled="!playerReady || playerError" :aria-label="`Volume for ${track.title}`" @input="updateVolume" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.youtube-player { overflow: hidden; border: 1px solid rgb(255 255 255 / 14%); border-radius: var(--radius-md); background: #05080d; }
.youtube-frame { width: 100%; min-height: 200px; aspect-ratio: 16 / 9; background: #030507; }
.youtube-frame :deep(iframe) { display: block; width: 100%; height: 100%; min-height: 200px; border: 0; }
.player-fallback { display: grid; min-height: 12rem; align-content: center; justify-items: center; gap: var(--space-2); padding: var(--space-4); color: #d9e1ec; text-align: center; }
.player-fallback p { max-width: 32rem; margin: 0; font-size: var(--font-size-sm); }
.player-fallback a { color: #a8cfff; font-size: var(--font-size-sm); font-weight: 700; }
.player-controls { display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 0.7rem 1rem; padding: 0.65rem 0.8rem 0.8rem; }
.transport-controls { display: flex; align-items: center; gap: 0.5rem; }
.icon-button, .play-button { display: grid; flex: 0 0 auto; place-items: center; width: 2.25rem; height: 2.25rem; border: 1px solid rgb(255 255 255 / 15%); border-radius: 50%; color: white; background: rgb(255 255 255 / 7%); cursor: pointer; }
.play-button { width: 2.65rem; height: 2.65rem; border-color: transparent; color: #0b1627; background: #f4f7fc; }
.icon-button:hover:not(:disabled), .play-button:hover:not(:disabled) { background: #a8cfff; color: #0b1627; }
.icon-button:disabled, .play-button:disabled { opacity: 0.45; cursor: not-allowed; }
.player-status { margin-left: 0.25rem; color: #b9c6d7; font-size: var(--font-size-xs); }
.progress-controls { display: flex; grid-row: 2; grid-column: 1 / -1; align-items: center; gap: 0.55rem; color: #b9c6d7; font-size: 0.68rem; font-variant-numeric: tabular-nums; }
.progress-controls input { flex: 1; min-width: 0; accent-color: #70a9f5; }
.volume-controls { display: flex; align-items: center; gap: 0.4rem; }
.volume-controls input { width: 5.2rem; accent-color: #70a9f5; }
input:disabled { opacity: 0.5; }
@media (max-width: 480px) { .player-controls { gap: 0.6rem; } .player-status { font-size: 0.65rem; } .volume-controls input { width: 3.5rem; } }
</style>
