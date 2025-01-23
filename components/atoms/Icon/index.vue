<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    name: string;
    size?: string | number;
  }>(),
  {
    size: 5,
  },
);

const attrs = useAttrs();

const styleClass = computed(() => {
  if (!props.size) return null;
  return `w-${props.size} h-${props.size}`;
});

const icon = computed(() => {
  try {
    return defineAsyncComponent(() => import(`~/assets/icons/${props.name}.svg`));
  } catch (error) {
    console.error(`Icon "${props.name}" not found.`);
    return null;
  }
});
</script>

<template>
  <component :is="icon" :class="styleClass" v-bind="attrs" />
</template>
