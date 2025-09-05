<script setup lang="ts">
import { defineAsyncComponent, h, computed } from 'vue';

const props = defineProps<{
  name: string;
  size?: number | string;
  color?: string;
}>();

// Импортируем все иконки из папки
// ⚠️ путь должен совпадать с тем, где реально лежат файлы
const icons = import.meta.glob('../../icons/*.vue');

// Находим нужную иконку или отдаём fallback
const IconComponent = defineAsyncComponent(() => {
  const path = `../../icons/${props.name}.vue`;
  if (icons[path]) {
    return icons[path]();
  }
});

// Размер и цвет
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
