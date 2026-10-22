<script setup>
import SiteNav from '../components/layout/SiteNav.vue'
import ProjectExperiencesSection from '../components/sections/ProjectExperiencesSection.vue'
import ResearchPublicationsSection from '../components/sections/ResearchPublicationsSection.vue'
import WorkExperiencesSection from '../components/sections/WorkExperiencesSection.vue'
import PageContainer from '../components/ui/PageContainer.vue'
import { projectExperiences, researchPublications, workExperiences } from '../data/experiences.js'
</script>

<template>
  <div class="experiences-page">
    <a class="skip-link" href="#main-content">Skip to content</a>
    <SiteNav />
    <main id="main-content">
      <h1 class="page-title">Experiences</h1>
      <WorkExperiencesSection :experiences="workExperiences" />
      <ProjectExperiencesSection :projects="projectExperiences" />
      <ResearchPublicationsSection :publications="researchPublications" />
    </main>
    <footer class="experiences-footer">
      <PageContainer><p>Offscript · Building, learning, experimenting.</p></PageContainer>
    </footer>
  </div>
</template>

<style scoped>
.experiences-page { min-height: 100vh; overflow: clip; background: var(--background-atmosphere); }
.page-title { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; }
.skip-link { position: fixed; z-index: 10; top: 0.5rem; left: 0.5rem; transform: translateY(-150%); border-radius: var(--radius-sm); padding: 0.65rem 1rem; color: #0d1b2e; background: white; font-weight: 700; }
.skip-link:focus { transform: translateY(0); }
.experiences-footer { position: relative; z-index: 1; border-top: 1px solid rgb(255 255 255 / 9%); padding: var(--space-6) 0; color: #b6bfcd; background: #080b12; text-align: center; }
.experiences-footer p { margin: 0; font-size: var(--font-size-xs); }
</style>
