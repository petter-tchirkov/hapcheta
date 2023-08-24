<template>
  <div>
    <Header>{{ $t('client.employee.employee') + ' ' + employee.name }}</Header>
    <div class="p-4">
      <Card style="width: 25em">
        <template #header>
          <img
            class="rounded-t-md"
            alt="user header"
            src="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg?w=2000"
          />
        </template>
        <template #title>
          <InputText
            v-model="employee.name"
            class="w-full"
          />
        </template>
        <template #subtitle>
          <Dropdown
            v-model="employee.role"
            class="w-full"
            :options="roles"
          ></Dropdown>
        </template>
        <template #content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </p>
        </template>
        <template #footer>
          <Button
            icon="pi pi-check"
            label="Save"
          />
          <Button
            icon="pi pi-times"
            label="Cancel"
            severity="secondary"
            style="margin-left: 0.5em"
          />
          <Button
            icon="pi pi-trash"
            label="Delete"
            severity="danger"
            style="margin-left: 0.5em"
          />
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useEmployeeStore } from '~/store/employees'

  const workers = useEmployeeStore().workers
  const route = useRoute()

  const employee = computed(() => {
    return workers.find((w) => w.id == route.params.employee)
  })

  const roles = ref(['trader', 'owner', 'pharmacist', 'doctor'])
</script>

<style scoped></style>
