<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import TextAnimation from './components/TextAnimation.vue'
import CountDown from './components/CountDown.vue'

export default {
  components: {
    CountDown,
    TheWelcome,
    HelloWorld,
    TextAnimation
  },
  data() {
    return {
      end: new Date('2025-06-07T07:30:00'),
      final: true
    }
  },
  methods: {
    finish() {
      console.log('finish')
      this.final = false
    }
  }
}
</script>

<template>
  <header>
    <img
      v-if="final"
      alt="Love heart"
      class="heart"
      src="./assets/heart.svg"
      width="125"
      height="125"
    />

    <div class="wrapper" v-if="final">
      <CountDown :date="end" @onFinish="finish()" />

      <HelloWorld msg="You did it!" msg2="."/>
    </div>
    <!-- <div class="wrapper" v-else> -->
    <TextAnimation v-else />
    <!-- </div> -->
  </header>

  <main v-if="final">
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.heart {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .heart {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
