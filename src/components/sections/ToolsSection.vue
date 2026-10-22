<script setup>
import { PhFigmaLogo, PhGithubLogo, PhNotionLogo } from '@phosphor-icons/vue'
import GlassCard from '../ui/GlassCard.vue'
import PageContainer from '../ui/PageContainer.vue'
import SectionHeading from '../ui/SectionHeading.vue'
import { tools } from '../../data/home.js'

const brandIcons = {
  figma: PhFigmaLogo,
  github: PhGithubLogo,
  notion: PhNotionLogo,
}
</script>

<template>
  <section class="tools-section" aria-labelledby="tools-title">
    <PageContainer>
      <SectionHeading id="tools-title" eyebrow="Toolkit" :level="2">Tools I work with</SectionHeading>
      <div class="tool-categories">
        <GlassCard v-for="category in tools" :key="category.category" class="tool-card">
          <h3>{{ category.category }}</h3>
          <ul class="tool-list" :aria-label="category.category">
            <li v-for="tool in category.items" :key="typeof tool === 'string' ? tool : tool.name" class="tool-item">
              <component
                :is="brandIcons[tool.brandIcon]"
                v-if="typeof tool !== 'string' && tool.brandIcon"
                :size="17"
                weight="regular"
                aria-hidden="true"
              />
              <span>{{ typeof tool === 'string' ? tool : tool.name }}</span>
            </li>
          </ul>
        </GlassCard>
      </div>
    </PageContainer>
  </section>
</template>

<style scoped>
.tools-section { position: relative; padding: 0 0 var(--space-section); text-align: center; }
.tools-section :deep(.section-heading) { justify-items: center; }
.tools-section :deep(.heading) { max-width: none; }
.tool-categories { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: var(--space-4); margin-top: var(--space-8); text-align: left; }
.tool-card { min-width: 0; padding: var(--space-4); }
.tool-card h3 { margin: 0 0 var(--space-3); color: #dbe8f9; font-size: var(--font-size-sm); font-weight: 750; }
.tool-list { display: flex; flex-wrap: wrap; gap: var(--space-2); margin: 0; padding: 0; list-style: none; }
.tool-item { display: inline-flex; min-height: 2rem; align-items: center; gap: 0.35rem; border: 1px solid rgb(255 255 255 / 19%); border-radius: var(--radius-pill); padding: 0.3rem 0.65rem; color: #e7edf7; background: rgb(7 14 25 / 32%); font-size: var(--font-size-xs); line-height: 1.2; }
.tool-item :deep(svg) { color: #a8c9f5; }
@media (max-width: 900px) { .tool-categories { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 640px) { .tool-categories { grid-template-columns: 1fr; } }
</style>
