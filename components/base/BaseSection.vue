<script setup lang="ts">
withDefaults(
  defineProps<{
    fullWidth?: boolean
  }>(),
  {
    fullWidth: false
  }
)
</script>

<template>
  <section class="base-section">
    <slot />
  </section>
</template>

<style scoped lang="scss">
.base-section {
  @include container;
}
</style>
