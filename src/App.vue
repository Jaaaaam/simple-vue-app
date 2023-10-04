<template>
  <div id="app" class="flex justify-center items-center h-screen">
    <div class="w-80 m:w-96 shadow-lg rounded-lg p-8 bg-opacity-50 bg-white min-h-[350px] flex items-center">
      <div v-if="!isLoading">
        <VPost :post="post" />
        <div class="flex justify-between w-52 m-auto">
          <button @click="prevPost" :disabled="isPrevButtonDisabled" class="bg-primary-75 text-secondary-0 p-3 w-24 rounded disabled:opacity-25">Previous</button>
          <button @click="nextPost" class="bg-primary-75 text-secondary-0 p-3 w-24 rounded">Next</button>
        </div>
      </div>
      <PulseLoader v-else />
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue'
import VPost from './components/VPost.vue'
import PulseLoader from './components/PulseLoader.vue'
import { useAppStore } from './store'
import axios from 'axios'

export default defineComponent({
  name: 'App',
  components: {
    VPost,
    PulseLoader
  },
  setup () {
    const postStore = useAppStore();
    const postId = ref(1)
    const isLoading = ref(false)
    const fetchPost = async () => {
      try {
        isLoading.value = true;
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId.value}`);
        console.log(data,'data')
        isLoading.value=false
        postStore.setPost(data)
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    onMounted(() => {
      fetchPost();
    });

    const prevPost = () => {
      if (postId.value > 1) {
        postId.value--;
        fetchPost();
      }
    }

    const nextPost = () => {
      postId.value++;
      fetchPost();
    }

    const reactivePost = computed(() => postStore.post);
    const isPrevButtonDisabled = computed(() => postId.value <= 1);
  
    return {
      post: reactivePost,
      prevPost,
      nextPost,
      isPrevButtonDisabled,
      isLoading
    }
  }
})
</script>
