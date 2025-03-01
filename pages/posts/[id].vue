<template>
  <NuxtLink to="/" class="link">< Back to list</NuxtLink>
  <h1 class="text-3xl mt-8">Edit Post {{ $route.params.id }}</h1>

  <PostForm class="mt-4" postId="$route.params.id" />
</template>
