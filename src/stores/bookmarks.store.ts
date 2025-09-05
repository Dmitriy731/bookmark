import { API_ROUTES, client } from '../api';
import { defineStore } from 'pinia';
import type { Bookmarks } from '../interfaces/bookmarks.interfaces';
import { ref } from 'vue';

export const useBookmarkStore = defineStore('bookmarks', () => {
  const bookmarks = ref<Bookmarks[]>([]);

  async function fetchBookmarks(categoryId: number) {
    const { data } = await client().get<Bookmarks[]>(API_ROUTES.bookmarks(categoryId));
    bookmarks.value = data;
    console.log(bookmarks.value);
  }

  async function createBookmark(categoryId: number, url: string) {
    const { data } = await client().post<Bookmarks>(API_ROUTES.createBookmark, {
      category_id: categoryId,
      url: url,
    });
    bookmarks.value.push(data);
  }

  async function deleteBookmark(id: number) {
    await client().delete<Bookmarks>(API_ROUTES.bookmarksId(id));
    fetchBookmarks(id);
  }

  return {
    bookmarks,
    fetchBookmarks,
    createBookmark,
    deleteBookmark,
  };
});
