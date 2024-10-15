<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import TextAnimation from './components/TextAnimation.vue'
import CountDown from './components/CountDown.vue'
import TheHistory from './components/TheHistory.vue'

export default {
  components: {
    CountDown,
    TheWelcome,
    HelloWorld,
    TextAnimation,
    TheHistory
  },
  data() {
    return {
      end: new Date('2025-06-07T07:30:00'),
      final: true,
      showModal: false
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
      <CountDown :date="end" @onFinish="finish()"></CountDown>
      <HelloWorld msg="Love you!" />
    </div>
    <!-- <div class="wrapper" v-else> -->
    <TextAnimation v-else />
    <div />
  </header>

  <main v-if="final">
    <TheWelcome />
  </main>

  <div class="app">
    <div class="content">
      <img
        src="@/assets/time-door-icon.png"
        class="time-door-icon"
        alt="Time Door Icon"
        @click="showModal = true"
      />
    </div>
    <TheHistory :visible="showModal" @close="showModal = false" />
  </div>
</template>

<style scoped>
@keyframes heartbeat {
  0%,
  20%,
  100% {
    transform: scale(1);
  }
  10%,
  30% {
    transform: scale(1.3);
  }
  40% {
    transform: scale(1.15);
  }
  70% {
    transform: scale(1.2);
  }
  80% {
    transform: scale(1.1);
  }
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  text-align: center;
}

.heart {
  display: block;
  margin: 0 auto 2rem;
  animation: heartbeat 1.5s infinite;
}

.wrapper {
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

@media (min-width: 1024px) {
  header {
    flex-direction: row;
    padding-right: calc(var(--section-gap) / 2);
  }

  .heart {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
}

.app {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.content {
  position: relative;
  min-height: 100vh; /* Para asegurar que ocupa toda la pantalla */
}

.time-door-icon {
  width: 50px; /* Ajusta el tamaño según tus necesidades */
  height: 50px; /* Ajusta el tamaño según tus necesidades */
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  cursor: pointer;
}

@media (max-width: 768px) {
  .time-door-icon {
    position: static;
    display: block;
    margin: 20px auto;
  }
}
</style>
