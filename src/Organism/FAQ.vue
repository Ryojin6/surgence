<template>
  <AtomAnimate class="grid w-full grid-cols-2 gap-10">
    <MoleculeAccordionCard
      class="w-full"
      v-for="item in faq"
      :key="item.id"
      :title="item.title"
      :description="item.description"
    />
  </AtomAnimate>
</template>

<script>
export default {
  data() {
    return {
      faq: [
        {
          title: 'SOCIAL MEDIA MARKETING',
          description: `Surgence can manage your social media 
          accounts to post tweets, interact with the community, 
          and perform inbound/outbound messaging. We will help you
           grow your audience and communicate your value proposition.`,
        },
        {
          title: 'FRONT END BACK END DEVELOPMENT',
          description: `Thousands of people will be visiting your website at once. 
          Your website should be beautiful, secure, and resilient. Surgence will build 
          dynamic and robust websites to help vou stand out and efficient minting contracts.`,
        },
        {
          title: 'COLLABORATION PARTNERSHIPS',
          description: `Surgence will leverage our existing network of partners to helo vou 
          secure collaborations and partnershios with established NFT communities from dav 1. 
          We will put vour proiect in front of 100,000s of investors.`,
        },
        {
          title: 'DISCORD DEVELOPMENT',
          description: `Surgence can help to build your ideal discord community platform 
          with bot configurations, utilities, and seamless user journeys that align with the
           brand.`,
        },
        {
          title: 'COMMUNITY MANAGEMENT',
          description: `Surgence will mobilise a team of community managers and moderators to help 
          run our Discord flawlessly. The key objective would be focused on community growth and 
          engagement while ensuring a quality communitv experience to increase conversions.`,
        },
        {
          title: 'STRATEGIC GUIDANCE',
          description: `Our community consists of marketers performing multiple sell-outs, web3 
          leaders, and reputable advisors. Contact us for elite advice and strategic guidance 
          that can set your project on the path to success..`,
        },
      ],
    };
  },
};
</script>
