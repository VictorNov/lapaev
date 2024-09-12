<script setup lang="ts">
const steps = [
  {
    title: 'Изучаем проблему',
    text: 'Детально разберём проблему, поставим чёткую и понятную цель для дальнейшей работы.',
  },
  {
    title: 'Меняем смысл проблемы',
    text: 'Переосмыслим прежние взгляды на проблему, чтобы создать новый, более конструктивный подход.',
  },
  {
    title: 'Понимание, как создаются проблемы',
    text: 'Выявим, как ваши мысли и убеждения формируют проблему, и начнем разбираться, как можно её трансформировать.',
  },
  {
    title: 'Трансформация проблемы',
    text: 'Внедрим необходимые инструменты и ресурсы для изменения вашего восприятия и отношения к проблеме.',
  },
  {
    title: 'Закрепление изменений',
    text: 'Зафиксируем положительные изменения, чтобы они стали устойчивой частью вашего мышления и поведения.',
  },
]
</script>

<template>
  <BaseSection class="steps-section">
    <div class="title-card">
      <h2 class="section-title">
        Что вы получите от встреч?
      </h2>
    </div>

    <div class="text-card">
      <p class="section-text">
        После проведения первой бесплатной встречи мы вместе обозначим вашу проблему и&nbsp;обсудим, какие изменения
        вы хотите достичь. В&nbsp;процессе работы мы пройдем через 5&nbsp;ключевых шагов, каждый из&nbsp;которых приближает вас
        к&nbsp;решению вашей проблемы.
      </p>
    </div>

    <NuxtLink
      v-ripple
      class="action-card"
      href="#contacts"
    >
      <v-icon
        color="on-primary"
        icon="fas fa-chevron-right"
        size="30"
      />

      <span class="action-title-wrapper">
        Бесплатная встреча
      </span>

      <span class="action-text">
        Познакомимся, обсудим, как можно решить вашу проблему, и наметим дальнейшие шаги к её преодолению.
      </span>
    </NuxtLink>

    <div
      v-for="(step, index) in steps"
      :key="index"
      class="step-card"
      :class="`card-${index + 1}`"
    >
      <div class="step-number">
        {{ index + 1 }}
      </div>

      <div class="step-title">
        {{ step.title }}
      </div>

      <div class="step-text">
        {{ step.text }}
      </div>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.steps-section {
  display: grid;
  grid-template:
    "title" auto
    "text" auto
    "card1" auto
    "card2" auto
    "card3" auto
    "card4" auto
    "card5" auto
    "action" auto
    / 1fr;
  gap: 1px;
  margin-top: var(--spacing-6xl);
  padding: 0;

  @include display-sm {
    grid-template:
    "title title" auto
    "text text" auto
    "card1 card2" auto
    "card3 card4" auto
    "card5 action" auto
    / 1fr 1fr;
  }

  @include display-md {
    grid-template:
    "title title title text text text text text text text text text" auto
    "card1 card1 card1 card1 card2 card2 card2 card2 card3 card3 card3 card3" auto
    "card4 card4 card4 card4 card5 card5 card5 card5 action action action action" auto
    / 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  .title-card {
    display: flex;
    grid-area: title;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-4xl) var(--spacing-4xl);
    color: rgb(var(--v-theme-on-primary));
    background-color: rgb(var(--v-theme-primary));

    .section-title {
      font: var(--display-sm);
      font-weight: var(--bold);
      text-transform: uppercase;
    }
  }

  .text-card {
    display: flex;
    grid-area: text;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-4xl) var(--spacing-4xl);
    color: rgb(var(--v-theme-on-surface));
    background-color: rgb(var(--v-theme-surface));
    backdrop-filter: blur(20px);

    .section-text {
      font: var(--text-xl);
      font-weight: var(--medium);
    }
  }

  .action-card {
    display: flex;
    flex-direction: column;
    grid-area: action;
    align-items: center;
    padding: var(--spacing-5xl) var(--spacing-4xl);
    color: rgb(var(--v-theme-on-surface));
    text-align: center;
    text-decoration: none;
    background-color: rgb(var(--v-theme-primary));
    transition: background-color 0.3s;

    &:hover {
      background-color: rgb(var(--v-theme-primary-darken-1));
    }

    .action-title-wrapper {
      margin-top: var(--spacing-xl);
      font: var(--text-xl);
      font-weight: var(--bold);
      text-transform: uppercase;
    }

    .action-text {
      margin-top: var(--spacing-2xl);
      font: var(--text-lg);
      font-weight: var(--medium);
      text-wrap: balance;
    }
  }

  .card-1 {
    grid-area: card1;
  }

  .card-2 {
    grid-area: card2;
  }

  .card-3 {
    grid-area: card3;
  }

  .card-4 {
    grid-area: card4;
  }

  .card-5 {
    grid-area: card5;
  }

  .step-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--spacing-4xl) var(--spacing-4xl);
    color: rgb(var(--v-theme-surface));
    text-align: center;
    background-color: rgb(var(--v-theme-on-surface));

    .step-number {
      color: rgb(var(--v-theme-primary));
      font: var(--display-md);
      font-weight: var(--bold);
    }

    .step-title {
      margin-top: var(--spacing-md);
      font: var(--text-xl);
      font-weight: var(--bold);
      text-transform: uppercase;
    }

    .step-text {
      margin-top: var(--spacing-2xl);
      font: var(--text-lg);
      font-weight: var(--medium);
      text-wrap: balance;
    }
  }
}
</style>
