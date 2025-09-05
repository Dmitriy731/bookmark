<script setup lang="ts">
import { ref, watch } from 'vue';
import InputString from '@/components/ui-kit/InputString.vue';
import Button from '@/components/ui-kit/Button.vue';
import { useAuthStore } from '@/stores/auth.store';
import { useRouter } from 'vue-router';

const form = ref<{ email?: string; password?: string }>({});
const authStore = useAuthStore();
const router = useRouter();

watch(
  () => authStore.getToken,
  () => {
    if (authStore.getToken) {
      router.push({ name: 'main' });
    }
  },
);

function onSubmit(e: Event) {
  e.preventDefault();

  if (!form.value.email || !form.value.password) {
    return;
  }
  authStore.login(form.value.email, form.value.password);
  form.value = {};
}
</script>

<template>
  <div class="auth">
    <div class="auth__form">
      <h1>Bookmarkly</h1>
      <form action="" class="auth__form" @submit="onSubmit">
        <InputString v-model="form.email" placeholder="Email" />
        <InputString v-model="form.password" placeholder="Пароль" type="password" />
        <Button type="submit" class="button--primary" as="button">Вход</Button>
        {{ authStore.getToken }}
      </form>
    </div>
  </div>
</template>

<style scoped lang="scss">
.auth {
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
    font-size: 52px;
    margin: 0;
  }
}
</style>
