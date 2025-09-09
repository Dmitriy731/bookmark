<script setup lang="ts">
import Button from '@/components/ui-kit/Button.vue';

const { option } = defineProps<{ option: string }>();
const emit = defineEmits(['update:option']);

function onClick(option: string) {
  emit('update:option', option);
}

const SORT_OPTIONS = [
  {
    option: 'date',
    name: 'По дате',
  },
  {
    option: 'title',
    name: 'По названию',
  },
];
</script>

<template>
  <div class="bookmark-sort">
    <Button
      v-for="item in SORT_OPTIONS"
      :key="item.option"
      :class="['button--sort', option === item.option ? 'active' : '']"
      @click="onClick(item.option)"
      >{{ item.name }}</Button
    >
  </div>
</template>

<style scoped lang="scss">
.bookmark-sort {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 64px;
}
</style>
