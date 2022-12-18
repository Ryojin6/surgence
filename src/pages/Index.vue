<template>
  <TemplateDefault class="overflow-x-hidden bg-white">
    <div class="NoiseBackground">
      <div class="NoiseBackground__Noise" />
    </div>
    <AtomSection
      class="relative flex h-screen items-center justify-center text-center font-mono font-bold"
      full-width
    >
      <div class="w-full">
        <AtomIconBanner />

        <div class="absolute top-1/2 left-1/2 mt-32 -translate-x-1/2">
          <AtomAnimate>
            <vue-typer
              v-if="mounted"
              class="font-title text-3xl text-a-blue sm:text-4xl md:text-5xl 2xl:text-6xl"
              caret-animation="smooth"
              :text="slogans"
              :repeat="1000"
              erase-style="clear"
            />
          </AtomAnimate>
        </div>
      </div>
      <div
        class="pin-x-center absolute bottom-4 hidden space-x-24 scrolled:opacity-0 md:flex"
      >
        <a href="">Twitter</a>
        <a href="">Linkedin</a>
        <a href="">Instagram</a>
        <a href="">Discord</a>
      </div>
    </AtomSection>
    <AtomSection bp="large" tp="large" class="relative">
      <div class="relative mx-auto max-w-5xl">
        <div class="absolute top-0 left-0 w-96 text-a-pink opacity-5">
          <AtomAnimate>
            <AtomIconBigArrow />
          </AtomAnimate>
        </div>
        <AtomAnimate
          class="textLarge font-sans text-3xl font-bold uppercase sm:text-4xl md:text-6xl 2xl:text-7xl"
        >
          We worked hard to become
          <span
            class="textXLarge my-2 inline-block bg-a-blue p-1 text-a-charcoal"
          >
            THE BEST</span
          >
          WEB3 Talent Hub
        </AtomAnimate>

        <div
          class="absolute bottom-0 right-0 w-96 rotate-180 text-a-blue opacity-5"
        >
          <AtomAnimate>
            <AtomIconBigArrow />
          </AtomAnimate>
        </div>
      </div>
    </AtomSection>
    <AtomSection tp="large" bp="large" class="">
      <div class="mx-auto max-w-7xl space-y-64">
        <div
          class="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-10 xl:space-x-20"
        >
          <AtomAnimate class="relative text-center md:w-1/3">
            <div
              class="font-title text-[15rem] font-extrabold text-white opacity-5 shadow-2xl md:text-[18rem] 2xl:text-[25rem]"
            >
              01
            </div>
            <div
              class="pin-center absolute whitespace-nowrap text-left font-title text-5xl font-extrabold uppercase md:text-6xl xl:text-7xl"
            >
              Who <br />
              We Are
            </div>
          </AtomAnimate>
          <AtomAnimate class="textMedium font-sans md:w-2/3">
            To bring the value of Web3 to an exclusive high-performing
            community. Blockchain enables the alignment of incentives. Join us
            and share the upside of Surgence becoming a leading Web3 entity.
          </AtomAnimate>
        </div>
        <div
          class="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0 md:space-x-10 xl:space-x-20"
        >
          <AtomAnimate class="relative text-center md:w-1/3">
            <div
              class="font-title text-[15rem] font-extrabold text-white opacity-5 shadow-2xl md:text-[18rem] 2xl:text-[25rem]"
            >
              02
            </div>
            <div
              class="pin-center absolute whitespace-nowrap text-left font-title text-5xl font-extrabold uppercase md:text-6xl xl:text-7xl"
            >
              What <br />
              We Do
            </div>
          </AtomAnimate>
          <AtomAnimate class="textMedium md:w-2/3">
            We are committed to ensuring the Web3 revolution happens the right
            way. Our mission is to provide members with unparalleled
            opportunities to accelerate their journey. Surgence leads
            individuals and companies towards success.
          </AtomAnimate>
        </div>
        <div class="flex w-full justify-center py-6">
          <MoleculeButton />
        </div>
      </div>
    </AtomSection>
    <div class="w-full pb-10 xl:pb-10">
      <marquee
        behavior="alternate"
        direction="right"
        class="flex w-full opacity-10"
      >
        <span
          class="strokeText font-title text-8xl font-bold uppercase"
          v-for="i in 40"
          :key="i"
          >. Builders . Traders . Web3 Advisor . Problem Solvers
        </span>
      </marquee>
    </div>
    <AtomSection tp="large" bp="large" class="">
      <div class="mx-auto max-w-7xl">
        <div
          v-for="(item, index) in whatWeDo"
          :key="item.title"
          class="mb-16 flex flex-col items-center space-y-6 border-b-2 border-white pb-16 md:flex-row md:space-y-0 md:space-x-10 xl:space-x-20"
        >
          <AtomAnimate
            class="relative flex items-center space-x-10 text-center md:w-2/3"
          >
            <div class="font-title font-extrabold text-a-blue shadow-2xl">
              / {{ index + 1 }}
            </div>
            <div
              class="whitespace-nowrap text-left font-title text-7xl font-extrabold uppercase lg:text-8xl 2xl:text-9xl"
            >
              {{ item.title }}
            </div>
          </AtomAnimate>
          <AtomAnimate class="textSmall font-sans md:w-1/3">
            {{ item.description }}
          </AtomAnimate>
        </div>

        <div class="flex w-full justify-center py-6">
          <MoleculeButton />
        </div>
      </div>
    </AtomSection>
  </TemplateDefault>
</template>

<script>
import { VueTyper } from '~/vue-typer';

export default {
  components: {
    VueTyper,
  },
  data() {
    return {
      toggle: true,
      isClicked: false,
      mounted: false,
      slogans: ['Builders', 'Traders', 'Web3 Advisor', 'Problem Solvers.'],
      whatWeDo: [
        {
          title: 'Job Seeker',
          description: `Surgence is the industry leader in securing job placements. We use our
        deep network and advisory business to directly place community members
        in dream roles.`,
        },
        {
          title: 'LEARNERS',
          description: `Our training takes you from Web3 noob to expert. We provide exclusive
        programs run by industry leaders. Our core focus areas are: WEB3 roles,
        Trading, Entrepreneurship`,
        },
        {
          title: 'BUILDERS',
          description: `Surgence helps launch your project by providing curated connections
          , talent, and industry-specific guidance.`,
        },
        {
          title: 'NETWORKERS',
          description: `Web3 lives and dies by network effects.
Surgence members get instant access to deep talent networks orientated around a shared vision.`,
        },
        {
          title: 'Job Seeker',
          description: `Surgence is backed by a functional business providing industry-specific
           advisory services to brands, companies and
projects. Click here to find out more.`,
        },
        {
          title: 'TRADERS',
          description: `Surgence runs daily trading sessions, gives members access to trading tools, 
          and allowlist giveaways to the best projects in web3`,
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.waitLittleBit = false;
    }, 3000);
    this.mounted = true;
  },
};
</script>

<style>
span.char.custom.typed {
  @apply !font-title !font-black uppercase !text-white;
}
.strokeText {
  -webkit-text-fill-color: #1f2223; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: white;
}
.breathIn {
  box-shadow: 0px 1px 1px #f00;
  animation: breathing 3s linear infinite;
}
@keyframes breathing {
  0% {
    box-shadow: 0px 1px 1px #f00;
  }
  50% {
    box-shadow: 0px 1px 25px #f00;
  }
}
</style>
