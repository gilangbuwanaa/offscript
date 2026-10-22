<script setup>
import GlassCard from '../ui/GlassCard.vue'
import PageContainer from '../ui/PageContainer.vue'
import SectionHeading from '../ui/SectionHeading.vue'

defineProps({ projects: { type: Array, required: true } })
</script>

<template>
  <section id="project-experiences" class="projects-section" aria-labelledby="projects-heading">
    <PageContainer>
      <SectionHeading id="projects-heading" eyebrow="Selected builds">Projects Experiences</SectionHeading>
      <div class="project-grid">
        <GlassCard v-for="(project, index) in projects" :key="project.name" class="project-card" :class="{ 'project-card--featured': index === 0 }">
          <div class="project-meta"><span>{{ project.type }}</span><time>{{ project.period }}</time></div>
          <h3>{{ project.name }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <ul class="technology-list" :aria-label="`${project.name} technologies`">
            <li v-for="technology in project.technologies" :key="technology">{{ technology }}</li>
          </ul>
        </GlassCard>
      </div>
    </PageContainer>
  </section>
</template>

<style scoped>
.projects-section { position: relative; padding: var(--space-section) 0; overflow: hidden; background: radial-gradient(ellipse at 50% 44%, rgb(37 76 126 / 28%), transparent 60%), linear-gradient(180deg, #0b1425, #080c16); }
.project-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); align-items: stretch; gap: var(--space-3); margin-top: var(--space-8); }
.project-card { display: flex; min-height: 20rem; flex-direction: column; padding: var(--space-4); background: linear-gradient(155deg, rgb(233 238 247 / 92%), rgb(202 213 231 / 88%)); color: #101b2d; }
.project-card--featured { box-shadow: 0 1rem 3rem rgb(51 102 170 / 20%); }
.project-meta { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 0.5rem; color: #41516b; font-size: var(--font-size-xs); font-weight: 700; }
.project-meta span { border-radius: var(--radius-pill); padding: 0.15rem 0.6rem; color: white; background: #173965; }
.project-card h3 { margin: var(--space-4) 0 var(--space-2); font-size: clamp(1.35rem, 2vw, 1.75rem); line-height: 1.1; }
.project-description { margin: 0; color: #26364d; font-size: var(--font-size-sm); line-height: 1.55; }
.technology-list { display: flex; flex-wrap: wrap; gap: 0.35rem; margin: auto 0 0; padding: var(--space-4) 0 0; list-style: none; }
.technology-list li { border-radius: var(--radius-pill); padding: 0.1rem 0.55rem; color: #fff; background: #183b68; font-size: 0.68rem; font-weight: 700; }
@media (max-width: 900px) { .project-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 600px) { .project-grid { grid-template-columns: 1fr; } .project-card { min-height: 0; } .technology-list { margin-top: var(--space-4); } }
</style>
