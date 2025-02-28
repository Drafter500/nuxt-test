<script setup>
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import {
    ChevronDownIcon,
    PencilSquareIcon,
    TrashIcon,
  } from '@heroicons/vue/20/solid'
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
        Actions
        <ChevronDownIcon class="-mr-1 size-5 text-gray-400" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems class="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden">
        <div class="py-1">
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="[
                active
                  ? 'bg-gray-100 text-gray-900 outline-hidden'
                  : 'text-gray-700',
                'flex align-middle block px-4 py-2 text-sm'
              ]"
            >
              <PencilSquareIcon class="mr-2 size-5 text-gray-400" />
              Edit
            </a>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <a
              href="#"
              :class="[
                  active
                    ? 'bg-gray-100 text-gray-900 outline-hidden'
                    : 'text-gray-700',
                  'flex align-middle px-4 py-2 text-sm'
              ]"
            >
              <TrashIcon class="mr-2 size-5 text-gray-400" />
              Delete
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
