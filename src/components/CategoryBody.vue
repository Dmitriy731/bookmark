<script setup lang="ts">
import type { Bookmarks } from '@/interfaces/bookmarks.interfaces';
import CategoryCard from './CategoryCard.vue';
import Button from '@/components/ui-kit/Button.vue';
import Icon from '@/components/ui-kit/Icon.vue';
import { useBookmarkStore } from '@/stores/bookmarks.store';

const { bookmarks, categoryId } = defineProps<{ bookmarks: Bookmarks[]; categoryId: number }>();
const bookmarkStore = useBookmarkStore();

function createBookmark() {
  bookmarkStore.createBookmark(categoryId, 'test');
}
</script>

<template>
  <div class="category-body">
    <CategoryCard v-for="item in bookmarks" :key="item.id" :bookmark="item" />
    <Button class="button--round" @click="createBookmark">
      <Icon name="CategoryCart" size="24" />
    </Button>
  </div>
</template>

<style scoped lang="scss">
.category-body {
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
}
</style>
