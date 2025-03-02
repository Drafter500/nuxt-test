<script setup lang="ts">

const { postId, authors, title, body } = defineProps<{
  postId?: string,
  title: string,
  body: string,
  authors?: {id: string, name: string}[],
}>();

</script>

<template>
  <fieldset class="flex flex-col fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box min-w-full">
    <label class="fieldset-legend">Title</label>
    <input
      type="text"
      class="input w-full"
      placeholder="Post title..."
      :value="title"
    />

    <label class="fieldset-legend">Author</label>
    <select class="select w-full">
      <option v-for="author in authors || []" :key="author.id" value="author.id">
        {{ author.name }}
      </option>
    </select>

    <label class="fieldset-legend">Body</label>
    <!-- With more time would put WYSIWYG editor instead of textarea -->
    <textarea
      class="textarea w-full h-48"
      placeholder="Bio"
    >{{ body }}</textarea>

    <button class="btn btn-neutral mt-4 ml-auto">
      {{postId ? 'Save changes' : 'Submit'}}
    </button>
  </fieldset>
</template>
