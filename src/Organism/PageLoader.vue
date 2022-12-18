<template>
  <transition name="fade">
    <div
      v-show="elementVisible"
      class="absolute top-0 z-50 flex h-screen w-full items-center justify-center bg-n-brown"
    >
      <div class="relative mx-auto w-full max-w-4xl p-4">
        <img src="/entry.gif" alt="" class="z-20 p-1" />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      elementVisible: true,
    };
  },

  mounted() {
    setTimeout(() => {
      this.elementVisible = false;
    }, 8000);
  },
};
</script>
