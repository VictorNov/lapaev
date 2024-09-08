<template>
  <v-app>
    <BaseHeader />

    <v-main class="main-content">
      <div class="main-content__bg" />

      <div class="main-content__slot">
        <slot />
      </div>
    </v-main>

    <v-footer />
  </v-app>
</template>

<style scoped lang="scss">
.main-content {
  &__bg {
    position: absolute;
    background-image: url("@/assets/images/bg-2.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
    inset: 0;

    &::before {
      position: absolute;
      z-index: 0;
      display: block;
      background-color: rgb(var(--v-theme-surface), 0.8);
      content: "";
      inset: 0;
    }
  }

  &__slot {
    position: relative;
    z-index: 1;
  }
}
</style>
