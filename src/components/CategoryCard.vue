<script setup lang="ts">
import Button from '@/components/ui-kit/Button.vue';
import Icon from '@/components/ui-kit/Icon.vue';
import type { Bookmarks } from '@/interfaces/bookmarks.interfaces';
import { useBookmarkStore } from '@/stores/bookmarks.store';

const { bookmark } = defineProps<{ bookmark: Bookmarks }>();
const bookmarkStore = useBookmarkStore();

function deleteBookmark() {
  bookmarkStore.deleteBookmark(bookmark.id);
}

function copyLink() {
  navigator.clipboard.writeText(bookmark.url);
}
</script>

<template>
  <div class="category-card">
    <img class="category-card__image" :src="bookmark.image" :alt="bookmark.title" />
    <div class="category-card__title">{{ bookmark.title }}</div>
    <div class="category-card__btns">
      <Button class="button--category-card" @click="deleteBookmark">
        <Icon name="CategoryCart" size="24" />
      </Button>
      <Button class="button--category-card" @click="copyLink">
        <Icon name="CategoryLink" size="24" />
      </Button>
    </div>
  </div>
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
