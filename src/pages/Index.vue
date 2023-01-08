<template>
  <TemplateDefault
    class="mx-auto max-w-8xl overflow-x-hidden bg-white"
    homepage
  >
    <div class="NoiseBackground !z-10">
      <div class="NoiseBackground__Noise" />
    </div>
    <AtomSection
      tp="large"
      bp="large"
      class="relative flex h-screen max-h-[1280px] items-center justify-center text-center font-mono font-bold"
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
        <a href="https://twitter.com/SurgenceNFT" target="_blank">Twitter</a>
        <a href="https://www.linkedin.com/company/surgencenft/" target="_blank"
          >Linkedin</a
        >

        <a href="https://discord.gg/surgencenft" target="_blank">Discord</a>
      </div>
    </AtomSection>
    <!-- <AtomSection bp="large" tp="large" class="relative">
      <div class="relative z-10 w-full bg-white py-10">dsaads</div>
    </AtomSection> -->
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
          <h1>
            We worked hard to become
            <span
              class="textXLarge my-2 inline-block bg-a-blue p-1 text-a-charcoal"
            >
              THE BEST</span
            >
            WEB3 Talent Hub
          </h1>
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
    <AtomSection tp="large" bp="large" class="" id="about">
      <div class="mx-auto max-w-7xl space-y-24 md:space-y-64">
        <div
          class="flex flex-col items-center space-y-6 md:flex-row md:space-y-0 md:space-x-10 xl:space-x-20"
        >
          <AtomAnimate class="relative text-center md:w-1/3">
            <div
              class="pb-24 font-title text-[15rem] font-extrabold text-white opacity-5 shadow-2xl md:pb-0 md:text-[18rem] 2xl:text-[25rem]"
            >
              01
            </div>
            <div
              class="pin-center absolute whitespace-nowrap text-left font-title text-5xl font-extrabold uppercase md:text-6xl xl:text-7xl"
            >
              Our <br />
              Mission
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
              class="pb-24 font-title text-[15rem] font-extrabold text-white opacity-5 shadow-2xl md:pb-0 md:text-[18rem] 2xl:text-[25rem]"
            >
              02
            </div>
            <div
              class="pin-center absolute whitespace-nowrap text-left font-title text-5xl font-extrabold uppercase md:text-6xl xl:text-7xl"
            >
              Our <br />Vision
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
    <div class="strokeText relative z-50 w-full pb-10 xl:pb-10">
      <marquee behavior="alternate" class="flex w-full opacity-10">
        <span
          class="textXLarge font-title font-bold uppercase"
          v-for="i in 40"
          :key="i"
          >. Builders . Traders . Web3 Advisor . Problem Solvers
        </span>
      </marquee>
    </div>
    <AtomSection
      tp="small"
      bp="small"
      class="relative transition-all duration-1000 ease-in-out"
      id="community"
    >
      <AtomInner class="md:py-32">
        <MoleculeTitle title="The Go-to Web3 Hub For" />

        <div
          class="textXLarge grid w-full gap-24 py-14 text-center font-bold uppercase md:grid-cols-2"
        >
          <div class="relative">
            <transition name="fade">
              <div
                v-if="selectedPopup === 'builders'"
                class="textSmall pin-x-center absolute w-full items-end border border-white bg-a-charcoal text-right text-white"
              >
                <div
                  class="absolute -right-3 -bottom-3 h-full w-full bg-a-pink"
                />

                <div
                  class="textLarge relative z-20 flex w-full items-center justify-between border-b border-white bg-a-charcoal px-4 font-title font-bold"
                >
                  <span class="w-full text-left text-a-blue">Builders</span>
                  <button
                    type="button"
                    class="textLarge border-l border-white py-4 pl-4 hover:text-a-pink"
                    @click="selectedPopup = ''"
                  >
                    X
                  </button>
                </div>
                <div class="relative z-10 bg-a-charcoal p-4 text-left">
                  We are an exclusive Web3 community where members gain access
                  to talent networks, insider information, career opportunities
                  and education. sed?
                </div>
              </div>
            </transition>
            <button
              type="button"
              class="strokeText whitespace-nowrap text-left font-title text-7xl font-extrabold uppercase hover:text-a-blue lg:text-8xl 2xl:text-9xl"
              @click="selectedPopup = 'builders'"
            >
              Builders
            </button>
          </div>
          <div class="relative">
            <transition name="fade">
              <div
                v-if="selectedPopup === 'companies'"
                class="textSmall pin-x-center absolute w-full items-end border border-white bg-a-charcoal text-right text-white"
              >
                <div
                  class="absolute -right-3 -bottom-3 h-full w-full bg-a-pink"
                />

                <div
                  class="textLarge relative z-20 flex w-full items-center justify-between border-b border-white bg-a-charcoal px-4 font-title font-bold"
                >
                  <span class="w-full text-left text-a-blue">Companies</span>
                  <button
                    type="button"
                    class="textLarge border-l border-white py-4 pl-4 hover:text-a-pink"
                    @click="selectedPopup = ''"
                  >
                    X
                  </button>
                </div>
                <div class="relative z-10 bg-a-charcoal p-4 text-left">
                  Are you planning to enter the web3 market? Our team has vetted
                  experience bringing companies and entrepreneurs to market.
                  Let's chat.
                </div>
              </div>
            </transition>
            <button
              type="button"
              class="strokeText whitespace-nowrap text-left font-title text-7xl font-extrabold uppercase hover:text-a-blue lg:text-8xl 2xl:text-9xl"
              @click="selectedPopup = 'companies'"
            >
              Companies
            </button>
          </div>
        </div>
      </AtomInner>
    </AtomSection>
    <div class="strokeText relative z-50 w-full pt-10 xl:pt-10">
      <marquee behavior="alternate" class="flex w-full opacity-10">
        <span
          class="textXLarge font-title font-bold uppercase"
          v-for="i in 40"
          :key="i"
          >. Builders . Traders . Web3 Advisor . Problem Solvers
        </span>
      </marquee>
    </div>
    <AtomSection tp="large" bp="large" class="" id="what-we-do">
      <div class="mx-auto max-w-7xl">
        <div
          v-for="(item, index) in whatWeDo"
          :key="item.title"
          class="mb-16 flex flex-col items-center space-y-6 border-b-2 border-white pb-16 md:flex-row md:space-y-0 md:space-x-10 xl:space-x-20"
        >
          <AtomAnimate
            class="relative items-center text-center md:flex md:w-2/3 md:space-x-10"
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
          <AtomAnimate
            class="textSmall text-center font-sans md:w-1/3 md:text-left"
          >
            {{ item.description }}
          </AtomAnimate>
        </div>

        <div class="flex w-full justify-center py-6">
          <MoleculeButton />
        </div>
      </div>
    </AtomSection>

    <AtomSection
      class="relative overflow-hidden"
      tp="large"
      bp="large"
      id="advisory-services"
    >
      <MoleculeTitle title="Advisory Services" />
      <div
        class="mx-auto flex w-full max-w-8xl flex-col flex-wrap justify-center py-10 md:flex-row"
      >
        <div
          class="flex flex-col items-center justify-center p-8 md:w-1/2 xl:w-1/4 xl:p-16"
          v-for="item in services"
          :key="item.image"
        >
          <div class="relative z-10 flex w-full max-w-xs justify-center">
            <img :src="item.image" alt="" />
          </div>
          <div class="textMedium text-a-white text-center font-title">
            {{ item.title }}
          </div>
        </div>
      </div>
    </AtomSection>
    <AtomSection class="relative text-white" tp="large">
      <AtomInner class="">
        <div class="relative z-10 md:w-2/3">
          <h2 class="textXLarge font-title font-bold">
            <a href="#" class="font-bold text-a-blue underline">APPLY HERE</a>
            TO BECOME A MEMBER OF THE EXCLUSIVE SURGENCE COMMUNITY.
          </h2>
          <p class="textMedium pt-4">
            Entry is FREE! Tell us a little about yourself, and we will handle
            the rest. The team looks forward to seeing you in Discord
          </p>
        </div>
        <div class="-bottom-10 right-0 md:absolute md:w-1/2">
          <img src="/best.png" alt="" class="w-full opacity-50" />
        </div>
      </AtomInner>
    </AtomSection>
  </TemplateDefault>
