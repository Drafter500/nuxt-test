<template>
  <NuxtLoadingIndicator />
  <div class="flex flex-col max-w-6xl h-screen mx-auto p-4 sm:py-8">
    <header class="flex justify-end">
      <ThemeSwitch />
    </header>
    <slot />
  </div>
</template>
