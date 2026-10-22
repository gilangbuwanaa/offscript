<script setup>
import GlassCard from '../ui/GlassCard.vue'
import PageContainer from '../ui/PageContainer.vue'
import PerspectiveGrid from '../ui/PerspectiveGrid.vue'
import SectionHeading from '../ui/SectionHeading.vue'

defineProps({ experiences: { type: Array, required: true } })
</script>

<template>
  <section id="work-experiences" class="work-section" aria-labelledby="work-heading">
    <PerspectiveGrid />
    <PageContainer>
      <SectionHeading id="work-heading" eyebrow="Selected roles">Work Experiences</SectionHeading>
      <div class="work-list">
        <GlassCard v-for="experience in experiences" :key="experience.organization" class="work-card">
          <div class="organization-mark"><img :src="experience.logo" :alt="experience.logoAlt" loading="lazy" /></div>
          <div class="work-copy">
            <div class="work-heading-row">
              <div>
                <h3>{{ experience.organization }}</h3>
                <p class="work-role">{{ experience.role }}</p>
              </div>
              <time>{{ experience.period }}</time>
            </div>
            <p class="work-description">{{ experience.description }}</p>
          </div>
        </GlassCard>
      </div>
    </PageContainer>
  </section>
</template>

<style scoped>
.work-section { position: relative; isolation: isolate; overflow: hidden; padding: clamp(3rem, 6vw, 5rem) 0 var(--space-section); background: linear-gradient(180deg, #122f55 0%, #102748 55%, #0b1425 100%); }
.work-section :deep(.grid-surface) { z-index: -1; opacity: 0.48; mask-image: linear-gradient(to bottom, transparent 0%, black 10%, black 85%, transparent 100%); }
.work-list { display: grid; gap: var(--space-2); margin-top: var(--space-4); }
.work-card { display: grid; grid-template-columns: 9.25rem minmax(0, 1fr); align-items: center; gap: var(--space-4); border-color: rgb(255 255 255 / 30%); padding: var(--space-4); background: rgb(229 236 248 / 48%); }
.organization-mark { display: grid; min-height: 8rem; place-items: center; border-radius: var(--radius-md); padding: var(--space-3); background: #f8fafc; }
.organization-mark img { width: 100%; max-height: 7rem; object-fit: contain; }
.work-copy { min-width: 0; }
.work-heading-row { display: flex; align-items: flex-start; justify-content: space-between; gap: var(--space-3); }
.work-heading-row h3 { margin: 0; color: #fff; font-size: clamp(1rem, 1.8vw, 1.25rem); line-height: 1.3; }
.work-role { margin: 0.2rem 0 0; color: #f3f6fb; font-size: var(--font-size-sm); font-weight: 650; }
.work-heading-row time { flex: 0 0 auto; border-radius: var(--radius-pill); padding: 0.2rem 0.65rem; color: #fff; background: rgb(255 255 255 / 18%); font-size: var(--font-size-xs); font-weight: 700; }
.work-description { margin: var(--space-2) 0 0; color: #f0f3f8; font-size: var(--font-size-xs); line-height: 1.55; }
@media (max-width: 640px) {
  .work-card { grid-template-columns: 1fr; gap: var(--space-3); }
  .organization-mark { min-height: 6rem; }
  .organization-mark img { max-height: 5rem; }
  .work-heading-row { flex-direction: column; }
  .work-heading-row time { order: -1; }
}
</style>
