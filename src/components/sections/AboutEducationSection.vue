<script setup>
import GlassCard from '../ui/GlassCard.vue'
import PageContainer from '../ui/PageContainer.vue'
import SectionHeading from '../ui/SectionHeading.vue'
</script>

<template>
  <section id="about" class="about-section" aria-labelledby="about-heading">
    <img class="building-image" src="/images/ULBI_background.png" alt="" aria-hidden="true" width="1440" height="1467" loading="lazy" />
    <span class="orange-mark" aria-hidden="true"></span>
    <PageContainer>
      <SectionHeading id="about-heading" eyebrow="About" :level="2">A little<br />about me</SectionHeading>
      <GlassCard class="about-panel">
        <p class="about-copy">
          I come from an Informatics Engineering background, but I've never really been interested in staying inside one box. I enjoy turning ideas into something tangible — whether that's a web application, a visual concept, a piece of music, or simply an experiment with a new tool.
        </p>
        <h3 class="subheading">Education background</h3>
        <article class="education-card">
          <div>
            <p class="degree-meta">Bachelor of Applied Science <span>// GPA 3.69/4.00</span></p>
            <h4>Informatics Engineering</h4>
            <p class="institution">Universitas Logistik &amp; Bisnis Internasional (ULBI)</p>
          </div>
          <img src="/images/ULBI_Icon.png" alt="ULBI orange hexagon mark" width="503" height="512" loading="lazy" />
        </article>
        <h3 class="subheading organization-heading">Education organizations</h3>
        <slot name="organizations" />
      </GlassCard>
    </PageContainer>
  </section>
</template>

<style scoped>
.about-section { position: relative; isolation: isolate; padding: 0 0 var(--space-section); }
.building-image { position: absolute; z-index: -1; top: 3rem; right: -3%; width: min(78%, 72rem); height: 88%; object-fit: contain; object-position: right center; opacity: 0.62; filter: grayscale(1); pointer-events: none; }
.orange-mark { position: absolute; z-index: -1; top: 34%; left: max(0px, calc((100vw - var(--page-width)) / 2 - 3.5rem)); width: 6rem; height: 12rem; background: var(--color-orange); clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 42%, 50% 67%, 100% 92%, 100% 100%, 50% 78%, 0 100%, 0 83%, 50% 58%, 0 33%); opacity: 0.98; }
.about-panel { position: relative; margin-top: var(--space-3); padding: clamp(1rem, 2vw, 1.5rem); background: linear-gradient(135deg, rgb(231 237 246 / 56%), rgb(198 208 223 / 41%)); color: #101c2e; }
.about-copy { max-width: 70rem; margin: 0 0 var(--space-6); color: #27364b; font-size: var(--font-size-sm); }
.subheading { margin: 0 0 var(--space-3); color: #173b67; font-size: var(--font-size-base); font-weight: 800; text-transform: uppercase; }
.education-card { display: flex; min-height: 8.5rem; align-items: center; justify-content: space-between; gap: var(--space-4); border: 1px solid rgb(255 255 255 / 66%); border-radius: var(--radius-md); padding: var(--space-4) var(--space-6); background: rgb(244 247 251 / 39%); }
.degree-meta { margin: 0; color: #59677a; font-size: var(--font-size-xs); }
.degree-meta span { color: #8994a2; }
.education-card h4 { margin: var(--space-2) 0; color: #163c6b; font-size: clamp(1.3rem, 3vw, 2rem); font-weight: 850; line-height: 1.1; text-transform: uppercase; }
.institution { margin: 0; color: #1d3b60; font-size: var(--font-size-sm); font-weight: 650; }
.education-card img { width: 4.75rem; height: 4.75rem; object-fit: contain; }
.organization-heading { margin-top: var(--space-4); }
@media (max-width: 760px) {
  .building-image { top: 13%; right: -35%; width: 130%; height: 75%; opacity: 0.38; }
  .orange-mark { left: -2rem; width: 4rem; height: 9rem; }
  .education-card { padding: var(--space-4); }
}
@media (max-width: 480px) {
  .about-panel { padding: 0.85rem; }
  .about-copy { font-size: 0.84rem; }
  .education-card img { width: 3.5rem; height: 3.5rem; }
  .degree-meta { max-width: 23ch; }
}
</style>
