<script setup lang="ts">
const posts = [
  {
    title: "Буллинг",
    subtitle: "в детстве меня травили",
    href: "/blog/bullying",
  },
  {
    title: "Стигма",
    subtitle: "стресс меньшинств",
    href: "/blog/stigma",
  },
  {
    title: "Tinder",
    subtitle: "одиночество в сети",
    href: "/blog/tinder",
  },
]
</script>

<template>
  <BaseSection class="blog-section">
    <div class="blog-section__cards">
      <div class="blog-card blog-card--title">
        <h2 class="card-title">
          Блог
        </h2>
      </div>

      <NuxtLink
        v-for="post in posts"
        :key="post.title"
        :to="post.href"
        class="blog-card"
      >
        <h3 class="card-title">
          {{ post.title }}
        </h3>

        <p class="card-subtitle">
          {{ post.subtitle }}
        </p>

        <p class="card-button">
          Читать
        </p>
      </NuxtLink>
    </div>
  </BaseSection>
</template>

<style scoped lang="scss">
.blog-section {
  margin-top: var(--spacing-6xl);
  padding: 0;
  background: url("/assets/images/bg-blog.jpg") no-repeat center center;
  background-size: cover;

  .blog-section__cards {
    display: grid;
    grid-template-columns: 1fr;

    @include display-sm {
      grid-template-columns: repeat(2, 1fr);
    }

    @include display-md {
      grid-template-columns: repeat(4, 1fr);
    }

    .blog-card {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-2xl);
      padding: var(--spacing-4xl);
      color: rgb(var(--v-theme-on-surface));
      text-decoration: none;
      background: rgba(var(--v-theme-surface), 0.9);
      border-bottom: 1px solid rgba(var(--v-theme-on-surface), 0.2);
      transition: background-color 0.3s, backdrop-filter 0.3s;

      // aspect-ratio: 1 / 1;

      &:last-child {
        border-bottom: none;
      }

      @include display-sm {
        border-right: 1px solid rgba(var(--v-theme-on-surface), 0.2);
        aspect-ratio: 1 / 1;

        &:nth-child(even) {
          border-right: none;
        }

        &:nth-last-child(-n + 2) {
          border-bottom: none;
        }
      }

      @include display-md {
        border-right: 1px solid rgba(var(--v-theme-on-surface), 0.2);
        aspect-ratio: 1 / 1;

        &:nth-child(even) {
          border-right: 1px solid rgba(var(--v-theme-on-surface), 0.2);
        }

        &:nth-child(4n) {
          border-right: none;
        }

        &:nth-last-child(-n + 4) {
          border-bottom: none;
        }
      }

      &:hover {
        background: rgba(var(--v-theme-surface), 0.85);
        backdrop-filter: blur(30px);
      }

      &--title {
        background: rgb(var(--v-theme-primary));

        &:hover {
          background: rgb(var(--v-theme-primary));
        }
      }

      .card-title {
        font: var(--display-sm);
        font-weight: var(--bold);
        text-transform: uppercase;
      }

      .card-subtitle {
        font: var(--text-lg);
        font-weight: var(--medium);
      }

      .card-button {
        margin-top: auto;
        font: var(--text-xl);
        font-weight: var(--bold);
        text-transform: uppercase;
      }
    }
  }
}
</style>
