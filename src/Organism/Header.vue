<template>
  <header
    class="custom-transition fixed inset-x-0 z-40 flex w-full flex-shrink-0 items-center justify-between border-black px-3 py-4 scrolled:bg-a-charcoal lg:px-10"
    :class="[{ open: toggled }, { 'border-b-8': !homepage }]"
  >
    <g-link
      to="/"
      class="w-16 text-white transition-all duration-300 ease-in-out scrolled:w-12 xl:w-16 2xl:w-20 2xl:scrolled:w-16"
    >
      <AtomBrand :homepage="homepage" />
    </g-link>

    <div class="relative z-40 flex flex-1 justify-end space-x-2 md:space-x-6">
      <div
        class="custom-transition flex w-full items-center justify-end space-x-4 md:w-auto"
      >
        <AtomIconTwitter
          link="#"
          class="hidden w-8 text-a-pink hover:text-a-blue md:block"
        />
        <AtomIconDiscord
          link="#"
          class="hidden w-8 text-a-pink hover:text-a-blue md:block"
        />
        <AtomIconLinkedin
          link="#"
          class="hidden w-8 text-a-pink hover:text-a-blue md:block"
        />
      </div>

      <button class="focus:outline-none block" @click="toggled = !toggled">
        <AtomIconHamburger :class="[{ open: toggled }, 'homepage']" />
      </button>
    </div>
    <nav>
      <ul class="menu flex flex-col items-center justify-center text-center">
        <AtomMenuItem
          title="The Hub"
          anchor="/hub"
          @toggled="toggled = false"
        />
        <AtomMenuItem
          title="About"
          anchor="/#about"
          @toggled="toggled = false"
        />
        <AtomMenuItem
          title="Community"
          anchor="/#community"
          @toggled="toggled = false"
        />
        <AtomMenuItem
          title="What We Do"
          anchor="/#what-we-do"
          @toggled="toggled = false"
        />
        <AtomMenuItem
          title="Advisory Services"
          anchor="/#advisory-services"
          @toggled="toggled = false"
        />
        <AtomMenuItem
          title="Contact"
          anchor="/#contact"
          @toggled="toggled = false"
        />
      </ul>
    </nav>
  </header>
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
      toggled: false,
      open: false,
    };
  },
};
</script>

<style media="screen">
nav {
  @apply fixed left-0 z-10 h-full w-full overflow-hidden;

  top: -100%;

  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
}

nav:before {
  content: '';
  @apply absolute inset-0 m-auto h-0 w-full overflow-hidden rounded-full bg-[#1f2223];

  padding-bottom: 100%;

  transform: scale(0.04), translateY(9999px);
}

.open nav {
  @apply top-0;
}

.open nav:before {
  animation: menu-animation 0.8s ease-out forwards;
}

ul.menu {
  @apply fixed top-1/2 left-1/2 text-white;
  transform: translate3d(-50%, -50%, 0);
  backface-visibility: hidden;
  perspective: 1000;
}

ul.menu a {
  @apply text-center opacity-0;
  transform: translate3d(0, 36px, 0);
}

ul.menu a:before {
  content: '';
  @apply absolute inset-0 left-auto m-auto h-full w-0 overflow-hidden bg-white;

  transition: width 0.14s ease-out;
}

ul.menu a:after {
  @apply absolute right-0 left-0 bottom-0 m-auto overflow-hidden text-gray-800 opacity-0;

  content: attr(data-text);

  transform: translate(-24px, 6px);
  transition: transform 0.1s ease-out, opacity 0.1s ease-out;
}

.open ul.menu a {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;
}

.open ul.menu a:nth-child(1) {
  transition-delay: 0.75s;
}

.open ul.menu a:nth-child(2) {
  transition-delay: 0.85s;
}

.open ul.menu a:nth-child(3) {
  transition-delay: 0.95s;
}

.open ul.menu a:nth-child(4) {
  transition-delay: 1.05s;
}

.open ul.menu a:nth-child(5) {
  transition-delay: 1.15s;
}

.open ul.menu a:nth-child(6) {
  transition-delay: 1.25s;
}

.open ul.menu a:nth-child(7) {
  transition-delay: 1.35s;
}

.open ul.menu a:nth-child(8) {
  transition-delay: 1.45s;
}

.open ul.menu a:nth-child(9) {
  transition-delay: 1.55s;
}
.open ul.menu a:nth-child(10) {
  transition-delay: 1.65s;
}
.open ul.menu a:nth-child(11) {
  transition-delay: 1.75s;
}
.open ul.menu a:nth-child(12) {
  transition-delay: 1.85s;
}

.open article {
  transform: scale(0.92);
  transition: transform 0.2s 0.41s ease-out;
}

@keyframes menu-animation {
  0% {
    opacity: 0;
    transform: scale(0.04) translateY(300%);
  }

  40% {
    transform: scale(0.04) translateY(0);
    transition: ease-out;
  }

  40% {
    transform: scale(0.04) translateY(0);
  }

  60% {
    opacity: 1;
    transform: scale(0.02) translateY(0px);
  }

  61% {
    transform: scale(0.04);
  }

  99.9% {
    height: 0;
    padding-bottom: 100%;
    border-radius: 100%;
  }

  100% {
    transform: scale(2);
    height: 100%;
    padding-bottom: 0;
    border-radius: 0;
  }
}
</style>
