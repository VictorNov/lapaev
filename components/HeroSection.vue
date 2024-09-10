<script setup lang="ts">

</script>

<template>
  <BaseSection class="hero-section">
    <picture>
      <source
        srcset="/assets/images/hero-m.webp, /assets/images/hero-m@2x.webp 2x"
        media="(max-width: 600px)"
      />
      <source
        srcset="/assets/images/hero.webp, /assets/images/hero@2x.webp 2x"
      />
      <img
        class="hero-section__bg"
        src="/assets/images/hero.webp"
        alt="Психотерапевт Сергей Лапаев"
        width="1200"
        height="840"
      />
    </picture>

    <div class="hero-section__content">
      <h1 class="hero-section__title">
        Психотерапевт<br>
        <span class="hero-section__name">
          Сергей Лапаев
        </span>
      </h1>
    </div>

    <a
      class="hero-section__consult"
      href="#contacts"
    >
      Записаться на консультацию

      <v-icon
        icon="fas fa-chevron-right"
        size="16"
      />
    </a>
  </BaseSection>
</template>

<style scoped lang="scss">
.hero-section {
  position: relative;
  display: grid;
  grid-template:
    ". content" 1fr
    ". consult" auto
    / 1fr auto;
  gap: var(--spacing-2xl);
  height: calc(100vh - 80px - var(--spacing-8xl));
  margin: var(--spacing-5xl) auto;
  padding: var(--spacing-5xl) var(--spacing-8xl);
  color: rgb(var(--v-theme-surface));
  background: rgb(var(--v-theme-on-surface));

  @media screen and (orientation: portrait) {
    grid-template:
      "content" auto
      "consult" 1fr
      / 1fr;
    padding: var(--spacing-2xl) var(--spacing-3xl) var(--spacing-3xl);
    aspect-ratio: 1 / 1;
  }

  @include display-md {
    max-height: calc(var(--container-max-width-desktop) / 1.5);
  }

  @include display-xs-only {
    grid-template:
      "content" auto
      "consult" 1fr
      / 1fr;
    padding: var(--spacing-2xl) var(--spacing-3xl) var(--spacing-3xl);
  }

  &__bg {
    position: absolute;
    z-index: 0;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: left bottom;

    @media screen and (orientation: portrait) {
      inset: var(--spacing-10xl) 0 0;
      height: calc(100% - var(--spacing-10xl));
      object-fit: cover;
      object-position: center top;
    }

    @include display-xs-only {
      inset: var(--spacing-10xl) 0 0;
      height: calc(100% - var(--spacing-10xl));
      object-fit: cover;
      object-position: center bottom;
    }
  }

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    grid-area: content;
    gap: var(--spacing-2xl);
    align-items: end;
    justify-content: center;

    @include display-xs-only {
      align-items: start;
    }

    @media screen and (orientation: portrait) {
      align-items: start;
    }
  }

  &__title {
    font: var(--display-md);

    @include display-xs-only {
      font: var(--display-sm);
    }
  }

  &__name {
    color: rgb(var(--v-theme-primary));
    font: var(--display-lg);
    font-weight: var(--bold);

    @include display-md {
      font: var(--display-xl);
      font-weight: var(--bold);
    }
  }

  &__consult {
    position: relative;
    display: flex;
    grid-area: consult;
    align-items: center;
    align-self: end;
    justify-content: center;
    padding: var(--spacing-xl) var(--spacing-2xl);
    color: rgb(var(--v-theme-on-primary));
    font: var(--text-lg);
    font-weight: var(--bold);
    text-transform: uppercase;
    text-decoration: none;
    background: rgb(var(--v-theme-primary), 0.6);
    backdrop-filter: blur(20px);
    transition: background 0.2s;

    &:hover {
      background: rgb(var(--v-theme-primary), 0.8);
    }

    & > .v-icon {
      margin-left: var(--spacing-md);
    }
  }
}
</style>
