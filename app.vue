<script setup lang="ts">
import '~/assets/index.css'

onMounted(() => {
  console.log('mounted');
});

useHead({
  htmlAttrs: { 'data-theme': 'light' },
});

</script>

<template>
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</template>
