<script setup lang="ts">
import { onMounted } from 'vue';
import { useProfileStore } from '@/stores/profile.store';

const store = useProfileStore();

onMounted(() => {
  store.fetchProfile();
});
</script>

<template>
  <div class="profile" v-if="store.profile">
    <picture class="profile__image">
      <img src="/avatar.webp" alt="Изоброжение профиля" width="80" height="80" />
    </picture>
    <div class="profile__name">
      Привет, <strong>{{ store.profile?.name }}</strong>
    </div>
  </div>
</template>

<style scoped lang="scss">
.profile {
  display: flex;
  flex-direction: column;
  row-gap: 24px;

  &__image {
    position: relative;
    width: 80px;
    height: 80px;

    & img {
      border-radius: 50%;
      object-fit: cover;
    }

    &::before {
      content: '';
      display: block;
      width: 10px;
      height: 10px;
      background-color: var(--status-online);
      border: 2px solid var(--color-bg);
      border-radius: 50%;
      position: absolute;
      bottom: 8px;
      right: 8px;
    }
  }

  &__name {
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 2%;
  }
}
</style>
