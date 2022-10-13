<script setup>
import HeroImage from "../assets/banner-landing.jpg";
</script>

<template>
  <div class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" :src="HeroImage" alt="First slide" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.fit-cover {
  object-fit: cover;
}
</style>
