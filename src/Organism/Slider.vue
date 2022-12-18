<template>
  <div class="relative w-full">
    <hooper
      group="group1"
      class="focus:outline-none h-full"
      :wheel-control="false"
      :infinite-scroll="true"
      :settings="hooperSettings"
    >
      <slide> <img src="/slider/6.png" class="w-full" alt="" /> </slide
      ><slide>
        <img src="/slider/1.png" class="w-full" alt="" />
      </slide>
      <slide> <img src="/slider/2.png" class="w-full" alt="" /> </slide
      ><slide>
        <img src="/slider/3.png" class="w-full" alt="" />
      </slide>
      <slide>
        <img src="/slider/9.png" class="w-full" alt="" />
      </slide>
      <slide>
        <img src="/slider/12.png" class="w-full" alt="" />
      </slide>
    </hooper>
    <hooper
      ref="carousel"
      class="focus:outline-none h-full"
      :wheel-control="false"
      :infinite-scroll="true"
      :settings="hooperSettings"
      group="group1"
    >
      <slide> <img src="/slider/4.png" class="w-full" alt="" /> </slide
      ><slide>
        <img src="/slider/5.png" class="w-full" alt="" />
      </slide>
      <slide> <img src="/slider/7.png" class="w-full" alt="" /> </slide
      ><slide>
        <img src="/slider/6.png" class="w-full" alt="" />
      </slide>
      <slide>
        <img src="/slider/10.png" class="w-full" alt="" />
      </slide>
      <slide>
        <img src="/slider/11.png" class="w-full" alt="" />
      </slide>
    </hooper>
    <div
      class="bg-a-lime pt-3 pb-2 font-mono text-xl font-bold uppercase text-a-navy"
    >
      <marquee behavior="alternate" direction="right">
        <span v-for="i in 40" :key="i"
          >Vegan - Gluten Free - Organic - Sweet -</span
        >
      </marquee>
    </div>
    <div
      class="md:pin-y-center absolute bottom-0 mx-auto w-full md:bottom-auto"
    >
      <div class="flex items-center justify-between">
        <button @click.prevent="slidePrev">
          <AtomIconNext class="w-8 rotate-180 transform lg:w-12" inverted />
        </button>

        <button type="button" @click.prevent="slideNext">
          <AtomIconNext class="w-8 lg:w-12" inverted />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  props: {
    noPaginate: {
      type: Boolean,
      default: false,
    },
    mintSlider: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      carouselData: 0,
      mintSetting: {
        itemsToShow: 1,

        breakpoints: {
          800: {
            centerMode: false,
            itemsToShow: 1,
          },
          1000: {
            itemsToShow: 2,
          },
        },
      },
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        breakpoints: {
          800: {
            centerMode: false,
            itemsToShow: 2,
          },
          1000: {
            itemsToShow: 4,
            pagination: 'fraction',
          },
        },
      },
    };
  },
  watch: {
    carouselData() {
      this.$refs.carousel.slideTo(this.carouselData);
    },
  },
  methods: {
    slidePrev() {
      this.$refs.carousel.slidePrev();
    },
    slideNext() {
      this.$refs.carousel.slideNext();
    },
  },
};
</script>

<style media="screen">
.hooper {
  height: 100%;
}
.hooper-indicator {
  @apply border-2 border-solid border-white bg-transparent;
}
.hooper-pagination {
  @apply py-2;
}
.hooper-indicator:hover,
.hooper-indicator.is-active {
  @apply border-white bg-white;
}
.hooper-indicator {
  @apply h-3 w-3 rounded-full;
}
</style>
