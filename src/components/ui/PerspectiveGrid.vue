<script setup>
defineProps({
  variant: { type: String, default: 'linear', validator: (value) => ['linear', 'warp'].includes(value) },
})
</script>

<template>
  <div class="grid-surface" :class="`grid-surface--${variant}`" aria-hidden="true"></div>
</template>

<style scoped>
.grid-surface { position: absolute; z-index: 0; inset: 0; pointer-events: none; background-position: center; background-repeat: no-repeat; background-size: cover; opacity: 0.22; mask-image: linear-gradient(to bottom, black 0%, transparent 96%); }
.grid-surface--linear { background-image: url('/images/grid.png'); }
.grid-surface--warp { background-image: url('/images/cursive-grid.png'); mask-image: linear-gradient(to bottom, transparent 0%, black 25%, black 78%, transparent 100%); }
</style>
