import { API_ROUTES, client } from '../api';
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { LoginResponse } from '../interfaces/auth.interfaces';

const TOKEN_STORE_KEY = 'token-store';

export const useAuthStore = defineStore('auth', () => {
  const token = ref<string>();

  const initialVakue = localStorage.getItem(TOKEN_STORE_KEY);

  if (initialVakue) {
    token.value = initialVakue;
  }

  function setToken(newToken: string) {
    token.value = newToken;
    localStorage.setItem(TOKEN_STORE_KEY, newToken);
  }

  function clearToken() {
    token.value = undefined;
    localStorage.removeItem(TOKEN_STORE_KEY);
  }

  const getToken = computed(() => token.value);

  async function login(email: string, password: string) {
    const { data, status } = await client().post<LoginResponse>(API_ROUTES.auth.login, {
      email,
      password,
    });
    if (status !== 200) {
      console.error('Error fetching auth');
    } else {
      setToken(data.token);
    }
  }

  return {
    getToken,
    login,
    setToken,
    clearToken,
  };
});
