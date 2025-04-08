<script>
import HeartAnimation from './HeartAnimation.vue'

export default {
  components: {
    HeartAnimation
  }
}
</script>

<template>
  <HeartAnimation />

  <div class="text-animation">
    <div>Mereces el mejor cumpleaños por todo el amor y alegría que traes a mi vida.</div>
    <div>Tu bondad y dulzura merecen ser celebradas con un día perfecto.</div>
    <div>Eres mi inspiración diaria y mereces un cumpleaños lleno de felicidad.</div>
    <div>Tu sonrisa ilumina mis días, por eso mereces el mejor cumpleaños.</div>
    <div>Porque tu amor me hace feliz, mereces un cumpleaños inolvidable.</div>
    <div>Hoy celebro tu existencia, porque contigo todo es más bonito.</div>
    <div>Mereces mil abrazos, risas sinceras y sueños cumplidos.</div>
    <div>Que cada instante de este día refleje lo especial que eres.</div>
    <div>El mundo es más dulce desde que estás en mi vida, y eso merece celebrarse.</div>
  </div>
</template>

<style scoped>
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.text-animation {
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  font-weight: bold;
  font-size: 2vw;
  align-items: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
}

.text-animation > div {
  margin: 0.5em;
}

.text-animation > div {
  animation: come2life linear 10s infinite;
  transform-origin: center center;
  opacity: 0;
  width: 80vw;
  text-align: center;
  backface-visibility: hidden;
}

.text-animation > div:nth-child(1) {
  animation-delay: 0s;
}

.text-animation > div:nth-child(2) {
  animation-delay: 2s;
}

.text-animation > div:nth-child(3) {
  animation-delay: 3s;
}

.text-animation > div:nth-child(4) {
  animation-delay: 5s;
}

.text-animation > div:nth-child(5) {
  animation-delay: 7s;
}

.text-animation > div:nth-child(6) {
  animation-delay: 11s;
}

.text-animation > div:nth-child(7) {
  animation-delay: 13s;
}
.text-animation > div:nth-child(8) {
  animation-delay: 17s;
}
.text-animation > div:nth-child(9) {
  animation-delay: 19s;
}
.text-animation > div:nth-child(10) {
  animation-delay: 23s;
}

@keyframes come2life {
  0% {
    transform: scale3d(0, 0, 1) rotate(0.02deg);
    opacity: 0;
    filter: blur(10px);
  }
  25% {
    transform: scale3d(1, 1, 1) rotate(0.02deg);
    opacity: 1;
    filter: blur(0px);
  }
  40% {
    opacity: 1;
    filter: blur(0px);
  }
  80% {
    opacity: 0;
  }
  100% {
    transform: scale3d(4, 4, 1) rotate(0.02deg);
    filter: blur(10px);
  }
}
</style>
