<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import Card from '@/components/Card.vue'
import { ref } from 'vue'

const searchQuery = ref('')

const getQuery = (query: string) => {
  searchQuery.value = query
}
</script>

<template>
  <!-- Search -->
  <div class="tw-mt-3">
    <SearchBar @set-query="getQuery" />
  </div>

  <!-- Card -->
  <div>
    <Card v-if="searchQuery" :query="searchQuery" />
  </div>
</template>
