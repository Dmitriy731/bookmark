<script setup lang="ts">
import { defineAsyncComponent, h, computed } from 'vue';

const props = defineProps<{
  name: string;
  size?: number | string;
  color?: string;
}>();

const icons = import.meta.glob('../../icons/*.vue');

const IconComponent = defineAsyncComponent(
  icons[`../../icons/${props.name}.vue`] as () => Promise<any>,
);

const style = computed(() => ({
  width: typeof props.size === 'number' ? `${props.size}px` : props.size || '1em',
  height: typeof props.size === 'number' ? `${props.size}px` : props.size || '1em',
}));
</script>

<template>
  <component :is="IconComponent" :style="style" />
</template>

<style>
.icon {
  color: red;
}
</style>
