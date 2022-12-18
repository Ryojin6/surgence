<template>
  <li
    v-scroll-to="anchor"
    class="nav-item w-96 py-4 font-mono text-3xl font-bold uppercase leading-none text-[#00ffff] hover:cursor-pointer md:text-4xl xl:text-5xl 2xl:text-6xl"
    :data-text="title"
    @click="closeMenu"
  >
    Lorem
  </li>
</template>

<script>
export default {
  props: {
    anchor: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    toggled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeMenu() {
      this.$emit('toggled');
    },
  },
};
</script>
