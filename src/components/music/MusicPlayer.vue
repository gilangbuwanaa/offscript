<script setup>
import { computed, ref, watch } from 'vue'
import { PhArrowSquareOut, PhMusicNotes, PhSpotifyLogo, PhYoutubeLogo } from '@phosphor-icons/vue'
import YouTubePlayer from './YouTubePlayer.vue'

const props = defineProps({
  track: { type: Object, required: true },
  trackNumber: { type: Number, required: true },
  totalTracks: { type: Number, required: true },
})
const emit = defineEmits(['next', 'previous'])
const artworkFailed = ref(false)

const videoId = computed(() => {
  if (props.track.platform !== 'youtube') return ''
  const url = new URL(props.track.url)
  return url.hostname === 'youtu.be' ? url.pathname.slice(1) : url.searchParams.get('v') ?? ''
})
const youtubeArtwork = computed(() => (videoId.value ? `https://img.youtube.com/vi/${videoId.value}/hqdefault.jpg` : ''))
const spotifyEmbedUrl = computed(() => {
  const url = new URL(props.track.url)
  const trackId = url.pathname.split('/').filter(Boolean).at(-1)
  return `https://open.spotify.com/embed/track/${trackId}?utm_source=generator&theme=0`
})
const platformName = computed(() => props.track.platform === 'spotify' ? 'Spotify' : 'YouTube')

watch(() => props.track.id, () => { artworkFailed.value = false })

function formatDuration(duration) {
  const [minutes, seconds] = duration.split(':')
  return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
}
</script>

<template>
  <section class="player-panel" aria-labelledby="featured-track-title">
    <div class="player-panel-heading"><span>Now selected</span><span>Track {{ String(trackNumber).padStart(2, '0') }} / {{ String(totalTracks).padStart(2, '0') }}</span></div>
    <div class="featured-track">
      <div class="artwork-frame">
        <img v-if="track.platform === 'youtube' && !artworkFailed" :src="youtubeArtwork" :alt="`Official YouTube thumbnail for ${track.title}`" @error="artworkFailed = true" />
        <div v-else class="artwork-fallback" :aria-label="`No separate artwork available for ${track.title}`">
          <span class="artwork-mark"><PhMusicNotes :size="27" weight="fill" aria-hidden="true" /></span>
          <span class="artwork-kicker">Beyond Codes / Audio Archive</span>
          <strong>{{ track.title }}</strong>
          <span class="artwork-note">{{ track.platform === 'spotify' ? 'Official artwork is shown in the Spotify player' : 'Artwork unavailable' }}</span>
        </div>
      </div>
      <div class="featured-copy">
        <p class="featured-label">Featured track</p>
        <h2 id="featured-track-title">{{ track.title }}</h2>
        <p class="featured-artists">{{ track.artists.join(', ') }}</p>
        <div class="featured-meta"><span>{{ track.year }}</span><span>{{ formatDuration(track.duration) }}</span><span class="platform-badge"><PhSpotifyLogo v-if="track.platform === 'spotify'" :size="16" weight="fill" aria-hidden="true" /><PhYoutubeLogo v-else :size="16" weight="fill" aria-hidden="true" />{{ platformName }}</span></div>
      </div>
    </div>

    <div v-if="track.platform === 'spotify'" class="platform-player">
      <iframe
        :key="track.id"
        :src="spotifyEmbedUrl"
        :title="`Spotify player for ${track.title} by ${track.artists.join(', ')}`"
        loading="lazy"
        allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
      <p class="embed-fallback">If the Spotify player is unavailable, <a :href="track.url" target="_blank" rel="noopener noreferrer">open this track on Spotify <PhArrowSquareOut :size="14" aria-hidden="true" /></a>.</p>
    </div>
    <YouTubePlayer v-else :key="track.id" :track="track" @next="emit('next')" @previous="emit('previous')" />

    <div class="player-navigation">
      <button type="button" class="nav-button" :disabled="trackNumber <= 1" @click="emit('previous')">Previous</button>
      <a :href="track.url" target="_blank" rel="noopener noreferrer">Open on {{ platformName }} <PhArrowSquareOut :size="15" aria-hidden="true" /></a>
      <button type="button" class="nav-button" :disabled="trackNumber >= totalTracks" @click="emit('next')">Next</button>
    </div>
  </section>
</template>