</template>

<script>
import { VueTyper } from '~/vue-typer';

export default {
  props: {
    homepage: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    VueTyper,
  },
  data() {
    return {
      selectedPopup: '',
      toggle: true,
      isClicked: false,
      mounted: false,
      slogans: ['Builders', 'Traders', 'Web3 Advisor', 'Problem Solvers.'],
      services: [
        {
          image: '/1.svg',
          title: 'Growth-Hacking',
        },
        {
          image: '/2.svg',
          title: 'Collaborations & Partnership',
        },
        {
          image: '/4.svg',
          title: 'Web3 Skilled Labour',
        },
        {
          image: '/3.svg',
          title: 'Marketing Services',
        },
        {
          image: '/5.svg',
          title: 'Industry Connections',
        },
        {
          image: '/6.svg',
          title: 'Development',
        },
        {
          image: '/7.svg',
          title: 'Discord Servers',
        },
      ],
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
          title: 'Advisors',
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
.strokeText:hover {
  -webkit-text-fill-color: #fff;
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
#home {
  clip-path: url(#cache);
}

#red {
  fill: none;
  opacity: 0.15;
  stroke: #ce1b5f;
  stroke-width: 12;
  stroke-miterlimit: 10;
  animation: show 4s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

#blue {
  fill: none;
  opacity: 0.15;
  stroke: #06a1c4;
  stroke-width: 12;
  stroke-miterlimit: 10;
  animation: show 4s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

#light-blue {
  fill: none;
  opacity: 0.15;
  stroke: #06a1c4;
  stroke-width: 6;
  stroke-miterlimit: 10;
  stroke-dasharray: 200;
  stroke-dashoffset: 800;
  animation: draw 4s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes show {
  0% {
    opacity: 0.15;
  }
  50% {
    opacity: 0.2;
  }
  100% {
    opacity: 0.15;
  }
}
</style>
