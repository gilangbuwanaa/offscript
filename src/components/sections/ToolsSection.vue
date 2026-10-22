<script setup>
import { PhCode, PhPalette } from '@phosphor-icons/vue'
import GlassCard from '../ui/GlassCard.vue'
import PageContainer from '../ui/PageContainer.vue'
import SectionHeading from '../ui/SectionHeading.vue'

const categories = [
  { title: 'Development tools', Icon: PhCode },
  { title: 'Creative tools', Icon: PhPalette },
]
</script>

<template>
  <section class="tools-section" aria-labelledby="tools-title">
    <PageContainer>
      <SectionHeading id="tools-title" eyebrow="Toolkit" :level="2">Tools I work with</SectionHeading>
      <div class="tool-categories">
        <GlassCard v-for="category in categories" :key="category.title" class="tool-card">
          <component :is="category.Icon" :size="28" weight="duotone" aria-hidden="true" />
          <div><h3>{{ category.title }}</h3><p>Items will be added after the tool list is confirmed.</p></div>
        </GlassCard>
      </div>
    </PageContainer>
  </section>
</template>

<style scoped>
.tools-section { position: relative; padding: 0 0 var(--space-section); text-align: center; }
.tools-section :deep(.section-heading) { justify-items: center; }
.tools-section :deep(.heading) { max-width: none; }
.tool-categories { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--space-4); margin-top: var(--space-8); }
.tool-card { display: flex; min-height: 8rem; align-items: center; gap: var(--space-4); padding: var(--space-6); text-align: left; }
.tool-card :deep(svg) { flex: 0 0 auto; color: #8cb8f1; }
.tool-card h3 { margin: 0; font-size: var(--font-size-base); font-weight: 750; }
.tool-card p { margin: var(--space-1) 0 0; color: var(--color-muted); font-size: var(--font-size-xs); }
@media (max-width: 640px) { .tool-categories { grid-template-columns: 1fr; } }
</style>
