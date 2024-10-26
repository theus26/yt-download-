import { defineStore } from 'pinia'
import api from '@/services/api'

interface Video {
  title: string
  id: string
  author: string
  duration: string
  thumbnail: string
  url: string
  isPlaylist: boolean
  quality: any[]
}

interface MyStoreState {
  data: Video[]
  loading: boolean
  error: string | null
}

export const getVideoByQuery = defineStore('searchVideo', {
  state: (): MyStoreState => ({
    data: [],
    loading: false,
    error: null
  }),

  actions: {
    async fetchData(query: string, resultNumber: number) {
      this.loading = true
      this.error = null
      try {
        const response = await api.get<Video[]>('/youtube/searchVideo', {
          params: { query, resultNumber }
        })
        this.data = response.data
      } catch (error: any) {
        this.error = error.message || 'Erro desconhecido'
      } finally {
        this.loading = false
      }
    }
  }
})
