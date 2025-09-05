<script setup lang="ts">
import ProfileAvatars from '@/components/ProfileAvatars.vue';
import Navigation from '@/components/Navigation.vue';
</script>

<template>
  <div class="app">
    <aside class="sidebar">
      <ProfileAvatars />
      <Navigation />
    </aside>
    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app {
  display: grid;
  grid-template-columns: 280px minmax(1024px, 1fr);
  gap: 80px;
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  max-width: 1520px;
  overflow: hidden;
  padding: 140px 40px 0;
  margin: 0 auto;
}

.sidebar {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
}
</style>
