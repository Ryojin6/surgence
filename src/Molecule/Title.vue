<template>
  <div class="mx-auto max-w-6xl text-center">
    <div
      class="stack pb-10 !font-title text-6xl !font-bold uppercase text-a-pink md:text-7xl xl:text-8xl"
      style="--stacks: 3"
    >
      <span style="--index: 0">{{ title }}</span>
      <span style="--index: 1">{{ title }}</span>
      <span style="--index: 2">{{ title }}</span>
    </div>
    <div class="md:text-xl 2xl:text-2xl">{{ subtitle }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>
.stack {
  display: grid;
  grid-template-columns: 1fr;
}

.stack span {
  font-weight: bold;
  grid-row-start: 1;
  grid-column-start: 1;

  --stack-height: calc(100% / var(--stacks) - 1px);
  --inverse-index: calc(calc(var(--stacks) - 1) - var(--index));
  --clip-top: calc(var(--stack-height) * var(--index));
  --clip-bottom: calc(var(--stack-height) * var(--inverse-index));
  clip-path: inset(var(--clip-top) 0 var(--clip-bottom) 0);
  animation: stack 340ms cubic-bezier(0.46, 0.29, 0, 1.24) 1 backwards
      calc(var(--index) * 120ms),
    glitch 1.5s ease infinite 1.5s alternate-reverse;
}

.stack span:nth-child(odd) {
  --glitch-translate: 8px;
}
.stack span:nth-child(even) {
  --glitch-translate: -8px;
}

@keyframes stack {
  0% {
    opacity: 0;
    transform: translateX(-50%);
    text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
  }
  60% {
    opacity: 0.5;
    transform: translateX(50%);
  }
  80% {
    transform: none;
    opacity: 1;
    text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
  }
  100% {
    text-shadow: none;
  }
}

@keyframes glitch {
  0% {
    text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
    transform: translate(var(--glitch-translate));
  }
  2% {
    text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
  }
  4%,
  100% {
    text-shadow: none;
    transform: none;
  }
}
</style>
