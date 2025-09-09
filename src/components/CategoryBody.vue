<script setup lang="ts">
import { ref } from 'vue';
import type { Bookmarks } from '@/interfaces/bookmarks.interfaces';
import CategoryCard from './CategoryCard.vue';
import { useBookmarkStore } from '@/stores/bookmarks.store';
import CategoryCardAdd from './CategoryCardAdd.vue';

const { bookmarks, categoryId } = defineProps<{ bookmarks: Bookmarks[]; categoryId: number }>();
const bookmarkStore = useBookmarkStore();
const linkBookmark = ref<string>('');
const activeCreate = ref<boolean>(false);

function createBookmark() {
  bookmarkStore.createBookmark(categoryId, linkBookmark.value);
  linkBookmark.value = '';
}

function deleteBookmark(id: number) {
  bookmarkStore.deleteBookmark(id, categoryId);
}

function toggleCreate(e: boolean) {
  activeCreate.value = e;
}
</script>

<template>
  <div class="category-body">
    <CategoryCard v-for="item in bookmarks" :key="item.id" v-bind="item" @delete="deleteBookmark" />
    <CategoryCardAdd
      v-if="categoryId"
      @create-bookmark="createBookmark"
      v-model="linkBookmark"
      @active-create="toggleCreate"
      :active-create="activeCreate"
    />
  </div>
</template>

<style scoped lang="scss">
.category-body {
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
}
</style>
