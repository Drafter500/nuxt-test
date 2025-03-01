<script setup lang="ts">
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/20/solid';
const { posts } = defineProps<{
  posts?: {
    id: string,
    title: string,
    body: string,
    userId: string,
  }
}>();

</script>

<template>
  <table class="table table-zebra">
    <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Author</th>
      <th class="w-60">Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in posts" :key="item.id">
      <td><NuxtLink class="link" :to="`/posts/${item.id}`">{{item.title}}</NuxtLink></td>
      <td>{{item.body}}</td>
      <td>{{item.userId}}</td>
      <td>
        <button class="btn btn-sm btn-outline" >
          <PencilSquareIcon class="size-5" />
          Edit
        </button>
        <button class="ml-3 btn btn-sm btn-outline btn-error">
          <TrashIcon class="size-5" />
          Delete
        </button>
      </td>
    </tr>
    </tbody>
  </table>
</template>
