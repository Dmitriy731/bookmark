<script setup lang="ts">
import { ref } from 'vue';
import InputString from '@/components/ui-kit/InputString.vue';
import Button from '@/components/ui-kit/Button.vue';
import Icon from '@/components/ui-kit/Icon.vue';
import type { Categories } from '@/interfaces/categories.interfaces';
import { useCategoriesStore } from '@/stores/categories.store';
import { useRouter } from 'vue-router';

const { category } = defineProps<{ category: Categories }>();
const isEdited = ref<boolean>(false);
const newCategoryName = ref<string>(category.name);
const categoryStore = useCategoriesStore();
const router = useRouter();
function toggleEdit() {
  isEdited.value = !isEdited.value;
}

function updateCategory() {
  if (!newCategoryName.value) {
    return;
  }
  categoryStore.updateCategory(newCategoryName.value, category.alias, category.id);
  toggleEdit();
}

function deleteCategory() {
  categoryStore.deleteCategory(category.id);
  router.push({ name: 'main' });
}
</script>

<template>
  <div class="category-head">
    <h1 class="category-head__title" v-if="!isEdited">{{ category?.name }}</h1>
    <div v-else class="category-head__wrap-input">
      <InputString v-model="newCategoryName" />
      <Button class="button--round" @click="updateCategory">
        <Icon name="Check" size="16" />
      </Button>
    </div>
    <div class="category-head__btns">
      <Button class="button--round" @click="toggleEdit">
        <Icon name="Pen" size="14" />
      </Button>
      <Button class="button--round" @click="deleteCategory">
        <Icon name="Cart" size="16" />
      </Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.category-head {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__wrap-input {
    display: flex;
    column-gap: 10px;
  }

  &__title {
    font-weight: 500;
    font-size: 24px;
    line-height: 100%;
    margin: 0;
  }

  &__btns {
    display: flex;
    column-gap: 10px;
  }
}
</style>
