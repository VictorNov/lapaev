<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import AboutSection from '~/components/AboutSection.vue'
import TextSection from '~/components/TextSection.vue'
import HelpSection from '~/components/HelpSection.vue'
</script>

<template>
  <div class="index-page">
    <HeroSection />

    <AboutSection />

    <HelpSection />

    <BlogSection />
  </div>
</template>

<style scoped lang="scss">
.index-page {
  padding-bottom: var(--spacing-6xl);
}
</style>
