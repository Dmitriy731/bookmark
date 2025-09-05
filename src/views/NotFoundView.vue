<script setup lang="ts">
import Button from '@/components/ui-kit/Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function redirectToMain() {
  router.push({
    name: 'main',
  });
}
</script>

<template>
  <div class="not-found">
    <div class="not-found__form">
      <h1>404</h1>
      <Button @click="redirectToMain" class="button--primary" as="button">На главную</Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 52px;
  }

  h1 {
    font-weight: 700;
    font-size: 128px;
    margin: 0;
  }
}
</style>
