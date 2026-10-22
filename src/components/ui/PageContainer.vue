<template>
  <div class="page-container"><slot /></div>
</template>

<style scoped>
.page-container {
  width: min(calc(100% - 2.5rem), var(--page-width));
  margin-inline: auto;
}

@media (max-width: 480px) {
  .page-container { width: min(calc(100% - 2rem), var(--page-width)); }
}
</style>
