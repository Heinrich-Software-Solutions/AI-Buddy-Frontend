<script setup>
import Hero from "../components/hero.component.vue";
import Features from "../components/features.component.vue";
import Jumbotron from "../components/jumbotron.component.vue";
</script>

<template>
  <div>
    <Hero />
    <Features />
    <div class="divider"></div>
    <Jumbotron />
    <div class="divider"></div>
  </div>
</template>

<style scoped>
.divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.1);
  border: solid rgba(0, 0, 0, 0.15);
  border-width: 1px 0;
  box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
    inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
}
</style>
