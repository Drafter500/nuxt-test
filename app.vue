<script setup lang="ts">

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
