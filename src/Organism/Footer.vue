<template>
  <AtomSection
    id="contact"
    tp="large"
    bp="large"
    class="flex max-h-[1200px] min-h-screen flex-col items-center justify-center"
  >
    <AtomInner>
      <div class="py-16 xl:py-32">
        <div
          class="mx-auto max-w-3xl pb-32 text-center text-6xl font-bold uppercase md:text-7xl xl:pb-52 xl:text-8xl"
        >
          Let's Talk About THe NExt
          <span class="glitch text-a-blue" data-text="BIG">BIG</span>
          Thing
        </div>

        <div class="grid gap-10 py-10 md:grid-cols-2 md:gap-20">
          <a
            href="#"
            class="textMedium custom-transition rounded-full border border-white px-10 py-6 text-center text-white hover:bg-a-blue hover:text-a-charcoal"
          >
            Discord
          </a>
          <a
            href="#"
            class="textMedium custom-transition rounded-full border border-white px-10 py-6 text-center text-white hover:bg-a-blue hover:text-a-charcoal"
          >
            Twitter
          </a>
        </div>
      </div>
    </AtomInner>
    <div class="pin-x-center absolute bottom-4 flex space-x-10 md:space-x-24">
      <a
        href="https://twitter.com/SurgenceNFT"
        target="_blank"
        class="custom-transition hover:text-a-pink"
        >Twitter</a
      >
      <a
        href="https://www.linkedin.com/company/surgencenft/"
        target="_blank"
        class="custom-transition hover:text-a-pink"
        >Linkedin</a
      >

      <a
        href="https://discord.gg/surgencenft"
        target="_blank"
        class="custom-transition hover:text-a-pink"
        >Discord</a
      >
    </div>
  </AtomSection>
</template>
<style>
.glitch {
  @apply text-a-blue;

  position: relative;

  margin: 0 auto;
}

@keyframes noise-anim {
  0% {
    clip: rect(36px, 9999px, 10px, 0);
  }
  5% {
    clip: rect(41px, 9999px, 44px, 0);
  }
  10% {
    clip: rect(6px, 9999px, 27px, 0);
  }
  15% {
    clip: rect(3px, 9999px, 45px, 0);
  }
  20% {
    clip: rect(61px, 9999px, 66px, 0);
  }
  25% {
    clip: rect(57px, 9999px, 73px, 0);
  }
  30% {
    clip: rect(76px, 9999px, 63px, 0);
  }
  35% {
    clip: rect(87px, 9999px, 57px, 0);
  }
  40% {
    clip: rect(98px, 9999px, 63px, 0);
  }
  45% {
    clip: rect(7px, 9999px, 100px, 0);
  }
  50% {
    clip: rect(67px, 9999px, 87px, 0);
  }
  55% {
    clip: rect(25px, 9999px, 98px, 0);
  }
  60% {
    clip: rect(67px, 9999px, 84px, 0);
  }
  65% {
    clip: rect(18px, 9999px, 74px, 0);
  }
  70% {
    clip: rect(73px, 9999px, 85px, 0);
  }
  75% {
    clip: rect(95px, 9999px, 52px, 0);
  }
  80% {
    clip: rect(96px, 9999px, 64px, 0);
  }
  85% {
    clip: rect(19px, 9999px, 92px, 0);
  }
  90% {
    clip: rect(98px, 9999px, 82px, 0);
  }
  95% {
    clip: rect(34px, 9999px, 43px, 0);
  }
  100% {
    clip: rect(99px, 9999px, 43px, 0);
  }
}
.glitch:after {
  content: attr(data-text);
  position: absolute;
  left: 2px;
  text-shadow: -1px 0 red;
  top: 0;
  @apply text-a-blue;
  background: black;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim 5s infinite linear alternate-reverse;
}

@keyframes noise-anim-2 {
  0% {
    clip: rect(69px, 9999px, 100px, 0);
  }
  5% {
    clip: rect(38px, 9999px, 24px, 0);
  }
  10% {
    clip: rect(55px, 9999px, 88px, 0);
  }
  15% {
    clip: rect(40px, 9999px, 87px, 0);
  }
  20% {
    clip: rect(73px, 9999px, 31px, 0);
  }
  25% {
    clip: rect(37px, 9999px, 70px, 0);
  }
  30% {
    clip: rect(69px, 9999px, 41px, 0);
  }
  35% {
    clip: rect(19px, 9999px, 35px, 0);
  }
  40% {
    clip: rect(22px, 9999px, 88px, 0);
  }
  45% {
    clip: rect(95px, 9999px, 6px, 0);
  }
  50% {
    clip: rect(50px, 9999px, 29px, 0);
  }
  55% {
    clip: rect(94px, 9999px, 2px, 0);
  }
  60% {
    clip: rect(78px, 9999px, 31px, 0);
  }
  65% {
    clip: rect(90px, 9999px, 57px, 0);
  }
  70% {
    clip: rect(2px, 9999px, 13px, 0);
  }
  75% {
    clip: rect(41px, 9999px, 63px, 0);
  }
  80% {
    clip: rect(42px, 9999px, 27px, 0);
  }
  85% {
    clip: rect(97px, 9999px, 23px, 0);
  }
  90% {
    clip: rect(60px, 9999px, 26px, 0);
  }
  95% {
    clip: rect(14px, 9999px, 78px, 0);
  }
  100% {
    clip: rect(19px, 9999px, 39px, 0);
  }
}
.glitch:before {
  content: attr(data-text);
  position: absolute;
  left: -2px;
  text-shadow: 1px 0 blue;
  top: 0;
  @apply text-a-blue;
  background: black;
  overflow: hidden;
  clip: rect(0, 900px, 0, 0);
  animation: noise-anim-2 5s infinite linear alternate-reverse;
}
</style>
