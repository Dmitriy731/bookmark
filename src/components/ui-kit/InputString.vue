<script setup lang="ts">
import { onMounted, useTemplateRef } from 'vue';

const data = defineModel<string>();
const input = useTemplateRef('input');

const { isFocused = false } = defineProps<{
  isFocused?: boolean;
}>();

onMounted(() => {
  if (isFocused && input.value) {
    input.value.focus();
  }
});
</script>

<template>
  <input class="input-string" v-model="data" ref="input" />
</template>

<style scoped lang="scss">
.input-string {
  border: none;
  border-bottom: 1px solid var(--color-fg);
  color: var(--color-fg);
  font-size: 24px;
  min-width: 274px;

  &--category {
    min-width: auto;
    width: 100%;
  }

  &::placeholder {
    color: var(--color-inactive);
  }
}
</style>
