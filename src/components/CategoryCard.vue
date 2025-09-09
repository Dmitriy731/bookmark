<script setup lang="ts">
import Button from '@/components/ui-kit/Button.vue';
import Icon from '@/components/ui-kit/Icon.vue';
import type { Bookmarks } from '@/interfaces/bookmarks.interfaces';
import { ref } from 'vue';
import PopupConfirm from './PopupConfirm.vue';

const { id, title, image, url } = defineProps<Bookmarks>();
const emit = defineEmits(['delete']);
const isOpen = ref<boolean>(false);

function deleteBookmark() {
  emit('delete', id);
}

function copyLink() {
  navigator.clipboard.writeText(url);
}
</script>

<template>
  <div class="category-card">
    <img
      class="category-card__image"
      width="274"
      height="162"
      :src="
        image ||
        'https://media.istockphoto.com/id/1325705756/vector/missing-red-ink-stamp.jpg?s=612x612&w=0&k=20&c=Tmbug70TVXVP2tmgV-xcbWGsLWqTcTLJYtGBtrYLYkc='
      "
      :alt="title"
    />
    <div class="category-card__title">{{ title }}</div>
    <div class="category-card__btns">
      <Button class="button--category-card" @click="() => (isOpen = !isOpen)">
        <Icon name="CategoryCart" size="24" />
      </Button>
      <Button class="button--category-card" @click="copyLink">
        <Icon name="CategoryLink" size="24" />
      </Button>
    </div>
  </div>
  <PopupConfirm
    text="Вы уверены, что хотите удалить закладку?"
    :is-open="isOpen"
    @ok="deleteBookmark"
    @cencel="isOpen = false"
  />
</template>

<style scoped lang="scss">
.category-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: calc(100% / 3 - 70px / 2);
  background-color: var(--color-fg);
  color: var(--color-bg);
  border-radius: 30px;
  padding: 20px;

  &__image {
    border-radius: 20px;
    aspect-ratio: 274/162;
    object-fit: cover;
    background-color: var(--color-bg);
  }

  &__title {
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;

    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  &__btns {
    display: flex;
    justify-content: space-between;
    column-gap: 10px;
  }
}
</style>
