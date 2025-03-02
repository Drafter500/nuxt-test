<script setup lang="ts">

const { id, authors, title, body, userId } = defineProps<{
  id?: string,
  title?: string,
  body?: string,
  userId?: string,
  authors?: {id: string, name: string}[],
}>();

const formData = reactive({
  title,
  body,
  author: authors?.find(author => author.id === userId)?.id,
});

const validationErrors = reactive({
  title: '',
  author: '',
  body: '',
});

const isPending = ref(false);

async function handleSubmit() {
  validationErrors.title = formData.title ? '' : 'Title is required';
  validationErrors.author = formData.author ? '' : 'Author is required';
  validationErrors.body = formData.body ? '' : 'Body is required';

  if (Object.values(validationErrors).some(Boolean)) {
    return;
  }

  isPending.value = true;
  await $fetch(`/api/posts/${id ?? ''}`, {
    method: id ? 'PUT' : 'POST',
    body: formData,
  });

  isPending.value = false;

  await navigateTo('/');
}

</script>

<template>
  <form @submit.prevent="handleSubmit">
    <fieldset class="flex flex-col fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box min-w-full">
      <label class="fieldset-legend">Title</label>
      <input
        type="text"
        name="title"
        class="input w-full"
        :class="{'border-error': validationErrors.title}"
        placeholder="Post title..."
        v-model="formData.title"
      />
      <p
        v-if="validationErrors.title"
        class="fieldset-label text-error"
      >{{ validationErrors.title }}</p>

      <label class="fieldset-legend">Author</label>
      <select
        class="select w-full"
        :class="{'border-error': validationErrors.author}"
        v-model="formData.author"
      >
        <option v-for="author in authors || []" :key="author.id" :value="author.id">
          {{ author.name }}
        </option>
      </select>
      <p
        v-if="validationErrors.author"
        class="fieldset-label text-error"
      >{{ validationErrors.author }}</p>

      <label class="fieldset-legend">Body</label>
      <!-- With more time would put WYSIWYG editor instead of textarea -->
      <textarea
        class="textarea w-full h-48"
        :class="{'border-error': validationErrors.body}"
        placeholder="Bio"
        v-model="formData.body"
      ></textarea>
      <p
        v-if="validationErrors.body"
        class="fieldset-label text-error"
      >{{ validationErrors.body }}</p>

      <button class="btn btn-neutral mt-4 ml-auto" :disabled="isPending">
        <span v-if="isPending" class="loading loading-spinner loading-sm"></span>
        {{id ? 'Save changes' : 'Submit'}}
      </button>
    </fieldset>
  </form>
</template>
