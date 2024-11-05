<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  }
})
</script>

<template>
  <div class="text-center pa-4">
    <v-dialog v-model="isOpen" width="auto">
      <v-card max-width="100%" title="Escolha uma das opções">
        <template #append>
          <v-icon @click="$emit('close')" class="cursor-pointer">mdi-close</v-icon>
        </template>
        <slot></slot>
      </v-card>
    </v-dialog>
  </div>
</template>
