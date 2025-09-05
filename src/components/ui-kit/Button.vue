<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { defineEmits } from 'vue';
import type { PropType } from 'vue';

type ButtonType = 'button' | 'link' | 'router';

defineProps({
  as: {
    type: String as PropType<ButtonType>,
    default: 'button' as ButtonType,
  },
  href: {
    type: String,
    default: '',
  },
  to: {
    type: String,
    default: '',
  },
});

const emit = defineEmits(['click']);

function buttonClick(e: Event) {
  emit('click', e);
}
</script>

<template>
  <RouterLink v-if="as === 'router'" class="button" :to="to">
    <slot />
  </RouterLink>

  <a v-else-if="as === 'link'" class="button" :href="href">
    <slot />
  </a>

  <button v-else class="button" @click="buttonClick">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  border: none;
  background-color: transparent;

  &--primary {
    min-height: 50px;
    border-radius: 40px;
    padding: 12px 24px;
    justify-content: center;
    color: var(--color-bg);
    background-color: var(--color-fg);
    transition: background-color 0.3s;
    min-width: 158px;

    &:hover {
      background-color: var(--color-inactive);
    }
  }

  &--navigation {
    color: var(--color-fg);
    font-size: 14px;
    line-height: 24px;
    transition:
      font-weight 0.3s,
      font-size 0.3s;

    &:hover,
    &.router-link-active {
      font-weight: 700;
      font-size: 24px;
    }
  }

  &--round {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: var(--color-fg);
    color: var(--color-bg);
    font-size: 14px;
    line-height: 32px;
  }

  &--add-category {
    &::before,
    &::after {
      content: '';
      display: block;
      width: 14px;
      height: 2px;
      background-color: var(--color-bg);
      border-radius: 2px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(90deg);
    }

    &:hover {
      background-color: var(--color-inactive);
    }
  }

  &--category-card {
    justify-content: center;
    width: 49px;
    height: 49px;
    border-radius: 50%;
    background-color: var(--color-fg);
    color: var(--color-bg);
    border: 3px solid var(--color-bg);
  }
}
</style>
