<script setup lang="ts">

</script>

<template>
  <BaseSection class="cta-section">
    <div class="cta-section__action">
      <h2 class="cta-section__title">Готовы начать путь к улучшению?</h2>

      <p class="cta-section__text">Свяжитесь со мной и запишитесь на консультацию уже сегодня, чтобы начать процесс исцеления и обретения гармонии.</p>

      <NuxtLink
        class="cta-section__btn"
        href="#contacts"
      >
        Записаться на бесплатную консультацию

        <v-icon
          icon="fas fa-chevron-right"
          size="16"
        />
      </NuxtLink>
    </div>
    <div class="cta-section__picture">
      <img
        class="cta-section__picture-image"
        src="/assets/images/bg-blog.jpg"
        alt="Консультация с психотерапевтом"
        width="1067"
        height="800"
      />
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.cta-section {
  display: grid;
  grid-template-columns: 1fr;
  margin-top: var(--spacing-6xl);
  padding: 0;

  @include display-sm {
    grid-template-columns: 1fr 2fr;
  }

  &__action {
    display: flex;
    flex-direction: column;
    padding: var(--spacing-4xl) var(--spacing-4xl);
    color: rgb(var(--v-theme-on-primary));
    background-color: rgb(var(--v-theme-primary));
  }

  &__title {
    margin-bottom: var(--spacing-2xl);
    font: var(--display-sm);
    font-weight: var(--bold);
    text-transform: uppercase;
  }

  &__text {
    margin-bottom: var(--spacing-8xl);
    font: var(--text-lg);
    font-weight: var(--medium);
  }

  &__picture-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__btn {
    display: flex;
    grid-area: consult;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    padding: var(--spacing-xl) var(--spacing-2xl);
    color: rgb(var(--v-theme-on-surface));
    font: var(--text-lg);
    font-weight: var(--bold);
    text-transform: uppercase;
    text-decoration: none;
    background: rgb(var(--v-theme-surface), 0.6);
    backdrop-filter: blur(20px);
    transition: background 0.2s;

    &:hover,
    &:focus-visible {
      background: rgb(var(--v-theme-surface), 0.8);
      outline: none;
    }

    & > .v-icon {
      margin-left: var(--spacing-md);
    }

    @include display-xs-only {
      font: var(--text-md);
      font-weight: var(--bold);
      text-wrap: balance;
    }
  }
}
</style>
