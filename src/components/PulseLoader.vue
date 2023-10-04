<template>
  <div class="animate-pulse flex w-full">
    <div class="flex-1 py-1">
      <div class="h-5 bg-slate-700 rounded w-40 m-auto mb-2"></div>
      <div class="h-5 bg-slate-700 rounded w-20 m-auto mb-4"></div>
      <div class="h-3 bg-slate-700 rounded mb-2"></div>
      <div class="h-3 bg-slate-700 rounded mb-2"></div>
      <div class="h-3 bg-slate-700 rounded mb-2"></div>
      <div class="h-3 bg-slate-700 rounded mb-2"></div>
      <div class="h-3 bg-slate-700 rounded mb-7"></div>
      <div class="flex justify-between w-52 m-auto mt-7">
        <div class="h-10 bg-slate-700 rounded w-24"></div>
        <div class="h-10 bg-slate-700 rounded w-24"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'PulseLoader',
  })
</script>