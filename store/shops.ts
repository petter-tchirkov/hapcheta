import { defineStore } from 'pinia'

type Store = {
  id: number
  name: string
  coordinates: { x: number; y: number }
  isOpened: boolean
  orders: number
  refreshedAt: string
}

export const useShopsStore = defineStore('shops', () => {
  const shops: Ref<Store[]> = ref([
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: true,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: false,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: true,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: false,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: true,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: true,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: true,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: false,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: true,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: false,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: true,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: true,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: true,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: false,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: true,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: false,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: true,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: true,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: true,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: false,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: true,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: false,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: true,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: true,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: true,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: false,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: true,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: false,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: true,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
    {
      id: 1,
      name: 'Hapcheta',
      coordinates: { x: 6065100, y: 4313375 },
      isOpened: true,
      orders: 42,
      refreshedAt: '2023-08-01',
    },
  ])
  return { shops }
})
