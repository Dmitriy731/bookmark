import { API_ROUTES, client } from '../api';
import { defineStore } from 'pinia';
import type { Profile } from '../interfaces/profile.interfaces';
import { ref } from 'vue';

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>();

  async function fetchProfile() {
    const { data, status } = await client().get<Profile>(API_ROUTES.auth.profile);
    if (status !== 200) {
      console.error('Error fetching profile');
    } else {
      profile.value = data;
    }
  }

  return {
    profile,
    fetchProfile,
  };
});
