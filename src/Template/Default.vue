<template>
  <div class="bg-white font-sans text-xl text-white">
    <a href="#content" class="sr-only text-blue-600 focus:not-sr-only">
      Skip to main content
    </a>
    <AtomIeBanner />
    <div class="">
      <OrganismHeader :homepage="homepage" />
      <div id="content" />
      <slot />
      <OrganismFooter v-if="homepage" />
      <OrganismFooterHub v-else />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    homepage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      elementVisible: true,
    };
  },

  mounted() {
    setTimeout(() => {
      this.elementVisible = false;
    }, 2000);
  },
};
</script>
