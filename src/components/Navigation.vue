<script setup lang="ts">
import { useAuthStore } from '@/stores/auth.store';
import { useCategoriesStore } from '@/stores/categories.store';
import { onMounted } from 'vue';
import Button from '@/components/ui-kit/Button.vue';
import { useRouter } from 'vue-router';

const store = useCategoriesStore();
const authStore = useAuthStore();
const router = useRouter();

onMounted(() => {
  store.fetchCategories();
});

function logout() {
  router.push('/');
  authStore.clearToken();
}
</script>

<template>
  <nav class="navigation">
    <Button
      v-for="item in store.categories"
      :key="'navigation' + item.id"
      class="button--navigation"
      as="router"
      :to="`/main/${item.alias}`"
    >
      {{ item.name }}
    </Button>
  </nav>
  <Button class="button--round button--add-category" @click="store.createCategory"></Button>
  <Button class="button--navigation" @click="logout">Выход</Button>
</template>

<style scoped lang="scss">
.navigation {
  display: flex;
  flex-direction: column;
  row-gap: 29px;
}
</style>
