<template>
  <div class="text-animation">
    <div>1 Hello, This is block of a text</div>
    <div>2 Hello, This is another block of text</div>
    <div>3 Hello, This is yet another block of text</div>
    <div>4 Hello, This is also a block of text</div>
    <div>5 Hello, This is the last block of text</div>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  body {
    place-items: center;
  }

  #app {
    padding: 0;
  }
}
.text-animation {
  top: 0;
  left: 0;
  position: fixed;
  background: #000;
  width: 100vw;
  height: 100vh;
  font-weight: bold;
  font-size: 36px;
  overflow: hidden;
  z-index: 1;
}

.text-animation > div {
  animation: come2life linear 10s infinite;
  transform-origin: center center;
  opacity: 0;
  width: calc(100vw * 0.4);
  height: calc(100vh * 0.4);
  position: absolute;
  backface-visibility: hidden;
}

.text-animation > div:nth-child(1) {
  left: calc(100vw * 0.2);
  top: calc(100vw * 0.2);
  animation-delay: 0s;
}

.text-animation > div:nth-child(2) {
  left: calc(100vw * 0.5);
  top: calc(100vw * 0.2);
  animation-delay: 4s;
}

.text-animation > div:nth-child(3) {
  left: 50vw;
  top: 50vh;
  animation-delay: 8s;
}

.text-animation > div:nth-child(4) {
  left: 30vw;
  top: 60vh;
  animation-delay: 6s;
}

.text-animation > div:nth-child(5) {
  left: 60vw;
  top: 60vh;
  animation-delay: 2s;
  color: blue;
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

@keyframes ramdonLeft {
  from {
    left: 5vw;
  }
  to {
    left: 60vw;
  }
}
</style>
