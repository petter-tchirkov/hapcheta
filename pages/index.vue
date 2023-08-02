<template>
  <section>
    <Header>{{ $t('sidebar.trade_network') }}</Header>
    <div class="container p-4 w-full">
      <DataTable
        v-model:editingRows="editingRows"
        :value="tradeNetworks"
        edit-mode="row"
        data-key="name"
        paginator
        :rows="10"
        class="p-datatable-sm"
        @row-edit-save="onRowEditSave"
      >
        <template #header>
          <Button
            icon="pi pi-plus"
            severity="success"
            :label="$t('trade_networks.new_point')"
            size="small"
            @click="isAddTradePointDialogOpened = true"
          />
        </template>
        <Column field="name" :header="$t('trade_networks.name')">
          <template #editor="{ data, field }">
            <InputText v-model="data[field]" />
          </template>
        </Column>
        <Column field="coordinates" :header="$t('trade_networks.coordinates')">
          <template #body="{ data }">
            <div class="flex flex-col">
              <span>X: {{ data.coordinates.x }}</span>
              <span>Y: {{ data.coordinates.y }}</span>
            </div>
          </template>
        </Column>
        <Column field="isOpened" :header="$t('trade_networks.status.title')">
          <template #body="{ data }">
            <Tag
              :value="
                data.isOpened
                  ? $t('trade_networks.status.opened')
                  : $t('trade_networks.status.closed')
              "
              :severity="data.isOpened ? 'primary' : 'danger'"
            />
          </template>
        </Column>
        <Column field="orders" :header="$t('trade_networks.orders')">
          <template #editor="{ data, field }">
            <InputNumber v-model="data[field]" />
          </template>
        </Column>
        <Column
          field="refreshedAt"
          :header="$t('trade_networks.refreshed_at')"
        />
        <Column
          :row-editor="true"
          style="width: 10%; min-width: 8rem"
          body-style="text-align:center"
        >
          <Icon name="ic:outline-mode-edit-outline" />
        </Column>
        <Column>
          <template #body="{ data }">
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
        v-model:visible="isAddTradePointDialogOpened"
        :modal="true"
        :header="$t('trade_networks.new_point')"
        :style="{ width: '450px' }"
      >
        <InputText
          id="name"
          v-model="newPoint.name"
          class="mb-3 w-full"
          :placeholder="$t('trade_networks.name')"
        />
        <div class="flex flex-col gap-2 mb-3">
          <span>{{ $t('trade_networks.coordinates') }}</span>
          <InputText v-model="newPoint.coordinates.x" placeholder="x" />
          <InputText v-model="newPoint.coordinates.y" placeholder="y" />
        </div>
        <Dropdown
          v-model="newPoint.isOpened"
          class="w-full mb-3"
          :options="[
            $t('trade_networks.status.opened'),
            $t('trade_networks.status.closed'),
          ]"
          :placeholder="$t('trade_networks.status.title')"
        />
        <InputNumber
          v-model="newPoint.orders"
          class="w-full mb-3"
          :placeholder="$t('trade_networks.orders')"
        />
        <Calendar v-model="newPoint.refreshedAt" class="w-full" />
      </Dialog>
      <Dialog
        v-model:visible="isDeleteTradePointDialogOpened"
        :style="{ width: '450px' }"
        header="Confirm"
        :modal="true"
      >
        <div class="confirmation-content flex items-center">
          <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
          <span>Are you sure you want to delete?</span>
        </div>
        <template #footer>
          <Button label="No" icon="pi pi-times" />
          <Button label="Yes" icon="pi pi-check" />
        </template>
      </Dialog>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useTradeNetworkStore } from '~/store/tradeNetworks'

  const tradeNetworks = useTradeNetworkStore().tradeNetworks
  const editingRows = ref([])
  const isAddTradePointDialogOpened = ref(false)
  const isDeleteTradePointDialogOpened = ref(false)

  const newPoint = ref({
    name: '',
    coordinates: { x: '', y: '' },
    isOpened: false,
    orders: null,
    refreshedAt: '',
  })

  const onRowEditSave = (event) => {
    const { newData, index } = event

    products.tradeNetworks[index] = newData
  }
</script>

<style scoped></style>
