<template>
  <div class="container">
    <div class="row">
      <Transition name="fade">
        <div v-if="loading">
          <div
            class="col d-xl-flex justify-content-xl-center align-items-xl-center"
          >
            <div class="lds-ripple">
              <div></div>
              <div></div>
            </div>
            <h4>CONNECTING...</h4>
          </div>
        </div>
        <div v-else>
          <div
            class="col d-xl-flex justify-content-xl-center align-items-xl-center"
          >
            <h4 @focus="playAudio()">LIVE CHAT</h4>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: Boolean,
  },
};
</script>

<style scoped>
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #fff;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
