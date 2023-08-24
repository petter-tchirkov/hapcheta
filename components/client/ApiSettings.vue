<template>
  <div>
    <Card class="w-1/2 mb-5">
      <template #title>Generate API key</template>
      <template #content>
        <div class="flex gap-5">
          <InputText
            placeholder="API key"
            class="grow"
            disabled
          />
          <Button
            severity="success"
            label="Generate"
          />
        </div>
      </template>
    </Card>
    <DataTable
      v-model:editingRows="editingRows"
      :value="keys"
      edit-mode="row"
      data-key="name"
      row-hover
    >
      <Column
        field="id"
        header="ID"
      />
      <Column header="Key">
        <template #body="{ data }">
          <Password
            v-model="data.key"
            toggle-mask
            disabled
            unstyled
            :feedback="false"
          />
        </template>
      </Column>
      <Column
        header="Worker"
        field="worker"
      />
      <Column
        header="Active Till"
        field="activeTill"
      />
      <Column header="Activation Status">
        <template #body="{ data }">
          <InputSwitch v-model="data.isActive" />
        </template>
      </Column>
      <Column>
        <template #body>
          <Button
            icon="pi pi-trash"
            text
            rounded
            severity="danger"
            @click="isDeleteApiKeyDialogOpened = !isDeleteApiKeyDialogOpened"
          />
        </template>
      </Column>
    </DataTable>
    <Dialog
      v-model:visible="isDeleteApiKeyDialogOpened"
      :style="{ width: '450px' }"
      header="Confirm"
      :modal="true"
    >
      <div class="flex items-center confirmation-content">
        <i
          class="mr-3 pi pi-exclamation-triangle"
          style="font-size: 2rem"
        />
        <span>Are you sure you want to delete?</span>
      </div>
      <template #footer>
        <Button
          label="No"
          icon="pi pi-times"
        />
        <Button
          label="Yes"
          icon="pi pi-check"
        />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
  const keys = ref([
    {
      id: 1,
      key: '234124123512512w51346',
      isActive: false,
      worker: 'John Doe',
      activeTill: '2023-12-31',
    },
    {
      id: 3,
      key: '234124123512512w51346',
      isActive: true,
      worker: 'John Doe',
      activeTill: '2023-12-31',
    },
    {
      id: 3,
      key: '234124123512512w51346',
      isActive: true,
      worker: 'John Doe',
      activeTill: '2023-12-31',
    },
    {
      id: 4,
      key: '234124123512512w51346',
      isActive: true,
      worker: 'John Doe',
      activeTill: '2023-12-31',
    },
  ])
  const editingRows = ref([])
  const isDeleteApiKeyDialogOpened = ref(false)
</script>

<style scoped></style>
