<template>
  <li class="list-none">
    <NuxtLink :to="link" class="flex gap-3 items-center mb-3 p-2 rounded-md">
      <Icon :name="icon" class="w-6 h-6" />
      <p class="text-md font-semibold">{{ $t(name) }}</p>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
  const { name, link, icon } = defineProps<{
    name: string
    link: string
    icon: string
  }>()
</script>

<style scoped>
  .router-link-active {
    background: #dfdfdf;
  }
</style>
