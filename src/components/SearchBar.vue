<script setup lang="ts">
import { ref  } from 'vue'
interface Props {
  svgIcon?: string
  extraText?: string
}

const emit = defineEmits<{
  (e: 'setQuery', payload: string): void
}>();

const props = withDefaults(defineProps<Props>(), {
  svgIcon:
    '<svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2.5a7.5 7.5 0 0 1 5.964 12.048l4.743 4.745a1 1 0 0 1-1.32 1.497l-.094-.083-4.745-4.743A7.5 7.5 0 1 1 10 2.5Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z" fill="#fff"/></svg>',
  extraText: 'https://www.youtube.com/watch?v=gNBKvpAPMUI&list'
})
const searchQuery = ref('')
const handleIconClick = () => {
  emit('setQuery', searchQuery.value);
}
</script>

<template>
  <div class="tw-relative tw-p-4 tw-justify-center tw-w-full">
    <input
      v-model="searchQuery"
      type="search"
      placeholder="Cole o link do seu vídeo aqui"
      class="tw-border-2 tw-border-zinc-800 tw-bg-zinc-800 tw-rounded-full tw-text-black-500 tw-py-4 tw-pl-10 tw-w-full tw-placeholder:italic tw-placeholder:text-white-400 tw-text-white"
    />

    <button
      @click="handleIconClick"
      class="tw-absolute tw-right-8 tw-top-1/2 tw-transform -tw-translate-y-1/2 tw-bg-transparent tw-p-0 tw-text-white"
      :class="{ 'tw-cursor-not-allowed': !searchQuery, 'tw-cursor-pointer': searchQuery }"
      :disabled="!searchQuery"
    >
      <span v-html="props.svgIcon"></span>
    </button>
  </div>
</template>

<style scoped>
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
}
</style
