<template>
  <section class="Header">
    <div class="Header__Wrapper">
      <div class="Header__Icon Header__Menu" @click="active = !active">
        Menu
      </div>
    </div>
    <div class="Menu__Wrapper" :class="{ active: active }">
      <div class="grid grid-cols-2 gap-24">
        <div></div>
        <nuxt-link :to="localePath('introduce')">Giới thiệu</nuxt-link>
        <div>Thông cáo báo chí</div>
        <div>Tâm đạo / Trà đạo</div>
        <div>Liên hệ</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: false
    };
  }
};
</script>

<style></style>

<style lang="scss" scoped>
.Header__Wrapper {
  @apply absolute right-0 inset-y-0 flex justify-center items-center;
  border-left: 1px solid black;
  width: 60px;
}

.Header__Menu {
  @apply cursor-pointer;

  &:hover {
    @apply text-primary-darker;
  }
}

.Menu__Wrapper {
  @apply transition duration-500 ease-in-out;
  @apply absolute invisible opacity-0 flex justify-center items-center;
  @apply m-auto;
  height: 540px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 60px;
  background: yellow;

  &.active {
    @apply transition duration-500 ease-in-out;
    @apply visible opacity-100;
  }
}
</style>
