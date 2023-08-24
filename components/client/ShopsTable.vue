<template>
  <DataTable
    v-model:editingRows="editingRows"
    :value="shops"
    edit-mode="row"
    data-key="name"
    row-hover
    paginator
    :rows="8"
    class="p-datatable-sm cursor-pointer"
    @row-click="redirectToPage"
  >
    <template #header>
      <Button
        icon="pi pi-plus"
        severity="success"
        :label="$t('client.shop.new_point')"
        size="small"
        @click="isAddStoreOpened = true"
      />
    </template>
    <Column
      field="name"
      :header="$t('client.shop.name')"
    >
      <template #editor="{ data, field }">
        <InputText v-model="data[field]" />
      </template>
    </Column>
    <Column
      field="coordinates"
      :header="$t('client.shop.coordinates')"
    >
      <template #body="{ data }">
        <div class="flex flex-col">
          <span>X: {{ data.coordinates.x }}</span>
          <span>Y: {{ data.coordinates.y }}</span>
        </div>
      </template>
    </Column>
    <Column
      field="isOpened"
      :header="$t('client.shop.status.title')"
    >
      <template #body="{ data }">
        <Tag
          :value="
            data.isOpened
              ? $t('client.shop.status.opened')
              : $t('client.shop.status.closed')
          "
          :severity="data.isOpened ? 'primary' : 'danger'"
        />
      </template>
    </Column>
    <Column
      field="orders"
      :header="$t('client.shop.orders')"
    >
      <template #editor="{ data, field }">
        <InputNumber v-model="data[field]" />
      </template>
    </Column>
    <Column
      field="refreshedAt"
      :header="$t('client.shop.refreshed_at')"
    />
    <Column
      :row-editor="true"
      style="width: 10%; min-width: 8rem"
      body-style="text-align:center"
    >
      <Icon name="ic:outline-mode-edit-outline" />
    </Column>
    <Column>
      <template #body>
        <Button
          icon="pi pi-trash"
          text
          rounded
          severity="danger"
          @click="
            isDeleteTradePointDialogOpened = !isDeleteTradePointDialogOpened
          "
        />
      </template>
    </Column>
  </DataTable>
  <Dialog
    v-model:visible="isAddStoreOpened"
    class="p-4"
    :modal="true"
    :header="$t('client.shop.new_point')"
    :style="{ width: '450px' }"
  >
    <InputText
      id="name"
      v-model="newPoint.name"
      class="w-full mb-3"
      :placeholder="$t('client.shop.name')"
    />
    <div class="flex flex-col gap-2 mb-5">
      <span>{{ $t('client.shop.coordinates') }}</span>
      <InputText
        v-model="newPoint.coordinates.x"
        placeholder="x"
      />
      <InputText
        v-model="newPoint.coordinates.y"
        placeholder="y"
      />
    </div>
    <Dropdown
      v-model="newPoint.isOpened"
      class="w-full mb-3"
      :options="[
        $t('client.shop.status.opened'),
        $t('client.shop.status.closed'),
      ]"
      :placeholder="$t('client.shop.status.title')"
    />
    <InputNumber
      v-model="newPoint.orders"
      class="w-full mb-3"
      :placeholder="$t('client.shop.orders')"
    />
    <Calendar
      v-model="newPoint.refreshedAt"
      class="w-full"
      show-icon
    />
  </Dialog>
  <Dialog
    v-model:visible="isDeleteTradePointDialogOpened"
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
</template>

<script setup lang="ts">
  import { DataTableRowEditCancelEvent } from 'primevue/datatable'
  import { useShopsStore } from '~/store/shops'

  const shops = useShopsStore().shops
  const editingRows = ref([])
  const isAddStoreOpened = ref(false)
  const isDeleteTradePointDialogOpened = ref(false)

  const newPoint = ref({
    name: '',
    coordinates: { x: '', y: '' },
    isOpened: false,
    orders: null,
    refreshedAt: '',
  })

  const redirectToPage = (event: DataTableRowEditCancelEvent) => {
    navigateTo(`/shop/${event.data.name}`)
  }
</script>

<style scoped></style>
