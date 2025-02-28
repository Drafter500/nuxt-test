<script setup lang="ts">
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/20/solid';


const data = [
  {id: '1', title: 'one', description: 'descr 1', author: 'author1'},
  {id: '2', title: 'two', description: 'descr 2', author: 'author2'},
  {id: '3', title: 'three', description: 'descr 3', author: 'author3'},
  {id: '4', title: 'four', description: 'descr 4', author: 'author4'},
]

</script>

<template>
  <div class="flex flex-col gap-6 mt-6">
    <div class="flex justify-between">
      <form>
        <label class="input input-bordered flex items-center gap-2 w-96">
          <input type="text" class="grow" placeholder="Search" />
          <svg
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
    <table class="table table-zebra">
      <!-- head -->
      <thead>
      <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Author</th>
        <th class="w-60">Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in data" :key="item.title">
        <td><NuxtLink class="link" :to="`/posts/${item.id}`">{{item.title}}</NuxtLink></td>
        <td>{{item.description}}</td>
        <td>{{item.author}}</td>
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
  </div>
</template>

