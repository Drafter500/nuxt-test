<script setup lang="ts">
import { PencilSquareIcon, TrashIcon } from '@heroicons/vue/20/solid';
const { posts } = defineProps<{
  posts?: {
    id: string,
    title: string,
    body: string,
    userId: string,
    userName: string,
  }
}>();

const deletingId = ref<string | null>(null);
const displayedPosts = ref(posts);

async function handleDelete(id: string) {
  if (!confirm(`Are you sure you want to delete post ${id}?`)) {
    return;
  }
  deletingId.value = id;
  await useFetch(`/api/posts/${id}`, {method: 'DELETE'});
  deletingId.value = null;
  displayedPosts.value = displayedPosts.value.filter(x => x.id !== id);
}

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
    <transition-group tag="tbody" name="fade">
      <tr v-for="item in displayedPosts" :key="item.id">
        <td><NuxtLink class="link" :to="`/posts/${item.id}`">{{item.title}}</NuxtLink></td>
        <td>{{item.body}}</td>
        <td>{{item.userName}}</td>
        <td>
          <button class="btn btn-sm btn-outline">
            <PencilSquareIcon class="size-5" />
            Edit
          </button>
          <button
            class="ml-3 btn btn-sm btn-outline btn-error"
            @click="handleDelete(item.id)"
            :disabled="deletingId === item.id"
          >
            <span v-if="deletingId === item.id" class="loading loading-spinner loading-sm"></span>
            <TrashIcon v-else class="size-5" />
            Delete
          </button>
        </td>
      </tr>
    </transition-group>
  </table>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
