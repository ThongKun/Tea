<template>
  <main class="">
    <section class="relative flex items-center justify-center h-screen">
      <picture>
        <img
          src="~/assets/img/tea-field.jpg"
          alt=""
          srcset=""
          class="absolute inset-0 z-[-1] h-full w-full object-cover"
        />
      </picture>
      <div class="font-bold text-center">
        <h2 class="text-48 md:text-[86px] text-white">
          Văn Hóa
          <span class="text-48 md:text-[86px] text-primary-light">Trà</span>
        </h2>
      </div>
      <kinesis-container
        class="absolute inset-0 object-contain w-full m-auto h-4/5"
      >
        <kinesis-element :strength="10">
          <picture>
            <img src="~/assets/img/leaves-texture.png" alt="" srcset="" />
          </picture>
        </kinesis-element>
      </kinesis-container>
    </section>
    <section class="container flex flex-col justify-center h-screen about-us">
      <h2 class="font-black text-center text-primary text-48 md:text-72">
        VỀ CHÚNG TÔI
      </h2>
      <ul
        class="
          flex flex-col
          xl:w-1/2
          md:w-3/4
          mx-auto
          text-justify
          gap-y-8
          mt-[60px]
          text-16
          md:text-18
        "
      >
        <li>
          Hiệp hội phục hưng văn hóa truyền thống (Association for the revival
          of traditional culture) hay còn gọi là ZHEN CULTURE - Chân Văn hóa
        </li>
        <li>
          Được thành lập tại thủ đô Paris (CH Pháp) mang theo động lực khôi phục
          và phát huy văn hóa truyền thống.
        </li>
        <li>
          Tĩnh lặng học hỏi và đối chiếu với những giá trị truyền thống, chúng
          ta mới thấy được Chân giá trị nội tại và phát triển những bản năng,
          năng lực của chính mình, để từ đó ứng dụng vào suy nghĩ, hành động,
          việc làm
        </li>
      </ul>
    </section>
    <section class="mt-[120px] mb-24">
      <h2
        class="
          font-black
          text-center text-primary text-48
          md:text-72
          mb-8
          md:mb-[60px]
        "
      >
        NGÔI NHÀ ZHEN TEA
      </h2>
      <div class="container flex flex-col md:flex-row gap-x-8">
        <div class="order-2 md:w-1/2 md:order-1">
          <ul class="flex flex-col text-justify gap-y-8 text-16 md:text-18">
            <li>
              Ngôi nhà Zhentea được tổ chức bởi Hiệp hội phục hưng văn hóa
              truyền thống, mang theo động lực khôi phục văn hóa Trà và phát
              triển Chân giá trị nhân sinh.
            </li>
            <li>
              Zhentea là nơi giúp chúng ta tách khỏi đời sống tấp nập, bận rộn.
              Cho phép chúng ta chậm rãi một chút, để đôi chân được nghỉ ngơi
              một chút và tâm hồn được thư giãn một chút. Cho ta nhìn lại chính
              mình, nhìn lại con đường mình đang đi, về mục tiêu mình đã chọn.
              Từ đó hiểu được rằng đâu là con người thựcsự của mình, đâu là Chân
              giá trị và đâu là mục tiêu chân chính của cuộc đời
            </li>
            <li>Zhentea là một ngôi nhà nhỏ Bình Yên cho tất cả chúng ta.</li>
          </ul>
          <button
            class="
              block
              mx-auto
              px-8
              py-2
              text-white
              rounded-full
              bg-primary
              mt-9
              md:ml-[54px]
            "
          >
            Xem thêm
          </button>
        </div>
        <div class="order-1 w-1/2 mx-auto md:order-2">
          <picture>
            <img src="~/assets/img/lotus-teapot.jpg" alt="ALT" srcset="" />
          </picture>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

export default {
  components: {
    KinesisContainer,
    KinesisElement,
  },
}
</script>

<style lang="scss" scoped>
.about-us {
  @media screen and (min-width: theme('screens.xl')) {
    background: url('~/assets/img/about-us.jpg');
    background-size: cover;
  }
}
</style>
