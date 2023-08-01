<template>
  <section>
    <Header>{{ $t('sidebar.trade_network') }}</Header>
    <div class="container p-4 flex justify-center">
      <div class="shadow-lg rounded-xl p-4 grow">
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
          <Column field="name" :header="$t('trade_networks.name')">
            <template #editor="{ data, field }">
              <InputText v-model="data[field]" />
            </template>
          </Column>
          <Column
            field="coordinates"
            :header="$t('trade_networks.coordinates')"
          >
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
        </DataTable>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useTradeNetworkStore } from '~/store/tradeNetworks'
  const tradeNetworks = useTradeNetworkStore().tradeNetworks
  const editingRows = ref([])

  const onRowEditSave = (event) => {
    const { newData, index } = event

    products.tradeNetworks[index] = newData
  }
</script>

<style scoped></style>
