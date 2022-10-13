<script setup>
import Navbar from "./components/navbar.component.vue";

import Footer from "./components/footer.component.vue";
</script>

<template>
  <div>
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>

<style scoped></style>
