import { defineStore } from 'pinia'
import { Worker } from '~/types/WorkerTypes'

export const useEmployeeStore = defineStore('employee', () => {
  const workers: Ref<Worker[]> = ref([
    {
      id: 1,
      name: 'John Doe',
      phone: '3804212312312',
      role: 'trader',
      status: 'active',
    },
    {
      id: 2,
      name: 'Jane Doe',
      phone: '3804212312312',
      role: 'owner',
      status: 'inactive',
    },
    {
      id: 3,
      name: 'John Doe',
      phone: '3804212312312',
      role: 'trader',
      status: 'active',
    },
    {
      id: 4,
      name: 'Jane Doe',
      phone: '3804212312312',
      role: 'owner',
      status: 'inactive',
    },
    {
      id: 5,
      name: 'John Doe',
      phone: '3804212312312',
      role: 'trader',
      status: 'active',
    },
    {
      id: 6,
      name: 'Jane Doe',
      phone: '3804212312312',
      role: 'owner',
      status: 'inactive',
    },
    {
      id: 7,
      name: 'John Doe',
      phone: '3804212312312',
      role: 'trader',
      status: 'active',
    },
    {
      id: 8,
      name: 'Jane Doe',
      phone: '3804212312312',
      role: 'owner',
      status: 'inactive',
    },
    {
      id: 9,
      name: 'John Doe',
      phone: '3804212312312',
      role: 'trader',
      status: 'active',
    },
    {
      id: 10,
      name: 'Jane Doe',
      phone: '3804212312312',
      role: 'owner',
      status: 'inactive',
    },
    {
      id: 11,
      name: 'John Doe',
      phone: '3804212312312',
      role: 'trader',
      status: 'active',
    },
    {
      id: 12,
      name: 'Jane Doe',
      phone: '3804212312312',
      role: 'owner',
      status: 'inactive',
    },
    {
      id: 13,
      name: 'John Doe',
      phone: '3804212312312',
      role: 'trader',
      status: 'active',
    },
    {
      id: 14,
      name: 'Jane Doe',
      phone: '3804212312312',
      role: 'owner',
      status: 'inactive',
    },
    {
      id: 15,
      name: 'John Doe',
      phone: '3804212312312',
      role: 'trader',
      status: 'active',
    },
    {
      id: 16,
      name: 'Jane Doe',
      phone: '3804212312312',
      role: 'owner',
      status: 'inactive',
    },
  ])

  return { workers }
})