<style scoped>
.player-panel { min-width: 0; border: var(--border-subtle); border-radius: var(--radius-lg); padding: clamp(1rem, 2vw, 1.5rem); background: linear-gradient(145deg, rgb(229 238 251 / 12%), rgb(9 15 26 / 78%) 62%); box-shadow: var(--shadow-card); -webkit-backdrop-filter: blur(14px); backdrop-filter: blur(14px); }
.player-panel-heading { display: flex; justify-content: space-between; gap: 0.5rem; color: #b7c8dd; font-size: var(--font-size-xs); font-weight: 700; }
.featured-track { display: grid; grid-template-columns: minmax(10rem, 0.8fr) minmax(0, 1.2fr); align-items: center; gap: clamp(1rem, 3vw, 1.5rem); margin: var(--space-4) 0 var(--space-6); }
.artwork-frame { overflow: hidden; aspect-ratio: 1; border: 1px solid rgb(255 255 255 / 13%); border-radius: var(--radius-md); background: linear-gradient(145deg, #203c62, #0b1220); box-shadow: 0 0.75rem 2rem rgb(0 0 0 / 24%); }
.artwork-frame img { width: 100%; height: 100%; object-fit: cover; }
.artwork-fallback { display: flex; width: 100%; height: 100%; flex-direction: column; align-items: flex-start; justify-content: space-between; padding: 1rem; background: radial-gradient(ellipse at 100% 0%, rgb(76 130 202 / 52%), transparent 56%), linear-gradient(150deg, #1a3455, #090f1b 78%); }
.artwork-mark { display: grid; place-items: center; width: 2.8rem; height: 2.8rem; border: 1px solid rgb(255 255 255 / 28%); border-radius: 50%; color: #a8cfff; }
.artwork-kicker, .artwork-note { color: #b8c8dc; font-size: 0.6rem; line-height: 1.35; }
.artwork-fallback strong { margin-top: auto; padding: 0.5rem 0; color: white; font-size: clamp(1.1rem, 3vw, 1.85rem); line-height: 1.05; overflow-wrap: anywhere; }
.featured-label { margin: 0 0 0.35rem; color: #9fc4f5; font-size: var(--font-size-xs); font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; }
.featured-copy h2 { margin: 0; font-size: clamp(1.65rem, 4vw, 2.6rem); line-height: 1.04; letter-spacing: -0.04em; overflow-wrap: anywhere; }
.featured-artists { margin: 0.6rem 0 0; color: #d0d8e4; font-size: var(--font-size-sm); line-height: 1.45; }
.featured-meta { display: flex; flex-wrap: wrap; align-items: center; gap: 0.5rem 0.8rem; margin-top: var(--space-4); color: #c0ccdc; font-size: var(--font-size-xs); }
.platform-badge { display: inline-flex; align-items: center; gap: 0.35rem; border: 1px solid rgb(255 255 255 / 17%); border-radius: var(--radius-pill); padding: 0.2rem 0.55rem; color: #e7edf6; }
.platform-player { overflow: hidden; border: 1px solid rgb(255 255 255 / 12%); border-radius: var(--radius-md); background: #090d14; }
.platform-player iframe { display: block; width: 100%; height: 152px; border: 0; }
.embed-fallback { margin: 0; border-top: 1px solid rgb(255 255 255 / 10%); padding: 0.55rem 0.75rem; color: #b9c6d7; font-size: var(--font-size-xs); }
.embed-fallback a, .player-navigation > a { display: inline-flex; align-items: center; gap: 0.25rem; color: #acd0ff; font-weight: 700; text-decoration: none; }
.embed-fallback a:hover, .player-navigation > a:hover { text-decoration: underline; text-underline-offset: 0.2em; }
.player-navigation { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; margin-top: var(--space-4); }
.nav-button { min-height: 2.4rem; border: 1px solid rgb(255 255 255 / 19%); border-radius: var(--radius-sm); padding: 0.4rem 0.75rem; color: #f3f6fa; background: rgb(255 255 255 / 5%); cursor: pointer; font-size: var(--font-size-xs); font-weight: 700; }
.nav-button:hover:not(:disabled) { background: rgb(255 255 255 / 13%); }
.nav-button:disabled { opacity: 0.42; cursor: not-allowed; }
.player-navigation > a { font-size: var(--font-size-xs); text-align: center; }
@media (max-width: 640px) { .featured-track { grid-template-columns: 6.5rem minmax(0, 1fr); } .artwork-frame { border-radius: var(--radius-sm); } .artwork-fallback { padding: 0.6rem; } .artwork-mark { width: 2rem; height: 2rem; } .artwork-mark :deep(svg) { width: 1.1rem; } .artwork-kicker { font-size: 0.48rem; } .artwork-note { display: none; } .player-panel { border-radius: var(--radius-md); } }
</style>
