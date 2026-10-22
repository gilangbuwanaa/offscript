<script setup>
import GlassCard from '../ui/GlassCard.vue'

defineProps({
  organizations: { type: Array, required: true },
})
</script>

<template>
  <div id="organizations" class="organization-grid">
    <GlassCard v-for="organization in organizations" :key="organization.name" class="organization-card">
      <img :src="organization.image" :alt="organization.imageAlt" width="516" height="345" loading="lazy" />
      <h4>{{ organization.name }}</h4>
      <p>{{ organization.role }}</p>
    </GlassCard>
  </div>
</template>

<style scoped>
.organization-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--space-3); }
.organization-card { min-width: 0; min-height: 22rem; padding: var(--space-3); color: #172b48; background: linear-gradient(180deg, rgb(244 247 251 / 82%), rgb(221 228 238 / 64%)); }
.organization-card img { width: 100%; aspect-ratio: 1.5; border-radius: var(--radius-sm); object-fit: cover; }
.organization-card h4 { margin: var(--space-3) 0 var(--space-2); color: #173b67; font-size: var(--font-size-sm); font-weight: 800; line-height: 1.35; text-transform: uppercase; }
.organization-card p { margin: 0; color: #354359; font-size: var(--font-size-sm); }
@media (max-width: 560px) {
  .organization-grid { grid-template-columns: 1fr; }
  .organization-card { min-height: 0; }
}
</style>
