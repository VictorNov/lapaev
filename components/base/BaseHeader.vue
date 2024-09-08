<script setup lang="ts">
const links = [
  {
    title: 'Обо мне',
    url: '#about',
  },
  {
    title: 'Блог',
    url: '#blog',
  },
  {
    title: 'Цены',
    url: '#prices',
  },
  {
    title: 'Контакты',
    url: '#contacts',
  },
]

const route = useRoute()

const isActive = (url: string) => {
  return url.startsWith('#') ? route.hash === url : route.path === url
}

const isMenuOpen = ref(false)
</script>

<template>
  <div>
    <v-app-bar
      class="base-header__wrapper"
      height="80"
      elevation="0"
    >
      <BaseSection class="base-header">
        <BaseLogo class="logo-desktop" :size="250" />
        <BaseLogo class="logo-mobile" :size="200" />

        <nav class="base-header__navigation">
          <NuxtLink
            class="base-header__link"
            :class="{ active: isActive(link.url) }"
            v-for="link in links"
            :key="link.title"
            :href="link.url"
          >
            {{ link.title }}
          </NuxtLink>
        </nav>

        <v-btn
          class="menu-button"
          color="on-surface"
          :icon="`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`"
          @click="isMenuOpen = !isMenuOpen"
        />
      </BaseSection>
    </v-app-bar>

    <v-navigation-drawer
      v-model="isMenuOpen"
      class="mobile-menu"
      location="top"
      temporary
      floating
      elevation="0"
    >
      <v-list nav>
        <v-list-item
          v-for="link in links"
          :key="link.title"
        >
          <NuxtLink
            class="base-header__link"
            :class="{ active: isActive(link.url) }"
            :href="link.url"
          >
            {{ link.title }}
          </NuxtLink>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style scoped lang="scss">
.base-header__wrapper {
  background-color: rgba(var(--v-theme-surface), 0) !important;
  backdrop-filter: blur(20px);
}

.base-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo-desktop {
    display: none;

    @include display-md {
      display: block;
    }
  }

  .logo-mobile {
    display: block;

    @include display-md {
      display: none;
    }
  }

  .base-header__navigation {
    display: none;
    gap: 20px;

    @include display-md {
      display: flex;
    }
  }

  .menu-button {
    display: block;

    @include display-md {
      display: none;
    }
  }
}

.base-header__link {
  position: relative;
  display: block;
  padding: 12px 20px;
  color: rgb(var(--v-theme-on-surface));
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.2s;

  &::before {
    position: absolute;
    z-index: -1;
    height: 0;
    background-color: rgba(var(--v-theme-on-surface));
    transition: height 0.3s;
    content: '';
    inset: 0 0 auto;
  }

  &:hover,
  &.active {
    color: rgb(var(--v-theme-surface));

    &::before {
      height: 100%;
    }
  }
}

.mobile-menu {
  top: 0 !important;
  background-color: rgba(var(--v-theme-surface), 0);
  backdrop-filter: blur(20px);

  &.v-navigation-drawer--active {
    transform: translateY(80px) !important;
  }
}
</style>
