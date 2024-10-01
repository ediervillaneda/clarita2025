<script lang="ts">
export default {
  name: 'CountDown',
  props: {
    date: null
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      event: this.date,
      finish: false
    }
  },
  mounted() {
    const _self = this
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000)
      if (!this.finish && this.calculatedDate - this.now <= 0) {
        _self.finish = true
        _self.$emit('onFinish')
      }
    }, 1000)
  },
  methods: {
    pad(value: number) {
      return value.toString().padStart(2, '0')
    }
  },
  computed: {
    secondCount() {
      return this.calculatedDate - this.now
    },
    calculatedDate() {
      return Math.trunc(Date.parse(this.event) / 1000)
    },
    seconds() {
      if (this.secondCount < 0) return '00'
      return this.pad(this.secondCount % 60)
    },
    minutes() {
      if (this.secondCount < 0) return "00"
      return this.pad(Math.trunc(this.secondCount / 60) % 60)
    },
    hours() {
      if (this.secondCount < 0) return "00"
      return this.pad(Math.trunc(this.secondCount / 60 / 60) % 24)
    },
    days() {
      if (this.secondCount < 0) return 0
      return Math.trunc(this.secondCount / 60 / 60 / 24)
    }
  }
}
</script>

<template>
  <div class="countdown">
    <div v-if="days" class="countdown__block">
      <div class="countdown__digit">{{ days }}</div>
      <div class="countdown__text">Días</div>
    </div>
    <div class="countdown__block">
      <div class="countdown__digit">{{ hours }}</div>
      <div class="countdown__text">Hrs</div>
    </div>
    <div class="countdown__block">
      <div class="countdown__digit">{{ minutes }}</div>
      <div class="countdown__text">Min</div>
    </div>
    <div class="countdown__block">
      <div class="countdown__digit">{{ seconds }}</div>
      <div class="countdown__text">Seg</div>
    </div>
  </div>
</template>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Hand:wght@400..700&family=Foldit:wght@100..900&family=Major+Mono+Display&display=swap');

.countdown {
  font-family: 'Major Mono Display', monospace;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  display: flex;
  justify-content: center;
}
.countdown__block {
  text-align: center;
  padding: 0px 15px;
  position: relative;
}
.countdown__block:first-child {
  padding-left: 0;
}
.countdown__block:first-child .countdown__digit:before {
  display: none;
}
.countdown__block:last-child {
  padding-right: 0;
}
.countdown__text {
  display: inline-block;
  margin-bottom: 5px;
}
.countdown__digit {
  font-size: 300%;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 5px;
  min-width: 66.609px;
}
.countdown__digit:before {
  content: ':';
  position: absolute;
  left: -15px;
}
</style>
