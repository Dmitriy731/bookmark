<script setup lang="ts">
import Button from './ui-kit/Button.vue';

const { isOpen, text } = defineProps<{
  isOpen: boolean;
  text: string;
}>();

const emit = defineEmits(['ok', 'cencel']);
</script>

<template>
  <Transition name="fade">
    <Teleport to="body">
      <div class="cover" v-if="isOpen">
        <div class="popup">
          <div class="popup__text">{{ text }}</div>
          <div class="popup__actions">
            <Button class="button--primary" @click="$emit('ok')">Да</Button>
            <Button class="button--primary" @click="$emit('cencel')">Нет</Button>
          </div>
        </div>
      </div>
    </Teleport>
  </Transition>
</template>

<style scoped lang="scss">
.cover {
  position: fixed;
  top: 0;
  left: 0;
  inset: 0;
  background-color: var(--color-inactive);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.popup {
  background-color: var(--color-bg);
  border-radius: 20px;
  padding: 20px;
  min-width: 350px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  &__text {
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
  }

  &__actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 10px;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>
