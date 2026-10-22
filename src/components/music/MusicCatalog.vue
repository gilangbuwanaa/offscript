<script setup>
import { PhSpotifyLogo, PhYoutubeLogo } from '@phosphor-icons/vue'

defineProps({
  tracks: { type: Array, required: true },
  selectedId: { type: String, required: true },
})

const emit = defineEmits(['select'])

function formatDuration(duration) {
  const [minutes, seconds] = duration.split(':')
  return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`
}
</script>

<template>
  <section class="catalog-panel" aria-labelledby="catalog-heading">
    <header class="catalog-header">
      <div><p class="catalog-kicker">The archive</p><h2 id="catalog-heading">Tracklist</h2></div>
      <span class="track-count">{{ tracks.length }} tracks</span>
    </header>
    <ol class="track-list">
      <li v-for="(track, index) in tracks" :key="track.id">
        <button
          class="track-row"
          :class="{ 'track-row--selected': selectedId === track.id }"
          type="button"
          :aria-pressed="selectedId === track.id"
          @click="emit('select', track.id)"
        >
          <span class="track-index" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
          <span class="track-copy"><strong>{{ track.title }}</strong><span>{{ track.artists.join(', ') }}</span></span>
          <span class="track-year">{{ track.year }}</span>
          <span class="track-duration">{{ formatDuration(track.duration) }}</span>
          <component :is="track.platform === 'spotify' ? PhSpotifyLogo : PhYoutubeLogo" class="platform-icon" :size="17" weight="fill" aria-hidden="true" />
          <span class="visually-hidden">{{ track.platform }}</span>
        </button>
      </li>
    </ol>
  </section>
</template>

<style scoped>
.catalog-panel { min-width: 0; overflow: hidden; border: var(--border-subtle); border-radius: var(--radius-md); background: rgb(6 12 22 / 70%); box-shadow: var(--shadow-card); }
.catalog-header { position: sticky; top: 0; z-index: 1; display: flex; align-items: end; justify-content: space-between; gap: var(--space-3); border-bottom: 1px solid rgb(255 255 255 / 10%); padding: var(--space-4) var(--space-4) var(--space-3); background: rgb(9 17 30 / 96%); }
.catalog-kicker { margin: 0; color: #9cbbe6; font-size: 0.68rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; }
.catalog-header h2 { margin: 0; font-size: 1.25rem; line-height: 1.2; }
.track-count { border: 1px solid rgb(255 255 255 / 16%); border-radius: var(--radius-pill); padding: 0.2rem 0.6rem; color: var(--color-muted); font-size: var(--font-size-xs); white-space: nowrap; }
.track-list { max-height: 40rem; overflow-y: auto; margin: 0; padding: 0.35rem; list-style: none; scrollbar-color: #405a7a #101a29; scrollbar-width: thin; }
.track-row { display: grid; width: 100%; grid-template-columns: 1.75rem minmax(0, 1fr) auto auto 1.1rem; align-items: center; gap: 0.65rem; border: 1px solid transparent; border-radius: var(--radius-sm); padding: 0.65rem 0.55rem; color: var(--color-text); background: transparent; text-align: left; cursor: pointer; }
.track-row:hover { background: rgb(255 255 255 / 6%); }
.track-row--selected { border-color: rgb(105 157 227 / 45%); background: linear-gradient(100deg, rgb(42 97 164 / 30%), rgb(255 255 255 / 5%)); }
.track-index { color: #91a0b5; font-variant-numeric: tabular-nums; font-size: var(--font-size-xs); }
.track-row--selected .track-index { color: #a8cfff; }
.track-copy { display: grid; min-width: 0; gap: 0.1rem; }
.track-copy strong, .track-copy > span { overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.track-copy strong { font-size: var(--font-size-sm); font-weight: 700; }
.track-copy > span { color: var(--color-muted); font-size: 0.7rem; }
.track-year, .track-duration { color: #b9c4d3; font-size: 0.7rem; font-variant-numeric: tabular-nums; }
.platform-icon { color: #b9c4d3; }
.visually-hidden { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; }
.track-row--selected .platform-icon { color: #8cbcff; }
@media (max-width: 480px) {
  .track-row { grid-template-columns: 1.5rem minmax(0, 1fr) auto 1rem; gap: 0.4rem; }
  .track-year { display: none; }
  .track-copy strong { font-size: var(--font-size-xs); }
  .track-copy > span, .track-duration { font-size: 0.65rem; }
}
</style>
