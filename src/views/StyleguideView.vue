<script setup>
import SiteNav from '../components/layout/SiteNav.vue'
import GlassCard from '../components/ui/GlassCard.vue'
import PageContainer from '../components/ui/PageContainer.vue'
import PerspectiveGrid from '../components/ui/PerspectiveGrid.vue'
import SectionHeading from '../components/ui/SectionHeading.vue'
import UiButton from '../components/ui/UiButton.vue'

const colors = [
  { name: 'Ink', value: '#080c16', token: '--color-ink' },
  { name: 'Night', value: '#0b1425', token: '--color-night' },
  { name: 'Navy', value: '#142d51', token: '--color-navy' },
  { name: 'Blue', value: '#245a9e', token: '--color-blue' },
  { name: 'Bright blue', value: '#4b8de8', token: '--color-blue-bright' },
  { name: 'Orange', value: '#f05a34', token: '--color-orange' },
  { name: 'Paper', value: '#f8fafc', token: '--color-paper' },
]

const spacing = [
  { name: 'space-2', value: '0.5rem', width: '2rem' },
  { name: 'space-4', value: '1rem', width: '4rem' },
  { name: 'space-8', value: '2rem', width: '8rem' },
  { name: 'space-16', value: '4rem', width: '12rem' },
]
</script>

<template>
  <div class="styleguide-page">
    <div class="hero-backdrop" aria-hidden="true"><PerspectiveGrid /></div>
    <SiteNav />

    <main>
      <section class="styleguide-hero">
        <PageContainer>
          <p class="eyebrow">Offscript / Foundation</p>
          <h1>Design<br /><span>Styleguide</span></h1>
          <p class="intro">A working reference for the colors, type, surfaces, and reusable pieces that shape Offscript.</p>
          <div class="hero-actions">
            <UiButton>Primary button</UiButton>
            <UiButton variant="secondary">Secondary button</UiButton>
          </div>
        </PageContainer>
      </section>

      <PageContainer>
        <section class="guide-section" aria-labelledby="tokens-title">
          <SectionHeading eyebrow="01 / Foundation" :level="2">Design tokens</SectionHeading>
          <div class="token-layout">
            <GlassCard class="token-panel">
              <h3 id="tokens-title">Color palette</h3>
              <div class="swatches">
                <div v-for="color in colors" :key="color.token" class="swatch">
                  <span class="swatch-color" :style="{ backgroundColor: color.value }" :aria-label="`${color.name} color`"></span>
                  <span class="swatch-name">{{ color.name }}</span>
                  <code>{{ color.value }}</code>
                </div>
              </div>
            </GlassCard>
            <GlassCard class="token-panel type-panel">
              <h3>Typography scale</h3>
              <p class="type-display">Bold ideas,<br />built with intent.</p>
              <p class="type-body">Readable body copy in soft white keeps the focus on the content, even over layered backgrounds.</p>
              <p class="type-label">LABEL / METADATA <span>12px · uppercase</span></p>
            </GlassCard>
          </div>
          <GlassCard class="spacing-panel">
            <h3>Spacing rhythm</h3>
            <div class="spacing-list">
              <div v-for="item in spacing" :key="item.name" class="spacing-item">
                <code>{{ item.name }} · {{ item.value }}</code>
                <span class="spacing-bar" :style="{ width: item.width }"></span>
              </div>
            </div>
          </GlassCard>
          <div class="surface-tokens" aria-label="Surface tokens">
            <GlassCard class="surface-token"><span>Radius</span><code>--radius-md · 1rem</code><i class="radius-sample" aria-hidden="true"></i></GlassCard>
            <GlassCard class="surface-token"><span>Border</span><code>--border-subtle · 1px</code><i class="border-sample" aria-hidden="true"></i></GlassCard>
            <GlassCard class="surface-token"><span>Shadow</span><code>--shadow-card</code><i class="shadow-sample" aria-hidden="true"></i></GlassCard>
            <GlassCard class="surface-token"><span>Glass</span><code>--glass-blur · 18px</code><i class="glass-sample" aria-hidden="true"></i></GlassCard>
          </div>
        </section>

        <section class="guide-section" aria-labelledby="components-title">
          <SectionHeading eyebrow="02 / Components" :level="2">Building blocks</SectionHeading>
          <div class="component-grid">
            <GlassCard class="component-panel">
              <h3 id="components-title">Section heading</h3>
              <SectionHeading eyebrow="A little about" :level="3">Focused, clear hierarchy</SectionHeading>
            </GlassCard>
            <GlassCard class="component-panel button-panel">
              <h3>Buttons and states</h3>
              <div class="button-row"><UiButton>Primary</UiButton><UiButton variant="secondary">Secondary</UiButton></div>
              <div class="button-row"><UiButton disabled>Disabled</UiButton><span class="state-note">Hover, focus, and disabled states</span></div>
            </GlassCard>
            <GlassCard class="component-panel">
              <h3>Glass surface</h3>
              <p class="body-copy">Translucent panels use restrained blur, a soft border, and a deep shadow to keep text clear.</p>
            </GlassCard>
          </div>
        </section>

        <section class="guide-section" aria-labelledby="background-title">
          <SectionHeading eyebrow="03 / Atmosphere" :level="2">Layered backgrounds</SectionHeading>
          <div class="background-grid">
            <div class="background-sample linear-sample">
              <PerspectiveGrid />
              <div class="sample-copy"><h3 id="background-title">Perspective grid</h3><p>Local asset · grid.png</p></div>
            </div>
            <div class="background-sample warp-sample">
              <PerspectiveGrid variant="warp" />
              <div class="sample-copy"><h3>Warped grid</h3><p>Local asset · cursive-grid.png</p></div>
            </div>
          </div>
          <div class="responsive-note">
            <span class="device-mark" aria-hidden="true">↔</span>
            <p>Components reflow on narrow screens; the menu control opens a keyboard accessible navigation panel.</p>
          </div>
        </section>
      </PageContainer>
    </main>

    <footer class="guide-footer"><PageContainer>Offscript · Foundation preview</PageContainer></footer>
  </div>
