<script setup>
import { computed, ref } from 'vue'
import SiteNav from '../components/layout/SiteNav.vue'
import MusicCatalog from '../components/music/MusicCatalog.vue'
import MusicPlayer from '../components/music/MusicPlayer.vue'
import PageContainer from '../components/ui/PageContainer.vue'
import PerspectiveGrid from '../components/ui/PerspectiveGrid.vue'
import { tracks } from '../data/music.js'

const selectedTrackId = ref(tracks[0].id)
const selectedIndex = computed(() => tracks.findIndex((track) => track.id === selectedTrackId.value))
const selectedTrack = computed(() => tracks[selectedIndex.value] ?? tracks[0])

function selectTrack(id) {
  if (tracks.some((track) => track.id === id)) selectedTrackId.value = id
}

function selectPrevious() {
  if (selectedIndex.value > 0) selectedTrackId.value = tracks[selectedIndex.value - 1].id
}

function selectNext() {
  if (selectedIndex.value < tracks.length - 1) selectedTrackId.value = tracks[selectedIndex.value + 1].id
}
</script>

<template>
  <div class="beyond-codes-page">
    <a class="skip-link" href="#music-archive">Skip to music archive</a>
    <SiteNav />
    <main>
      <section class="archive-hero" aria-labelledby="page-heading">
        <PerspectiveGrid />
        <PageContainer>
          <p class="eyebrow">Offscript / Beyond the code</p>
          <div class="hero-copy">
            <h1 id="page-heading">Beyond<br /><span>Codes.</span></h1>
            <p>A space for creative work outside development. Starting with music: a growing archive of tracks and collaborations.</p>
          </div>
          <span class="hero-index" aria-hidden="true">SIDE B&nbsp; / &nbsp;001</span>
        </PageContainer>
      </section>

      <section id="music-archive" class="music-archive" aria-labelledby="archive-heading">
        <PerspectiveGrid variant="warp" />
        <PageContainer>
          <header class="archive-heading">
            <div><p class="eyebrow">Creative archive · 2020—2026</p><h2 id="archive-heading">Music</h2></div>
            <p>Select a track to load its official player. Playback starts only when you choose play in the player.</p>
          </header>
          <div class="archive-layout">
            <MusicPlayer :key="selectedTrack.id" :track="selectedTrack" :track-number="selectedIndex + 1" :total-tracks="tracks.length" @next="selectNext" @previous="selectPrevious" />
            <MusicCatalog :tracks="tracks" :selected-id="selectedTrack.id" @select="selectTrack" />
          </div>
        </PageContainer>
      </section>
    </main>
    <footer class="archive-footer"><PageContainer><p>Offscript · Building, learning, experimenting.</p></PageContainer></footer>
  </div>
</template>

<style scoped>
.beyond-codes-page { min-height: 100vh; overflow: clip; background: var(--background-atmosphere); }
.skip-link { position: fixed; z-index: 10; top: 0.5rem; left: 0.5rem; transform: translateY(-150%); border-radius: var(--radius-sm); padding: 0.65rem 1rem; color: #0d1b2e; background: white; font-weight: 700; }
.skip-link:focus { transform: translateY(0); }
.archive-hero { position: relative; isolation: isolate; overflow: hidden; padding: clamp(3.5rem, 8vw, 7rem) 0 clamp(4rem, 10vw, 8rem); background: linear-gradient(180deg, rgb(17 46 83 / 92%), rgb(10 21 38 / 94%)); }
.archive-hero :deep(.grid-surface) { z-index: -1; opacity: 0.45; mask-image: linear-gradient(to bottom, transparent, black 16%, black 80%, transparent); }
.eyebrow { margin: 0; color: #a8c6ef; font-size: var(--font-size-xs); font-weight: 750; letter-spacing: 0.16em; text-transform: uppercase; }
.hero-copy { display: grid; grid-template-columns: 1.1fr minmax(15rem, 0.7fr); align-items: end; gap: 2rem; margin-top: var(--space-4); }
.hero-copy h1 { margin: 0; font-size: clamp(4rem, 12vw, 9rem); font-weight: 850; line-height: 0.79; letter-spacing: -0.075em; text-transform: uppercase; }
.hero-copy h1 span { color: #a9cbf8; }
.hero-copy > p { max-width: 24rem; margin: 0 0 0.35rem; color: #d0d9e7; font-size: clamp(0.95rem, 1.5vw, 1.1rem); line-height: 1.65; }
.hero-index { display: inline-block; margin-top: var(--space-8); color: rgb(205 221 242 / 72%); font-size: var(--font-size-xs); font-weight: 700; letter-spacing: 0.13em; }
.music-archive { position: relative; isolation: isolate; overflow: hidden; padding: var(--space-section) 0; background: radial-gradient(ellipse at 80% 20%, rgb(39 83 145 / 25%), transparent 48%), linear-gradient(180deg, #0c1728, #080c16); }
.music-archive :deep(.grid-surface) { z-index: -1; opacity: 0.2; mask-image: linear-gradient(to bottom, transparent, black 22%, black 78%, transparent); }
.archive-heading { display: flex; align-items: end; justify-content: space-between; gap: var(--space-8); margin-bottom: var(--space-6); }
.archive-heading h2 { margin: 0.25rem 0 0; font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight: 850; line-height: 1; letter-spacing: -0.055em; text-transform: uppercase; }
.archive-heading > p { max-width: 25rem; margin: 0 0 0.25rem; color: var(--color-muted); font-size: var(--font-size-sm); }
.archive-layout { display: grid; grid-template-columns: minmax(0, 1.12fr) minmax(21rem, 0.88fr); align-items: start; gap: var(--space-4); }
.archive-footer { border-top: 1px solid rgb(255 255 255 / 9%); padding: var(--space-6) 0; color: #b6bfcd; background: #080b12; text-align: center; }
.archive-footer p { margin: 0; font-size: var(--font-size-xs); }
@media (max-width: 900px) { .archive-layout { grid-template-columns: minmax(0, 1fr); } .catalog-panel { max-height: 34rem; } }
@media (max-width: 640px) { .hero-copy { grid-template-columns: 1fr; gap: var(--space-4); } .hero-copy h1 { font-size: clamp(4rem, 18vw, 6rem); } .archive-heading { align-items: flex-start; flex-direction: column; gap: var(--space-3); } .archive-layout { gap: var(--space-3); } }
</style>
