<template>
  <main class="h-screen">
    <div class="Introduction__Wrapper">
      <div class="Introduction__Left">
        <div>
          <div>Ảnh Thiên Nhiên</div>
          <div>Logo Zhen Tea</div>
        </div>
        <div>Quán Trà Zhen Tea</div>
        <div class="Address">Địa chỉ</div>
      </div>
      <div class="Introduction__RIght">Bố cục bên phải</div>
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.Introduction__Wrapper {
  @apply flex items-stretch h-full;
}
.Introduction__Left {
  width: 200px;
  border-right: 1px solid #ccc;

  @apply flex flex-col justify-between;
}
.Introduction__Right {
  @apply flex-grow;
}
</style>
