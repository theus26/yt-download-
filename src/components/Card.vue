<script setup lang="ts">
import { ref } from 'vue'

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

const videos = ref<Video[]>([
  {
    title: 'Ariana Grande - Honeymoon Avenue (Live from London)',
    id: 'zp8-BhMCnTA',
    author: 'Ariana Grande',
    duration: '00:05:10',
    thumbnail:
      'https://i.ytimg.com/vi/zp8-BhMCnTA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDR-c-3B7MIluesXb6Y2kfmsB9Ohw',
    url: 'https://www.youtube.com/watch?v=zp8-BhMCnTA',
    isPlaylist: false,
    quality: []
  },
  {
    title: 'Ariana Grande - Honeymoon Avenue (Live from London)',
    id: 'zp8-BhMCnTA',
    author: 'Ariana Grande',
    duration: '00:05:10',
    thumbnail:
      'https://i.ytimg.com/vi/zp8-BhMCnTA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDR-c-3B7MIluesXb6Y2kfmsB9Ohw',
    url: 'https://www.youtube.com/watch?v=zp8-BhMCnTA',
    isPlaylist: false,
    quality: []
  },
  {
    title: 'Ariana Grande - Honeymoon Avenue (Live from London)',
    id: 'zp8-BhMCnTA',
    author: 'Ariana Grande',
    duration: '00:05:10',
    thumbnail:
      'https://i.ytimg.com/vi/zp8-BhMCnTA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDR-c-3B7MIluesXb6Y2kfmsB9Ohw',
    url: 'https://www.youtube.com/watch?v=zp8-BhMCnTA',
    isPlaylist: false,
    quality: []
  },
  {
    title: 'Ariana Grande - Honeymoon Avenue (Live from London)',
    id: 'zp8-BhMCnTA',
    author: 'Ariana Grande',
    duration: '00:05:10',
    thumbnail:
      'https://i.ytimg.com/vi/zp8-BhMCnTA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDR-c-3B7MIluesXb6Y2kfmsB9Ohw',
    url: 'https://www.youtube.com/watch?v=zp8-BhMCnTA',
    isPlaylist: false,
    quality: []
  },
  {
    title: 'Ariana Grande - Honeymoon Avenue (Live from London)',
    id: 'zp8-BhMCnTA',
    author: 'Ariana Grande',
    duration: '00:05:10',
    thumbnail:
      'https://i.ytimg.com/vi/zp8-BhMCnTA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDR-c-3B7MIluesXb6Y2kfmsB9Ohw',
    url: 'https://www.youtube.com/watch?v=zp8-BhMCnTA',
    isPlaylist: false,
    quality: []
  },
  {
    title: 'Ariana Grande - Honeymoon Avenue (Live from London)',
    id: 'zp8-BhMCnTA',
    author: 'Ariana Grande',
    duration: '00:05:10',
    thumbnail:
      'https://i.ytimg.com/vi/zp8-BhMCnTA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDR-c-3B7MIluesXb6Y2kfmsB9Ohw',
    url: 'https://www.youtube.com/watch?v=zp8-BhMCnTA',
    isPlaylist: false,
    quality: []
  },
  {
    title: 'Ariana Grande - Honeymoon Avenue (Live from London)',
    id: 'zp8-BhMCnTA',
    author: 'Ariana Grande',
    duration: '00:05:10',
    thumbnail:
      'https://i.ytimg.com/vi/zp8-BhMCnTA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDR-c-3B7MIluesXb6Y2kfmsB9Ohw',
    url: 'https://www.youtube.com/watch?v=zp8-BhMCnTA',
    isPlaylist: false,
    quality: []
  }
])

const download = (url: string) => {
  console.log(`Download iniciado para o vídeo: ${url}`)
}

const icon = ref(
  '<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.999 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.524-4.477-10-10-10s-10 4.476-10 10Zm14.53-.28a.75.75 0 0 1 .073.976l-.072.084-4.001 4a.75.75 0 0 1-.977.073l-.084-.073-4-4.001a.75.75 0 0 1 .977-1.133l.084.073 2.72 2.722V7.748a.75.75 0 0 1 .649-.743l.101-.007a.75.75 0 0 1 .743.648l.007.102v6.69l2.72-2.72a.75.75 0 0 1 .977-.072l.084.072Z" fill="#fff"/></svg>'
)
</script>

<template>
  <div class="tw-container tw-mx-auto">
    <div
      class="tw-grid tw-grid-cols-5 tw-gap-y-4 tw-p-2 tw-ml-4 sm:tw-p-6 lg:tw-p-8 tw-gap-x-2 lg:tw-gap-x-4 tw--mx-1 lg:tw--mx-2"
    >
      <div
        v-for="(video, index) in videos"
        :key="index"
        class="tw-bg-zinc-800 tw-rounded-[30px] tw-relative tw-w-[250px] tw-h-[240px] tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-scale-105 hover:tw-shadow-xl"
      >
        <div class="tw-relative tw-h-[60%] tw-flex tw-justify-center tw-items-center tw-mt-2">
          <img :src="video.thumbnail" :alt="video.title" width="230" class="tw-rounded-[15px]" />
          <div
            class="tw-absolute tw-right-4 tw-bottom-2 tw-bg-black/50 tw-px-2 tw-py-1 tw-text-white tw-text-xs tw-rounded"
          >
            {{ video.duration }}
          </div>
        </div>

        <div class="tw-flex tw-items-center tw-justify-between tw-mt-4 tw-px-2">
          <p class="tw-text-sm tw-text-center tw-text-white">
            {{ video.title }}
          </p>

          <button
            @click="download(video.url)"
            class="tw-bg-transparent tw-text-white tw-p-0 tw-ml-2"
          >
            <span v-html="icon"></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
