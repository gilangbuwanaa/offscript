<template>
  <article class="glass-card"><slot /></article>
</template>

<style scoped>
.glass-card { border: var(--border-subtle); border-radius: var(--radius-md); background: var(--glass-surface); box-shadow: var(--shadow-card); -webkit-backdrop-filter: var(--glass-blur); backdrop-filter: var(--glass-blur); }
</style>
