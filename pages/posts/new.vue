<script setup lang="ts">
  const { data: users } = await useFetch('/api/users');
</script>

<template>
  <NuxtLink to="/">< Back to list</NuxtLink>
  <h1 class="text-3xl mt-8">Create New Post</h1>

  <PostForm class="mt-4" :authors="users" />
</template>
