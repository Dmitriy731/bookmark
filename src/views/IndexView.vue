<template>
  <div class="main">
    <h1 class="main__title">Добро пожаловать в Bookmarkly!</h1>
    <div class="main__description">
      Чтобы начать пользоваться выберите категорию закладок или создайте новую.
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 25px;
  width: 100%;
  height: 100%;
  margin-top: -140px;

  &__title {
    font-size: 24px;
    font-weight: 500;
    margin: 0;
  }

  &__description {
    font-size: 16px;
    margin: 0;
  }
}
</style>
