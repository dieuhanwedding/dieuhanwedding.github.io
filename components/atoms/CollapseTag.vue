<script lang="ts" setup>
import { defineProps, defineEmits, ref, watch } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: false,
  },
  isOpenProp: {
    type: Boolean,
    required: false,
    default: undefined, // default to undefined
  },
});

const emit = defineEmits(["update:isOpen"]);

const isOpen = ref(props.isOpenProp);

// Watch the prop to keep the local state in sync with the parent component
watch(
  () => props.isOpenProp,
  (newValue) => {
    isOpen.value = newValue;
  }
);

const toggle = () => {
  if (props.isOpenProp === undefined) {
    // If not managed by parent, manage state locally
    isOpen.value = !isOpen.value;
  } else {
    // If managed by parent, emit the change to parent
    emit("update:isOpen", !isOpen.value);
  }
};
</script>
<template>
  <div class="w-full">
    <!-- The clickable div (header) with dynamic classes based on isOpen state -->
    <div
      @click="toggle"
      :class="{
        rounded: !isOpen, // Full rounded corners when collapsed
        'rounded-t': isOpen, // Rounded top when expanded
      }"
      class="flex items-center justify-between p-2 px-3 bg-primary border border-primary text-white cursor-pointer shadow-md transition-all"
    >
      <!-- Text from props -->
      <span>
        <slot name="title">
          {{ props.text }}
        </slot>
      </span>

      <!-- Icon indicating the collapse/expand state -->
      <slot name="icon">
        <svg
          v-if="!isOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 transform transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4 transform transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M5 15l7-7 7 7" />
        </svg>
      </slot>
    </div>

    <!-- The collapsible content -->
    <div v-show="isOpen" class="p-2 bg-gray-100 rounded-b-lg">
      <slot />
      <!-- Default slot for dynamic content -->
    </div>
  </div>
</template>
