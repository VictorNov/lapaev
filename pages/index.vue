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

    <TextSection
      title="Помогаю при"
      :list="[
        'депрессии',
        'тревожности',
        'одиночестве',
        'утрате и горе',
        'панических атаках',
        'неуверенности в поведении',
        'созависимых и конфликтных отношениях',
        'испытывающим сексуальные и другие трудности',
        'пережившим психо-эмоциональное и сексуализированное насилие',
      ]"
    />
  </div>
</template>

<style scoped lang="scss">
.index-page {
  min-height: 200vh;
}
</style>
