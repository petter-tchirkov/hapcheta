<template>
  <header class="border-b p-4 w-full flex items-center justify-between">
    <span class="text-2xl">
      <slot></slot>
    </span>
    <div class="lg:hidden">
      <Icon
        class="w-7 h-7 lg:hidden"
        name="iconamoon:menu-burger-horizontal-bold"
        @click="useUiStore().isSidebarShown = !useUiStore().isSidebarShown"
      />
    </div>
  </header>
</template>

<script setup lang="ts">
  import { useUiStore } from '~/store/ui'
</script>

<style scoped></style>
