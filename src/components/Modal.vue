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
      <v-card
        max-width="400"
        prepend-icon="mdi-update"
        text="Your application will relaunch automatically after the update is complete."
        title="Update in progress"
      >
        <template v-slot:actions>
          <v-btn class="ms-auto" text="Ok" @click="$emit('close')"></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