</template>

<style scoped>
.styleguide-page { position: relative; min-height: 100vh; overflow: clip; isolation: isolate; }
.hero-backdrop { position: absolute; z-index: -1; inset: 0 0 auto; height: 48rem; background: radial-gradient(ellipse at 50% 5%, rgb(64 117 183 / 34%), transparent 63%); }
.styleguide-hero { position: relative; padding: clamp(3.5rem, 8vw, 7.5rem) 0 clamp(4rem, 9vw, 8rem); }
.eyebrow { margin: 0 0 var(--space-4); color: #b9cce7; font-size: var(--font-size-xs); font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
h1 { margin: 0; font-size: var(--font-size-display); font-weight: 850; line-height: 0.96; letter-spacing: -0.055em; text-transform: uppercase; }
h1 span { color: #9bbce8; }
.intro { max-width: 38rem; margin: var(--space-6) 0 0; color: var(--color-muted); font-size: clamp(1rem, 2vw, 1.15rem); }
.hero-actions { display: flex; flex-wrap: wrap; gap: var(--space-3); margin-top: var(--space-8); }
.guide-section { padding-block: var(--space-8) var(--space-section); }
.token-layout { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); margin-top: var(--space-8); }
.token-panel, .spacing-panel, .component-panel { padding: clamp(1.1rem, 3vw, 2rem); }
h3 { margin: 0 0 var(--space-6); font-size: var(--font-size-sm); font-weight: 750; letter-spacing: 0.02em; }
.swatches { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: var(--space-4) var(--space-3); }
.swatch { min-width: 0; display: grid; gap: 0.2rem; }
.swatch-color { height: 3.2rem; border: 1px solid rgb(255 255 255 / 22%); border-radius: var(--radius-sm); }
.swatch-name { margin-top: 0.25rem; font-size: var(--font-size-xs); font-weight: 650; }
code { color: #c1cee0; font-family: ui-monospace, SFMono-Regular, Consolas, monospace; font-size: 0.68rem; }
.type-display { margin: 0; font-size: clamp(1.8rem, 3.2vw, 2.6rem); font-weight: 800; line-height: 1.1; letter-spacing: -0.04em; }
.type-body, .body-copy { color: var(--color-muted); font-size: var(--font-size-sm); }
.type-label { display: flex; flex-wrap: wrap; justify-content: space-between; gap: var(--space-2); margin: var(--space-6) 0 0; color: #dce6f5; font-size: var(--font-size-xs); font-weight: 700; letter-spacing: 0.1em; }
.type-label span, .state-note { color: #bdc9d9; font-size: var(--font-size-xs); font-weight: 400; letter-spacing: 0; }
.spacing-panel { margin-top: var(--space-4); }
.spacing-list { display: grid; gap: var(--space-3); }
.spacing-item { display: grid; grid-template-columns: minmax(7rem, 10rem) 1fr; align-items: center; gap: var(--space-4); }
.spacing-bar { display: block; max-width: 100%; height: 0.45rem; border-radius: var(--radius-pill); background: linear-gradient(90deg, var(--color-blue-bright), var(--color-orange)); }
.surface-tokens { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: var(--space-3); margin-top: var(--space-4); }
.surface-token { display: grid; min-height: 8rem; align-content: start; gap: var(--space-2); padding: var(--space-4); }
.surface-token > span { font-size: var(--font-size-sm); font-weight: 700; }
.radius-sample, .border-sample, .shadow-sample, .glass-sample { display: block; width: 100%; height: 1.4rem; margin-top: var(--space-2); border: var(--border-subtle); background: var(--color-glass); }
.radius-sample { border-radius: var(--radius-md); }
.border-sample { border-color: rgb(255 255 255 / 40%); }
.shadow-sample { border: 0; background: var(--color-navy); box-shadow: var(--shadow-card); }
.glass-sample { border-radius: var(--radius-sm); background: var(--glass-surface); box-shadow: var(--shadow-card); -webkit-backdrop-filter: var(--glass-blur); backdrop-filter: var(--glass-blur); }
.component-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--space-4); margin-top: var(--space-8); }
.component-panel:first-child { display: grid; align-content: start; gap: var(--space-4); }
.button-panel { display: grid; gap: var(--space-4); align-content: start; }
.button-panel h3 { margin-bottom: 0; }
.button-row { display: flex; flex-wrap: wrap; align-items: center; gap: var(--space-3); }
.body-copy { max-width: 34ch; margin: 0; }
.background-grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-4); margin-top: var(--space-8); }
.background-sample { position: relative; display: flex; min-height: 14rem; align-items: end; overflow: hidden; border: var(--border-subtle); border-radius: var(--radius-md); background: var(--background-atmosphere); isolation: isolate; }
.background-sample :deep(.grid-surface) { z-index: -1; opacity: 0.72; }
.linear-sample :deep(.grid-surface) { mask-image: none; }
.warp-sample :deep(.grid-surface) { mask-image: none; opacity: 0.65; }
.sample-copy { position: relative; z-index: 1; width: 100%; padding: var(--space-4); background: linear-gradient(transparent, rgb(5 9 17 / 90%)); }
.sample-copy h3 { margin: 0; font-size: var(--font-size-base); }
.sample-copy p { margin: 0; color: var(--color-muted); font-size: var(--font-size-xs); }
.responsive-note { display: flex; align-items: center; gap: var(--space-4); margin-top: var(--space-4); border-left: 2px solid var(--color-orange); padding: var(--space-4) var(--space-6); color: var(--color-muted); background: rgb(255 255 255 / 4%); }
.responsive-note p { margin: 0; font-size: var(--font-size-sm); }
.device-mark { color: var(--color-orange); font-size: 1.5rem; }
.guide-footer { border-top: 1px solid rgb(255 255 255 / 10%); padding-block: var(--space-6); color: #aeb8c8; font-size: var(--font-size-xs); }
@media (max-width: 760px) {
  .token-layout, .component-grid, .background-grid { grid-template-columns: 1fr; }
  .surface-tokens { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .swatches { grid-template-columns: repeat(4, minmax(0, 1fr)); }
  .background-sample { min-height: 11rem; }
}
@media (max-width: 420px) {
  .swatches { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .spacing-item { grid-template-columns: minmax(6.5rem, 1fr) 1fr; gap: var(--space-2); }
  .spacing-item code { font-size: 0.62rem; }
}
</style>
