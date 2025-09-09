<script setup lang="ts">
import Button from './ui-kit/Button.vue';
import InputString from './ui-kit/InputString.vue';
import Icon from './ui-kit/Icon.vue';

const { activeCreate } = defineProps<{ activeCreate: boolean }>();

const data = defineModel<string>();
const emit = defineEmits(['createBookmark', 'activeCreate']);

function enterBookmark() {
  emit('activeCreate', true);
}

function createBookmark() {
  emit('createBookmark', data.value);
  emit('activeCreate', false);
}
</script>

<template>
  <div class="category-card-add" @click="enterBookmark">
    <Button v-if="!activeCreate" class="button--round button--add-category button--round-category">
    </Button>
    <div v-else class="category-card-add__wrap-input">
      <InputString
        class="input-string--category"
        type="url"
        name="link"
        v-model="data"
        is-focused
      />
      <Button class="button--round" @click="createBookmark">
        <Icon name="Check" size="16" />
      </Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.category-card-add {
  width: calc(100% / 3 - 70px / 2);
  border-radius: 30px;
  border: 1px dashed var(--color-fg);
  height: -webkit-fill-available;
  min-height: 137px;
  padding: 24px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover {
    .button--round-category {
      background-color: var(--color-inactive);
    }
  }

  &__wrap-input {
    display: flex;
    align-items: center;
    gap: 24px;
  }
}

// &__border {
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   transform: translate(-50%, -50%);
//   border-radius: 50%;
//   background-color: var(--color-fg);
//   width: 48px;
//   height: 48px;
// }
</style>
