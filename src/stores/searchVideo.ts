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
  quality: Quality[]
}
interface Quality {
  type: string
  container: string
  size: string
  resolution: string
  bitrate: string
}

interface MyStoreState {
  videos: Video[]
  quality: Quality[]
  loading: boolean
  error: string | null
}

export const getVideoByQuery = defineStore('searchVideo', {
  state: (): MyStoreState => ({
    videos: [],
    quality: [],
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
        this.videos = response.data
      } catch (error: any) {
        this.error = error.message || 'Erro desconhecido'
      } finally {
        this.loading = false
      }
    },
    async videoInfo(url: string) {
      this.error = null
      try {
        const response = await api.get('/youtube/videoInfo', {
          params: { url }
        })
        this.quality = response.data.quality || []
      } catch (error: any) {
        this.error = error.message || 'Erro desconhecido'
      } finally {
      }
    }
  }
})
