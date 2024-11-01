<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { getVideoByQuery } from '@/stores/searchVideo'
import Modal from './Modal.vue'
import Loading from './shared/Loading.vue'

interface Props {
  query: string
  count?: number
}
const props = withDefaults(defineProps<Props>(), {
  count: 30
})

const qualitySelected = ref<string>()
const videoId = ref<string>('')
const storeSearchVideo = getVideoByQuery()
const isOpen = ref<boolean>(false)
const step = ref<number>(1)
const selectedVideo = ref<string | null>(null)
const items = ['Opções de download', 'Opções de qualidade', 'Realizar download']
const loadingButton = ref<boolean>(false)

const getVideos = () => {
  storeSearchVideo.fetchData(props.query, props.count)
}
const getInfo = (id: string) => {
  storeSearchVideo.videoInfo(id)
}
const close = () => {
  loadingButton.value = false
  isOpen.value = false
  selectedVideo.value = ''
  step.value = 1
}
const selectButton = (button: string) => {
  selectedVideo.value = button
}
const download = (id: string) => {
  videoId.value = id
  isOpen.value = true
  getInfo(id)
  console.log(`Download iniciado para o vídeo: ${id}`)
}

const donwloadStream = () => {
  loadingButton.value = true
  console.log('id', videoId.value)
  console.log('qualitys', qualitySelected.value)
}

const isLoading = computed(() => {
  return storeSearchVideo.loading
})

const videos = computed(() => {
  return storeSearchVideo.videos
})

const quality = computed(() => {
  const isVideoSelected = selectedVideo.value === 'video'
  const streamType = isVideoSelected ? 'VideoOnlyStreamInfo' : 'AudioOnlyStreamInfo'
  const property = isVideoSelected ? 'resolution' : 'bitrate'

  return storeSearchVideo.quality
    .filter((stream) => stream.type === streamType)
    .map((stream) => `${stream[property]} - ${stream.container} - ${stream.size}`)
})

watch(() => props.query, getVideos, { immediate: true })

const icon = ref(
  '<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M1.999 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.524-4.477-10-10-10s-10 4.476-10 10Zm14.53-.28a.75.75 0 0 1 .073.976l-.072.084-4.001 4a.75.75 0 0 1-.977.073l-.084-.073-4-4.001a.75.75 0 0 1 .977-1.133l.084.073 2.72 2.722V7.748a.75.75 0 0 1 .649-.743l.101-.007a.75.75 0 0 1 .743.648l.007.102v6.69l2.72-2.72a.75.75 0 0 1 .977-.072l.084.072Z" fill="#fff"/></svg>'
)
const iconVideo = ref(
  '<svg width="50" height="50" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.25 4h11.5a3.25 3.25 0 0 1 3.245 3.066L21 7.25v9.5a3.25 3.25 0 0 1-3.066 3.245L17.75 20H6.25a3.25 3.25 0 0 1-3.245-3.066L3 16.75v-9.5a3.25 3.25 0 0 1 3.066-3.245L6.25 4h11.5-11.5Zm3.803 5.585A.5.5 0 0 0 10 9.81v4.382a.5.5 0 0 0 .724.447l4.382-2.19a.5.5 0 0 0 0-.895l-4.382-2.191a.5.5 0 0 0-.671.223Z" fill="#212121"/></svg>'
)
const iconAudio = ref(
  '<svg width="50" height="50" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 2.75a.75.75 0 0 0-.965-.718l-10 3a.75.75 0 0 0-.535.718v9.877a3.5 3.5 0 1 0 1.496 2.702.756.756 0 0 0 .004-.079v-7.942l8.5-2.55v5.87a3.5 3.5 0 1 0 1.496 2.702.764.764 0 0 0 .004-.08V2.75Z" fill="#212121"/></svg>'
)
</script>

<template>
  <div class="tw-container tw-mx-auto">
    <div
      v-if="!isLoading"
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
            @click="download(video.id)"
            class="tw-bg-transparent tw-text-white tw-p-0 tw-ml-2"
          >
            <span v-html="icon"></span>
          </button>
        </div>
      </div>
    </div>

    <Modal :isOpen="isOpen" @close="close">
      <v-stepper v-model="step" :items="items" show-actions flat>
        <template v-slot:item.1>
          <div class="tw-flex tw-justify-around">
            <button
              :class="[
                selectedVideo === 'video' ? 'tw-bg-blue-600' : '',
                'tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-scale-105 hover:tw-shadow-xl'
              ]"
              @click="selectButton('video')"
            >
              <span v-html="iconVideo"></span>
              <p class="tw-text-black">Vídeo</p>
            </button>
            <button
              :class="[
                selectedVideo === 'audio' ? 'tw-bg-blue-600' : '',
                'tw-transition-all tw-duration-300 tw-ease-in-out hover:tw-scale-105'
              ]"
              @click="selectButton('audio')"
            >
              <span v-html="iconAudio"></span>
              <p class="tw-text-black">Audio</p>
            </button>
          </div>
        </template>

        <template v-slot:item.2>
          <br />
          <v-select
            v-if="selectedVideo"
            v-model="qualitySelected"
            clearable
            chips
            label="Selecione"
            :items="quality"
            variant="outlined"
          ></v-select>
          <span class="tw-flex tw-justify-center tw-font-bold" v-else>
            Escolha uma opção de download
          </span>
        </template>

        <template v-slot:item.3>
          <br />
          <v-btn
            v-if="qualitySelected"
            variant="flat"
            color="primary"
            append-icon="mdi-download"
            block
            :loading="loadingButton"
            @click="donwloadStream"
            >Realizar download</v-btn
          >
          <span class="tw-flex tw-justify-center tw-font-bold" v-else>
            Escolha uma opção de qualidade
          </span>
        </template>
      </v-stepper>
    </Modal>
    <div class="tw-flex tw-justify-center mt-5">
      <Loading v-if="isLoading" />
    </div>
  </div>
</template>
