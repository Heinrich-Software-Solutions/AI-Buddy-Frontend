<script setup>
import { RouterLink } from "vue-router";
import ApiImage from "../assets/api-code.png";
</script>

<template>
  <div class="container my-5">
    <div
      class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg"
    >
      <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
        <h1 class="display-4 fw-bold lh-1">
          Powerful API with special functions
        </h1>
        <p class="lead">
          With our artificial intelligence it is possible to use different data
          models to create interactive chats and a great customer experience.
        </p>
        <div
          class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3"
        >
          <RouterLink
            to="/chat"
            class="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
            >Realtime Demonstration
          </RouterLink>

          <RouterLink
            to="/pricing"
            class="btn btn-outline-secondary btn-lg px-4"
            >Pricing
          </RouterLink>
        </div>
      </div>
      <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
        <img class="rounded-lg-3" :src="ApiImage" alt="" width="720" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

@media (min-width: 992px) {
  .rounded-lg-3 {
    border-radius: 0.3rem;
  }
}
</style>
