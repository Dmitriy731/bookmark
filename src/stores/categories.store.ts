import { API_ROUTES, client } from '../api';
import { defineStore } from 'pinia';
import type { Categories } from '../interfaces/categories.interfaces';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { router } from '@/routes';

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<Categories[]>([]);

  async function fetchCategories() {
    const { data, status } = await client().get<Categories[]>(API_ROUTES.categories);
    if (status !== 200) {
      console.error('Error fetching categories');
    } else {
      categories.value = data;
    }
  }

  async function createCategory() {
    const { data } = await client().post<Categories>(API_ROUTES.categories, {
      name: 'New category',
      alias: uuidv4(),
    });
    categories.value.push(data);
  }

  async function updateCategory(name: string, alias: string, id: number) {
    await client().put<Categories>(API_ROUTES.categoriesId(id), {
      name: name,
      alias: alias,
    });
    fetchCategories();
  }

  async function deleteCategory(id: number) {
    await client().delete<Categories>(API_ROUTES.categoriesId(id));
    fetchCategories();
  }

  function getCategoryByAlias(alias: string | string[]): Categories | undefined {
    if (typeof alias === 'string') {
      return categories.value.find((category) => category.alias === alias);
    }
    return;
  }

  return {
    categories,
    fetchCategories,
    createCategory,
    getCategoryByAlias,
    updateCategory,
    deleteCategory,
  };
});
