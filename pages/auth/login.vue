<template>
  <section class="flex justify-center items-center p-4">
    <div class="flex flex-col gap-3 w-full md:w-1/3 2xl:w-1/4 p-4">
      <h1 class="text-center text-3xl capitalize">{{ $t('title') }}</h1>
      <InputText :placeholder="$t('auth.login')" />
      <InputText :placeholder="$t('auth.password')" />
      <Button :label="$t('auth.login')" @click="navigateTo('/')" />
    </div>
  </section>
</template>

<script setup lang="ts">
  definePageMeta({
    layout: 'auth',
  })
</script>

<style scoped></style>
