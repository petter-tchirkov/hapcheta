<template>
  <section>
    <Header>{{ $t('sidebar.client') }}</Header>
    <div class="container w-full p-4">
      <TabView>
        <TabPanel header="Shops">
          <client-shops-table />
        </TabPanel>
        <TabPanel header="Employees">
          <client-employees-table />
        </TabPanel>
        <TabPanel header="API Settings">
          <client-api-settings />
        </TabPanel>
      </TabView>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
