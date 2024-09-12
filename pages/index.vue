<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import TextSection from '~/components/TextSection.vue'
import HelpSection from '~/components/HelpSection.vue'
import CtaSection from '~/components/CtaSection.vue'
</script>

<template>
  <div class="index-page">
    <HeroSection />

    <AboutSection />

    <HelpSection />

    <CtaSection />

    <HelpSection2 />

    <StepsSection />

    <BlogSection />
  </div>
</template>

<style scoped lang="scss">
.index-page {
  padding-bottom: var(--spacing-6xl);
}
</style>
