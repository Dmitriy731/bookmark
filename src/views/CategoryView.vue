<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useCategoriesStore } from '@/stores/categories.store';
import { watch, ref, onMounted } from 'vue';
import type { Categories } from '@/interfaces/categories.interfaces';
import { useBookmarkStore } from '@/stores/bookmarks.store';
import CategoryHead from '@/components/CategoryHead.vue';
import CategoryBody from '@/components/CategoryBody.vue';
import BookmarkSort from '@/components/BookmarkSort.vue';

const route = useRoute();
const categoryStore = useCategoriesStore();
const bookmarkStore = useBookmarkStore();
const category = ref<Categories>();

async function loadData(alias: string) {
  if (!categoryStore.categories.length) {
    await categoryStore.fetchCategories();
  }
  const categories = categoryStore.getCategoryByAlias(alias);
  if (categories) {
    category.value = categories;
    bookmarkStore.fetchBookmarks(categories.id, bookmarkStore.activeSort);
  }
}

function updateSortOption(option: string) {
  bookmarkStore.activeSort = option;

  if (category.value) {
    bookmarkStore.fetchBookmarks(category.value.id, bookmarkStore.activeSort);
  }
}

onMounted(() => {
  loadData(route.params.alias as string);
});

watch(
  () => ({
    alias: route.params.alias,
    id: route.params.id,
  }),
  (data) => {
    loadData(data.alias as string);
  },
);
</script>
<template>
  <div class="category">
    <CategoryHead v-if="category" :category="category" />
    <BookmarkSort
      v-if="category"
      :option="bookmarkStore.activeSort"
      @update:option="updateSortOption"
    />
    <CategoryBody
      v-if="bookmarkStore.bookmarks"
      :bookmarks="bookmarkStore.bookmarks"
      :categoryId="category?.id ? category.id : 0"
    />
  </div>
</template>

<style scoped lang="scss">
.category {
  display: flex;
  flex-direction: column;
}
</style>
