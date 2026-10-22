<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  showContact: { type: Boolean, default: false },
  showStyleguide: { type: Boolean, default: true },
})

const menuOpen = ref(false)
const closeMenu = () => { menuOpen.value = false }
</script>

<template>
  <header class="site-nav">
    <RouterLink class="brand" to="/" aria-label="Offscript, home" @click="closeMenu">
      <img src="/images/BWN_logo.png" alt="" width="80" height="24" />
    </RouterLink>
    <button class="menu-toggle" type="button" :aria-expanded="menuOpen" aria-controls="site-navigation" @click="menuOpen = !menuOpen">
      <span>{{ menuOpen ? 'Close' : 'Menu' }}</span>
      <span class="menu-icon" aria-hidden="true"><i></i><i></i></span>
    </button>
    <nav id="site-navigation" class="navigation" :class="{ 'navigation--open': menuOpen }" aria-label="Main navigation">
      <RouterLink to="/" @click="closeMenu">Home</RouterLink>
      <RouterLink to="/about" @click="closeMenu">About</RouterLink>
      <RouterLink v-if="showStyleguide" to="/styleguide" @click="closeMenu">Styleguide</RouterLink>
      <a v-if="showContact" class="contact-link" href="#contact" @click="closeMenu">Let's chat</a>
    </nav>
  </header>
</template>

<style scoped>
.site-nav { position: relative; z-index: 2; display: flex; width: min(calc(100% - 2.5rem), var(--page-width)); min-height: 5rem; align-items: center; justify-content: space-between; margin-inline: auto; }
.brand { display: inline-flex; align-items: center; text-decoration: none; }
.brand img { width: 5rem; height: auto; }
.navigation { display: flex; align-items: center; gap: clamp(1.25rem, 3vw, 2.75rem); }
.navigation a { color: var(--color-muted); font-size: var(--font-size-sm); font-weight: 600; text-decoration: none; transition: color var(--motion-fast); }
.navigation a:hover, .navigation a.router-link-exact-active { color: white; }
.navigation .contact-link { border: 1px solid rgb(255 255 255 / 45%); border-radius: var(--radius-sm); padding: 0.45rem 0.9rem; color: white; }
.menu-toggle { display: none; }
@media (max-width: 640px) {
  .site-nav { min-height: 4.5rem; }
  .menu-toggle { display: inline-flex; min-height: 2.75rem; align-items: center; gap: 0.65rem; border: var(--border-subtle); border-radius: var(--radius-sm); padding: 0 0.8rem; color: white; background: rgb(8 12 22 / 55%); font-size: var(--font-size-xs); font-weight: 700; }
  .menu-icon { display: grid; gap: 4px; }
  .menu-icon i { display: block; width: 16px; height: 1px; background: currentColor; }
  .navigation { position: absolute; top: calc(100% - 0.2rem); right: 0; left: 0; display: none; flex-direction: column; align-items: stretch; gap: 0; overflow: hidden; border: var(--border-subtle); border-radius: var(--radius-md); background: #111d30; box-shadow: var(--shadow-card); }
  .navigation--open { display: flex; }
  .navigation a { padding: 0.9rem 1rem; }
  .navigation .contact-link { margin: 0.5rem 0.75rem 0.75rem; padding: 0.7rem 0.8rem; text-align: center; }
  .navigation a + a { border-top: 1px solid rgb(255 255 255 / 10%); }
}
</style>
