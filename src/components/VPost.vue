<template>
  <div>
    <h2 class="font-semibold text-center mb-4 text-primary-75 text-lg">{{ formattedTitle}}</h2>
    <p class="text-center mb-7 text-primary-50">{{ post.body }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VPost',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedTitle() {
      const originalTitle = this.post.title;
      const words = originalTitle.split(' ');
      const formattedWords = words.map((word: string): string => word.charAt(0).toUpperCase() + word.slice(1));
      return formattedWords.join(' ')
    }
  }
})
</script>
