<script setup>
defineProps({
  variant: { type: String, default: 'primary', validator: (value) => ['primary', 'secondary'].includes(value) },
  disabled: { type: Boolean, default: false },
  type: { type: String, default: 'button' },
})
</script>

<template>
  <button class="ui-button" :class="`ui-button--${variant}`" :disabled="disabled" :type="type">
    <slot />
  </button>
</template>

<style scoped>
.ui-button { display: inline-flex; min-height: 2.75rem; align-items: center; justify-content: center; gap: var(--space-2); padding: 0.65rem 1.15rem; border: 1px solid transparent; border-radius: var(--radius-sm); cursor: pointer; font-size: var(--font-size-sm); font-weight: 700; text-decoration: none; transition: transform var(--motion-fast), background-color var(--motion-fast), border-color var(--motion-fast); }
.ui-button:hover:not(:disabled) { transform: translateY(-1px); }
.ui-button--primary { color: white; background: linear-gradient(115deg, #2867b5, #173965); box-shadow: var(--shadow-blue); }
.ui-button--primary:hover:not(:disabled) { background: linear-gradient(115deg, #3478ca, #1e4b82); }
.ui-button--secondary { border-color: rgb(255 255 255 / 42%); color: white; background: rgb(255 255 255 / 5%); }
.ui-button--secondary:hover:not(:disabled) { border-color: white; background: rgb(255 255 255 / 12%); }
.ui-button:disabled { cursor: not-allowed; opacity: 0.48; }
</style>
