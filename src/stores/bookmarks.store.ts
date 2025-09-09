import { API_ROUTES, client } from '../api';
import { defineStore } from 'pinia';
import type { Bookmarks } from '../interfaces/bookmarks.interfaces';
import { ref } from 'vue';

export const useBookmarkStore = defineStore('bookmarks', () => {
  const bookmarks = ref<Bookmarks[]>([]);
  const activeSort = ref<string>('date');

  async function fetchBookmarks(categoryId: number, sort: string) {
    const { data } = await client().get<Bookmarks[]>(API_ROUTES.bookmarks.get(categoryId), {
      params: {
        sort,
      },
    });
    bookmarks.value = data;
  }

  async function createBookmark(category_id: number, url: string) {
    await client().post<Bookmarks>(API_ROUTES.bookmarks.create, {
      category_id,
      url,
    });
    fetchBookmarks(category_id, activeSort.value);
  }

  async function deleteBookmark(id: number, categoryId: number) {
    await client().delete<Bookmarks>(API_ROUTES.bookmarks.delete(id));
    fetchBookmarks(categoryId, activeSort.value);
  }

  return {
    bookmarks,
    activeSort,
    fetchBookmarks,
    createBookmark,
    deleteBookmark,
  };
});
