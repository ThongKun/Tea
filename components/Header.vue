<template>
  <section class="Header">
    <picture>
      <img
        src="~/assets/img/zhen-tea-logo.png"
        alt=""
        srcset=""
        class="absolute h-[130px] left-1/2 transform -translate-x-1/2 mt-[42px]"
      />
    </picture>
  </section>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.Header img {
  @media screen and (max-width: 400px) {
    @apply px-5;
  }
}
</style>
