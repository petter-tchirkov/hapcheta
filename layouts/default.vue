<template>
  <main class="flex w-full h-[100dvh]">
    <Sidebar
      v-model:visible="useUiStore().isSidebarShown"
      class="lg:hidden"
    >
      <ul>
        <SidebarMenuItem
          v-for="item in menuItems"
          :key="item.name"
          :name="item.name"
          :link="item.link"
          :icon="item.icon"
          @click="useUiStore().isSidebarShown = false"
        />
      </ul>
    </Sidebar>
    <aside class="border-r p-4 grow w-64 hidden lg:block">
      <ul>
        <SidebarMenuItem
          v-for="item in menuItems"
          :key="item.name"
          :name="item.name"
          :link="item.link"
          :icon="item.icon"
          @click="useUiStore().isSidebarShown = false"
        />
      </ul>
    </aside>
    <div class="w-full">
      <NuxtPage />
    </div>
  </main>
</template>

<script setup lang="ts">
  import { useUiStore } from '~/store/ui'

  const menuItems = [
    {
      name: 'sidebar.client',
      link: '/',
      icon: 'healthicons:pharmacy-alt-outline',
    },
    {
      name: 'sidebar.settings',
      link: '/settings',
      icon: 'material-symbols:settings-outline',
    },
    { name: 'sidebar.logout', link: '/auth/login', icon: 'ic:sharp-log-out' },
  ]
</script>

<style></style>
