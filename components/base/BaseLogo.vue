<script setup lang="ts">
defineProps<{
  size: number
}>()
</script>

<template>
  <NuxtIcon
    class="base-logo"
    name="logo"
    :style="{ width: `${size || 250}px` }"
  />
</template>

<style scoped lang="scss">
.base-logo {
  :deep(svg) {
    width: inherit;
    height: auto;
    margin-bottom: 0;
    vertical-align: middle;
  }
}
</style>
