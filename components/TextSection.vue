<script setup lang="ts">
defineProps<{
  title: string
  text?: string
  list?: string[]
}>()
</script>

<template>
  <BaseSection class="text-section">
    <h2 class="section-title">
      {{ title }}
    </h2>

    <p v-if="text" class="section-text">
      {{ text }}
    </p>

    <ul v-if="list?.length" class="section-list">
      <li v-for="item in list" :key="item" class="section-list-item">
        {{ item }}
      </li>
    </ul>
  </BaseSection>
</template>

<style scoped lang="scss">
.text-section {
  margin-top: var(--spacing-6xl);
  padding-top: var(--spacing-6xl);
  padding-bottom: var(--spacing-6xl);
  background-color: rgb(var(--v-theme-surface));

  .section-title {
    margin-bottom: var(--spacing-2xl);
    font: var(--display-sm);
    font-weight: var(--bold);
    text-transform: uppercase;
  }

  .section-text {
    margin-bottom: var(--spacing-2xl);
    font: var(--text-lg);
    font-weight: var(--medium);
  }

  .section-list {
    padding-left: var(--spacing-2xl);
    font: var(--text-xl);
    font-weight: var(--medium);
    list-style-type: disc;
  }
}
</style>
