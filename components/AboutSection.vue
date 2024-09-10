<script setup lang="ts">

</script>

<template>
  <BaseSection class="about-section">
    <div class="about-section__cards">
      <div class="card-about">
        <h2 class="card-title">
          Обо мне
        </h2>

        <p class="card-text">
          Я&nbsp;когнитивно-поведенческий психотерапевт. Помогаю людям, которые имеют трудности в&nbsp;межличностном
          общении, сложности в&nbsp;партнерских отношениях, проблемы в&nbsp;семье, на&nbsp;работе, с&nbsp;учебой,
          а&nbsp;также с&nbsp;адаптацией к&nbsp;жизненным изменениям и&nbsp;личностные кризисы.
        </p>
      </div>

      <div class="methods">
        <div class="method-card">
          <h2 class="card-title">
            Подходы
          </h2>
        </div>

        <div class="method-card">
          <h3 class="method-title">
            КПТ
          </h3>

          <p class="method-description">
            Когнитивно-поведенческая психотерапия
          </p>
        </div>

        <div class="method-card">
          <h3 class="method-title">
            РЭПТ
          </h3>

          <p class="method-description">
            Рационально-эмотивная психотерапия
          </p>
        </div>

        <div class="method-card">
          <h3 class="method-title">
            Схема-терапия
          </h3>

          <p class="method-description">
            Интегративный подход третьей волны КПТ
          </p>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.about-section {
  margin-top: var(--spacing-6xl);
  padding: 0;

  .about-section__cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px;

    @include display-md {
      grid-template-columns: 1fr 1fr;
    }
  }

  .card-about {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-2xl);
    padding: var(--spacing-4xl);
    color: rgb(var(--v-theme-on-primary));
    background: rgb(var(--v-theme-primary));
  }

  .card-title {
    font: var(--display-sm);
    font-weight: var(--bold);
    text-transform: uppercase;
  }

  .card-text {
    font: var(--text-xl);
    font-weight: var(--medium);
    text-wrap: balance;
  }

  .methods {
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 1px;

    @include display-xs-only {
      grid-template: 1fr / 1fr;
      gap: 1px;
    }
  }

  .method-card {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
    padding: var(--spacing-4xl);
    color: rgb(var(--v-utility-gray-50));
    background: rgb(var(--v-utility-gray-900));

    &:first-child {
      color: rgb(var(--v-theme-on-surface));
      background: rgb(var(--v-theme-surface));

      // background: rgb(66 70 80 / 50%);
      backdrop-filter: blur(7px);
    }
  }

  .method-title {
    font: var(--display-xs);
    font-weight: var(--bold);
    text-transform: uppercase;
  }

  .method-description {
    font: var(--text-md);
    font-weight: var(--medium);
    text-wrap: balance;
  }
}
</style>
