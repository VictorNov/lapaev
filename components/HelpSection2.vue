<script setup lang="ts">
const problems = [
  {
    title: "Одиночество",
    shortDescription: "Когда никто не слышит и некому доверить своё сердце.",
    detailedDescription: "Я помогу вам почувствовать связь с собой и окружающими."
  },
  {
    title: "Неуверенность в поведении",
    shortDescription: "Когда сложно выразить себя и быть понятым.",
    detailedDescription: "Я помогу вам обрести уверенность и научиться быть собой."
  },
  {
    title: "Созависимые и конфликтные отношения",
    shortDescription: "Когда отношения приносят больше боли, чем радости.",
    detailedDescription: "Мы разберемся, как восстановить баланс и гармонию в отношениях."
  },
  {
    title: "Сексуальные и другие трудности",
    shortDescription: "Когда интимные моменты приносят тревогу, а не радость.",
    detailedDescription: "Я помогу вам разобраться в своих желаниях и вернуть радость от близости."
  },
  {
    title: "Психо-эмоциональное и сексуализированное насилие",
    shortDescription: "Когда воспоминания о насилии всё ещё болят и не отпускают.",
    detailedDescription: "Мы справимся с болью прошлого и начнем строить светлое будущее."
  }
]
</script>

<template>
  <BaseSection class="help-section">
    <div class="cards-wrapper">
      <div class="title-wrapper">
        <h2 class="section-title">
          Терапия поможет вам справиться с любыми трудностями
        </h2>
      </div>

      <div
        class="card"
        v-for="(problem, index) in problems"
        :key="index"
      >
        <div class="card-title-wrapper">
          <h3 class="card-title">
            {{ problem.title }}
          </h3>

          <v-icon
            class="card-icon"
            color="rgb(var(--v-utility-brand-700))"
            size="24"
            icon="fa fa-plus"
          />
        </div>

        <p class="card-text">
          {{ problem.shortDescription }}
        </p>

        <div class="hover-content">
          <p class="card-text card-text--hover">
            {{ problem.detailedDescription }}
          </p>
        </div>
      </div>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.help-section {
  display: flex;
  flex-direction: column;
  gap: 1px;
  margin-top: var(--spacing-6xl);
  padding: 0;
  background: rgba(var(--v-theme-on-surface), 0.2);

  .title-wrapper {
    display: flex;
    gap: var(--spacing-2xl);
    justify-content: space-between;
    padding: var(--spacing-4xl);
    color: rgb(var(--v-theme-surface));
    background: rgb(var(--v-theme-on-surface));

    .section-title {
      font: var(--display-sm);
      font-weight: var(--bold);
      text-transform: uppercase;
    }
  }

  .cards-wrapper {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1px;

    @include display-md {
      grid-template-columns: repeat(2, 1fr);
    }

    .card {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-2xl);
      padding: var(--spacing-4xl);
      color: rgb(var(--v-theme-on-surface));
      background: rgb(var(--v-theme-surface));
      cursor: pointer;
      user-select: none;

      .card-title-wrapper {
        display: flex;
        gap: var(--spacing-2xl);
        align-items: start;
        justify-content: space-between;

        .card-title {
          font: var(--text-xl);
          font-weight: var(--bold);
          text-transform: uppercase;
          text-wrap: balance;
        }
      }

      .card-text {
        font: var(--text-lg);
        font-weight: var(--medium);
      }

      .hover-content {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: start;
        padding: var(--spacing-4xl);
        color: rgba(var(--v-theme-surface), 0);
        background: rgba(var(--v-theme-on-surface), 0);
        backdrop-filter: blur(0);
        transition: color 0.3s, background 0.6s, backdrop-filter 0.3s;
        inset: 0;

        .card-text--hover {
          font: var(--text-xl);
          font-weight: var(--medium);
          text-wrap: balance;
        }
      }

      &:hover .hover-content {
        color: rgb(var(--v-theme-surface));
        background: rgba(var(--v-theme-on-surface), 1);
        backdrop-filter: blur(10px);
      }
    }
  }
}
</style>
