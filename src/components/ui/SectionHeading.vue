<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  level: { type: Number, default: 2 },
})
</script>

<template>
  <div class="section-heading">
    <span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span>
    <component :is="`h${level}`" class="heading"><slot /></component>
  </div>
</template>

<style scoped>
.section-heading { display: grid; gap: var(--space-2); }
.eyebrow { color: #b8cbe7; font-size: var(--font-size-xs); font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase; }
.heading { max-width: 18ch; margin: 0; color: var(--color-text); font-size: clamp(1.8rem, 4vw, 3rem); font-weight: 800; line-height: 1.08; letter-spacing: -0.035em; text-transform: uppercase; }
</style>
