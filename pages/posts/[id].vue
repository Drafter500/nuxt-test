<script setup lang="ts">
  import type { TEditPostData } from '~/server/api/posts/types';

  const route = useRoute();

  const { data } = await useFetch<TEditPostData>(`/api/posts/${route.params.id}`);
</script>


<template>
  <NuxtLink to="/" class="link">< Back to list</NuxtLink>
  <h1 class="text-3xl mt-8">Edit Post {{ $route.params.id }}</h1>

  <PostForm
    class="mt-4"
    v-bind="data"
  />
</template>
