<template>
  <div class="spinner">
    <div class="spin1"></div>
    <div class="spin2"></div>
    <div class="spin3"></div>
    <div class="spin4"></div>
    <div class="spin5"></div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style scoped>
    .spinner {
      display: flex;
      justify-content: center;
      height: 400px;
      align-items: center;
    }
    .spinner div {
      width: 10px;
      height: 30px;
      background: var(--gcolor);
      margin: 0 2px;
      border-radius: 6%;
      box-shadow: 0 0 2px rgb(238, 125, 125);
      animation: dura 2s ease-out infinite;
    }
    .spinner div:nth-child(2) {
      animation-delay: .3s;
      -webkit-animation-delay: .3s;
      -moz-animation-delay: .3s;
    }
    .spinner div:nth-child(3) {
      animation-delay: .5s;
      -webkit-animation-delay: .5s;
      -moz-animation-delay: .5s;
    }
    .spinner div:nth-child(4) {
      animation-delay: .7s;
      -webkit-animation-delay: .7s;
      -moz-animation-delay: .7s;
    }
    .spinner div:nth-child(5) {
      animation-delay: 1s;
      -webkit-animation-delay: 1s;
      -moz-animation-delay: 1s;
    }
    @keyframes dura {
      30% {
        height: 60px;
      }
      60% {
        height: 30px;
      }
    }
</style>
