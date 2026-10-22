<script setup>
import GlassCard from '../ui/GlassCard.vue'
import PageContainer from '../ui/PageContainer.vue'
import PerspectiveGrid from '../ui/PerspectiveGrid.vue'
import SectionHeading from '../ui/SectionHeading.vue'

defineProps({ publications: { type: Array, required: true } })
</script>

<template>
  <section id="research-publications" class="research-section" aria-labelledby="research-heading">
    <PerspectiveGrid variant="warp" />
    <PageContainer>
      <SectionHeading id="research-heading" eyebrow="Research & writing">Research Experiences</SectionHeading>
      <div class="research-grid">
        <GlassCard v-for="publication in publications" :key="publication.title" class="research-card">
          <div class="research-meta"><span>{{ publication.institution }}</span><time>{{ publication.date }}</time></div>
          <h3>{{ publication.title }}</h3>
          <p class="research-description">{{ publication.description }}</p>
          <div class="research-bottom">
            <p class="research-highlight"><strong>{{ publication.highlight }}</strong><span>{{ publication.highlightLabel }}</span></p>
          </div>
        </GlassCard>
      </div>
    </PageContainer>
  </section>
</template>

<style scoped>
.research-section { position: relative; isolation: isolate; overflow: hidden; padding: var(--space-section) 0; background: linear-gradient(180deg, #142e50, #0c1728 75%, #080c16); }
.research-section :deep(.grid-surface) { z-index: -1; opacity: 0.43; mask-image: linear-gradient(to bottom, transparent 0%, black 18%, black 88%, transparent 100%); }
.research-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--space-2); margin-top: var(--space-8); }
.research-card { display: flex; min-height: 24rem; flex-direction: column; padding: var(--space-4); color: #101827; background: #f8fafc; }
.research-meta { display: flex; justify-content: space-between; gap: var(--space-2); color: #566174; font-size: var(--font-size-xs); }
.research-meta span { font-weight: 700; }
.research-meta time { flex: 0 0 auto; }
.research-card h3 { margin: var(--space-3) 0; color: #111827; font-size: clamp(1.1rem, 2vw, 1.4rem); line-height: 1.25; }
.research-description { margin: 0; color: #374151; font-size: var(--font-size-sm); line-height: 1.6; }
.research-bottom { display: flex; align-items: flex-end; justify-content: space-between; gap: var(--space-3); margin-top: auto; padding-top: var(--space-6); }
.research-highlight { display: grid; margin: 0; }
.research-highlight strong { color: #173965; font-size: 1.75rem; line-height: 1; }
.research-highlight span { color: #596579; font-size: var(--font-size-xs); }
@media (max-width: 700px) { .research-grid { grid-template-columns: 1fr; } .research-card { min-height: 0; } }
</style>
