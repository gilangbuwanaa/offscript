<script setup>
import { PhArrowDown } from '@phosphor-icons/vue'
import PageContainer from '../ui/PageContainer.vue'
import PerspectiveGrid from '../ui/PerspectiveGrid.vue'
import UiButton from '../ui/UiButton.vue'
</script>

<template>
  <section class="hero-scene" aria-labelledby="home-title">
    <PerspectiveGrid />
    <PageContainer>
      <div class="hero-card">
        <div class="hero-copy">
          <p class="hero-role">Developer &amp; Creative Technologist</p>
          <h1 id="home-title">Gilang Andhika<br />Buwana</h1>
          <p class="hero-description">
            An Informatics Engineering graduate who enjoys exploring technology, experimenting with creative work, and building things.
          </p>
          <p class="hero-tags" aria-label="Interests"><span>&lt;code/&gt;</span><span>curiosity</span><span>pixels</span></p>
          <div class="hero-actions">
            <UiButton href="#organizations">Explore my work <PhArrowDown :size="16" weight="bold" aria-hidden="true" /></UiButton>
            <UiButton href="#about" variant="secondary">More about me</UiButton>
          </div>
        </div>
        <div class="portrait-wrap">
          <img class="portrait" src="/images/Person.png" alt="Gilang Andhika Buwana" width="1440" height="810" fetchpriority="high" />
        </div>
        <span class="portrait-note" aria-hidden="true">gilang?</span>
      </div>
    </PageContainer>
  </section>
</template>

<style scoped>
.hero-scene { position: relative; isolation: isolate; padding: 1.5rem 0 8rem; }
.hero-scene :deep(.grid-surface) { z-index: -1; opacity: 0.52; mask-image: linear-gradient(to bottom, black 0%, black 58%, transparent 100%); }
.hero-card { position: relative; display: flex; min-height: clamp(28rem, 41vw, 36rem); align-items: center; overflow: visible; border-radius: var(--radius-lg); background: linear-gradient(180deg, #fbfcfe 0%, #f3f5f7 63%, rgb(199 204 213 / 87%) 100%); box-shadow: 0 2rem 5rem rgb(0 0 0 / 18%); color: #172b48; isolation: isolate; }
.hero-copy { position: relative; z-index: 2; width: 57%; padding: clamp(2rem, 5vw, 5rem); }
.hero-role { margin: 0 0 var(--space-3); color: #1b2b41; font-size: var(--font-size-sm); font-weight: 800; text-transform: uppercase; }
.hero-role span { display: block; color: #6c7888; font-size: var(--font-size-xs); font-style: italic; font-weight: 500; }
h1 { margin: 0; color: #17355e; font-size: clamp(2.45rem, 6.1vw, 5.9rem); font-weight: 850; line-height: 0.98; letter-spacing: -0.055em; text-transform: uppercase; }
.hero-description { max-width: 33rem; margin: var(--space-4) 0 0; color: #5e6876; font-size: clamp(0.9rem, 1.4vw, 1.1rem); line-height: 1.6; }
.hero-tags { display: flex; flex-wrap: wrap; gap: var(--space-3); margin: var(--space-4) 0 0; color: #687487; font-family: ui-monospace, SFMono-Regular, Consolas, monospace; font-size: var(--font-size-xs); font-style: italic; }
.hero-tags span { border: 1px dashed rgb(36 58 88 / 24%); border-radius: var(--radius-pill); padding: 0.1rem 0.5rem; }
.hero-actions { display: flex; flex-wrap: wrap; gap: var(--space-3); margin-top: var(--space-6); }
.hero-actions :deep(.ui-button--secondary) { border-color: rgb(21 39 63 / 22%); color: #23364f; background: rgb(255 255 255 / 86%); }
.hero-actions :deep(.ui-button--secondary:hover) { background: white; }
.portrait-wrap { position: absolute; z-index: 1; top: -2rem; right: 1%; bottom: -7rem; width: 48%; pointer-events: none; }
.portrait { width: 100%; height: 100%; object-fit: contain; object-position: center bottom; filter: drop-shadow(0 1rem 1rem rgb(12 20 32 / 16%)); mask-image: linear-gradient(to bottom, black 0%, black 68%, transparent 100%); }
.portrait-note { position: absolute; z-index: 3; top: 14%; right: 8%; border-radius: 0.2rem; padding: 0.25rem 0.5rem; color: white; background: #10131a; font-size: var(--font-size-xs); transform: rotate(2deg); }
@media (max-width: 760px) {
  .hero-scene { padding: 1rem 0 5.5rem; }
  .hero-card { min-height: 41rem; align-items: flex-start; overflow: hidden; }
  .hero-copy { width: 100%; padding: clamp(1.5rem, 6vw, 2.5rem); }
  h1 { max-width: 12ch; font-size: clamp(2.5rem, 10vw, 4.2rem); }
  .hero-description { max-width: 34rem; }
  .portrait-wrap { top: auto; right: -2%; bottom: -2.5rem; width: min(76%, 28rem); height: 58%; }
  .portrait-note { top: auto; right: 7%; bottom: 40%; }
}
@media (max-width: 480px) {
  .hero-card { min-height: 43rem; }
  .hero-copy { padding: 1.4rem; }
  .hero-description { max-width: 30ch; font-size: 0.88rem; }
  .portrait-wrap { right: -12%; width: 94%; height: 53%; }
  .hero-actions { max-width: 17rem; }
  .hero-actions :deep(.ui-button) { min-height: 2.65rem; padding-inline: 0.85rem; font-size: 0.78rem; }
}
</style>
