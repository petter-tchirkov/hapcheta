<template>
  <section>
    <Header>{{ route.params.shop }}</Header>
    <div class="p-4">
      <Card class="mb-2">
        <template #title>Shop details</template>
        <template #content>
          <div class="flex flex-col gap-3">
            <div class="flex justify-between items-center">
              <span>Name</span>
              <InputText v-model="name" />
            </div>
            <div class="flex justify-between items-center">
              <span>Phone number</span>
              <InputNumber v-model="phoneNumber" />
            </div>
            <div class="flex justify-between items-center">
              <span>Last modified</span>
              <span>2023-08-09</span>
            </div>
          </div>
        </template>
      </Card>
      <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-3">
        <Card class="mb-2">
          <template #title>Work Schedule</template>
          <template #content>
            <DataTable
              v-model:editingRows="editingRows"
              class="p-datatable-sm"
              :value="schedule"
              edit-mode="row"
            >
              <Column
                header="Day"
                field="day"
              />
              <Column
                header="Opens at"
                field="opens"
              >
                <template #editor="{ data, field }">
                  <Dropdown
                    v-model="data[field]"
                    :options="hours"
                  >
                    <template #option="slotProps">
                      {{ slotProps.option }}
                    </template>
                  </Dropdown>
                </template>
              </Column>
              <Column
                header="Closes at"
                field="closes"
              />
              <Column
                :row-editor="true"
                style="width: 10%; min-width: 8rem"
                body-style="text-align:center"
              ></Column>
            </DataTable>
          </template>
        </Card>
        <Card class="mb-2">
          <template #title>Products in stock</template>
          <template #content>
            <DataTable
              :value="products"
              class="p-datatable-sm"
            >
              <Column
                field="id"
                header="ID"
              />
              <Column
                field="name"
                header="Product Name"
              />
              <Column
                field="price"
                header="Price"
              />
              <Column
                field="quantity"
                header="Quantity"
              />
              <Column header="Visibility">
                <template #body="{ data }">
                  <InputSwitch v-model="data.isVisible" />
                </template>
              </Column>
            </DataTable>
          </template>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { useProductsStore } from '~/store/products'
  const route = useRoute()
  const products = useProductsStore().products
  const phoneNumber = ref(123456789)
  const name = ref('Hapcheta')

  const schedule = ref([
    { day: 'Monday', opens: '9:00', closes: '21:00' },
    { day: 'Tuesday', opens: '9:00', closes: '21:00' },
    { day: 'Wednesday', opens: '9:00', closes: '22:00' },
    { day: 'Thursday', opens: '9:00', closes: '21:00' },
    { day: 'Friday', opens: '9:00', closes: '21:00' },
    { day: 'Satturday', opens: '9:00', closes: '23:00' },
    { day: 'Sunday', opens: '9:00', closes: '23:00' },
  ])

  const hours = ref([
    '00:00',
    '01:00',
    '02:00',
    '03:00',
    '04:00',
    '05:00',
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
  ])

  const editingRows = ref([])
</script>

<style scoped></style>
