<script setup lang="ts">
import type { TPost } from '~/server/api/posts/types';

const { data } = await useFetch<TPost[]>('/api/posts');

const searchText = ref('');
const isLoading = ref(false);

async function handleSearch() {
  isLoading.value = true;
  // The api does not support this, but this is the idea
  data.value = (await useFetch<TPost[]>(`/api/posts?q=${searchText}`)).data;
  isLoading.value = false;

  // With a bit more time I would place a skeleton table loader instead of just spinner in the input
  // And also reflect the search param in the url
}

</script>

<template>
  <div class="flex flex-col gap-6 mt-6 min-h-0 h-full">
    <div class="flex justify-between">
      <form @submit.prevent="handleSearch">
        <label class="input input-bordered flex items-center gap-2 w-96">
          <input type="search" class="grow" v-model="searchText" placeholder="Search" />
          <span v-if="isLoading" class="loading loading-spinner loading-sm"></span>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="h-4 w-4 opacity-70">
            <path
              fill-rule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clip-rule="evenodd" />
          </svg>
        </label>
      </form>
      <NuxtLink to="/posts/new">
        <button class="btn">Create new post</button>
      </NuxtLink>
    </div>
    <div class="overflow-y-auto">
      <PostsTable :posts="data" />
    </div>
  </div>
</template>

