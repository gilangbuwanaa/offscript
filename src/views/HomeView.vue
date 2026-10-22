<script setup>
import SiteNav from '../components/layout/SiteNav.vue'
import AboutEducationSection from '../components/sections/AboutEducationSection.vue'
import ContactSection from '../components/sections/ContactSection.vue'
import HomeHero from '../components/sections/HomeHero.vue'
import OrganizationCards from '../components/sections/OrganizationCards.vue'
import ToolsSection from '../components/sections/ToolsSection.vue'
import PageContainer from '../components/ui/PageContainer.vue'
import { educationOrganizations } from '../data/home.js'
</script>

<template>
  <div class="home-page">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <SiteNav :show-contact="true" :show-styleguide="false" />
    <main id="main-content">
      <HomeHero />
      <AboutEducationSection>
        <template #organizations>
          <OrganizationCards :organizations="educationOrganizations" />
        </template>
      </AboutEducationSection>
      <ToolsSection />
      <ContactSection />
    </main>
    <footer class="home-footer">
      <PageContainer>
        <p>Offscript · Building, learning, experimenting.</p>
      </PageContainer>
    </footer>
  </div>
</template>

<style scoped>
.home-page { min-height: 100vh; overflow: clip; background: var(--background-atmosphere); }
.skip-link { position: fixed; z-index: 10; top: 0.5rem; left: 0.5rem; transform: translateY(-150%); border-radius: var(--radius-sm); padding: 0.65rem 1rem; color: #0d1b2e; background: white; font-weight: 700; }
.skip-link:focus { transform: translateY(0); }
.home-footer { position: relative; z-index: 1; border-top: 1px solid rgb(255 255 255 / 9%); padding: var(--space-6) 0; color: #b6bfcd; background: #080b12; text-align: center; }
.home-footer p { margin: 0; font-size: var(--font-size-xs); }
</style>
