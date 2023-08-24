<template>
  <DataTable
    :value="workers"
    row-hover
    paginator
    :rows="15"
    class="p-datatable-sm cursor-pointer"
    @row-click="redirectToPage"
  >
    <Column
      field="id"
      header="ID"
    />
    <Column
      field="name"
      header="Name"
    />
    <Column
      field="phone"
      header="Phone"
    />
    <Column
      field="role"
      header="Role"
    />
    <Column
      field="status"
      header="Status"
    >
      <template #body="{ data }">
        <Tag
          :value="data.status"
          :severity="data.status === 'active' ? 'success' : 'danger'"
        />
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
  import { DataTableRowEditCancelEvent } from 'primevue/datatable'
  import { useEmployeeStore } from '~/store/employees'

  const workers = useEmployeeStore().workers

  const redirectToPage = (event: DataTableRowEditCancelEvent) => {
    navigateTo(`/employee/${event.data.id}`)
  }
</script>

<style scoped></style>
