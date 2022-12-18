<template>
  <AtomSection
    v-aos
    tp="large"
    bp="large"
    class="relative bg-a-pink font-mono font-bold text-a-navy"
  >
    <AtomInner>
      <AtomAnimate class="mb-16">
        <h2 class="textXLarge pb-16 text-center !font-mono2">FAQ</h2>
        <MoleculeAccordionCard
          v-for="item in faq"
          :key="item.id"
          :title="item.title"
          :description="item.description"
        />
      </AtomAnimate>
    </AtomInner>
  </AtomSection>
</template>

<script>
export default {
  data() {
    return {
      faq: [
        {
          title: 'How Many MochiMo’s Will There Be?',
          description: `4444 Mochi’s entering the ethereum blockchain!`,
        },
        {
          title: 'When Is the Mint for MochiMo?',
          description: `Towards the end of October!`,
        },
        {
          title: 'How Much Will My MochiMo Be?',
          description: `222 VIP Free Mochi’s & 4222 Mochi’s for .01Ξ`,
        },
        {
          title: 'What Smart Contract Are The Mochi’s Being Minted On?',
          description: `We are using the ERC-721 smart-contract for everyone 
          in our amazing community to get a Mochi of their own!`,
        },
      ],
    };
  },
};
</script>
