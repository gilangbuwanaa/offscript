<script setup>
import { PhEnvelopeSimple, PhGithubLogo, PhLinkedinLogo, PhSpotifyLogo } from '@phosphor-icons/vue'
import PageContainer from '../ui/PageContainer.vue'
import PerspectiveGrid from '../ui/PerspectiveGrid.vue'
import { contactLinks } from '../../data/home.js'

const contactIcons = {
  email: PhEnvelopeSimple,
  github: PhGithubLogo,
  linkedin: PhLinkedinLogo,
  spotify: PhSpotifyLogo,
}
</script>

<template>
  <section id="contact" class="contact-section" aria-labelledby="contact-heading">
    <PerspectiveGrid variant="warp" />
    <PageContainer>
      <div class="contact-content">
        <div class="contact-copy">
          <p class="eyebrow">Open to connection</p>
          <h2 id="contact-heading">Have something<br />in mind?</h2>
          <p>I'm always open to interesting projects, collaborations, creative experiments, or a good conversation about something worth building.</p>
        </div>
        <nav class="contact-list" aria-label="Contact and social profiles">
          <a
            v-for="item in contactLinks"
            :key="item.label"
            class="contact-option"
            :href="item.href"
            :target="item.external ? '_blank' : undefined"
            :rel="item.external ? 'noopener noreferrer' : undefined"
          >
            <component :is="contactIcons[item.icon]" :size="20" weight="regular" aria-hidden="true" />
            <span>{{ item.label }}</span>
            <span class="link-cue" aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </PageContainer>
  </section>
</template>

<style scoped>
.contact-section { position: relative; isolation: isolate; overflow: hidden; padding: clamp(5rem, 13vw, 11rem) 0; background: linear-gradient(180deg, rgb(15 34 60 / 65%), rgb(7 11 19 / 90%)); }
.contact-section :deep(.grid-surface) { z-index: -1; opacity: 0.38; mask-image: linear-gradient(to bottom, transparent 0%, black 16%, black 86%, transparent 100%); }
.contact-content { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: clamp(2rem, 7vw, 6rem); }
.contact-copy { text-align: center; }
.eyebrow { margin: 0 0 var(--space-3); color: #a8c6ef; font-size: var(--font-size-xs); font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; }
h2 { margin: 0; font-size: clamp(2rem, 5vw, 3.75rem); font-weight: 850; line-height: 1.05; letter-spacing: -0.04em; }
.contact-copy > p:last-child { max-width: 34rem; margin: var(--space-4) auto 0; color: var(--color-muted); font-size: var(--font-size-sm); }
.contact-list { display: grid; gap: var(--space-2); }
.contact-option { display: grid; grid-template-columns: 1.5rem 1fr auto; min-height: 3.25rem; align-items: center; gap: var(--space-2); border: 1px solid rgb(255 255 255 / 44%); border-radius: var(--radius-sm); padding: 0.55rem 1rem; color: white; background: rgb(10 16 27 / 42%); text-decoration: none; transition: background-color var(--motion-fast), transform var(--motion-fast); }
.contact-option:hover { transform: translateY(-1px); background: rgb(255 255 255 / 12%); }
.contact-option:first-child { color: #15243a; background: #f8fafc; }
.contact-option span { font-size: var(--font-size-sm); font-weight: 650; }
.contact-option .link-cue { opacity: 0.72; font-size: var(--font-size-base); }
@media (max-width: 700px) {
  .contact-content { grid-template-columns: 1fr; gap: var(--space-8); }
  .contact-copy { text-align: left; }
  .contact-copy > p:last-child { margin-inline: 0; }
  .contact-list { max-width: 34rem; width: 100%; margin-inline: auto; }
}
</style>
