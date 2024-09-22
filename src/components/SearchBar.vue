<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  svgIcon?: string
  extraText?: string
}
const props = withDefaults(defineProps<Props>(), {
  svgIcon:
    '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>',
  extraText: 'https://www.youtube.com/watch?v=gNBKvpAPMUI&list'
})
const searchQuery = ref('')
</script>

<template>
  <div class="tw-flex tw-p-4 tw-justify-center">
    <div class="tw-w-full">
      <input
        v-model="searchQuery"
        type="search"
        :placeholder="` Digite sua pesquisa aqui, Ex: ${props.extraText}`"
        class="tw-border-2 tw-border-indigo-500 tw-rounded tw-text-black-500 tw-py-3 tw-focus:outline-none tw-focus:ring tw-focus:ring-violet-300 tw-w-full tw-placeholder:italic tw-placeholder:text-slate-400"
      />
    </div>
  </div>
</template>
