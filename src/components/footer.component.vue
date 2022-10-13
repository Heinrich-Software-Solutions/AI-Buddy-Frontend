<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <footer class="text-center bg-dark">
    <div class="container text-white py-4 py-lg-5">
      <ul class="list-inline">
        <li class="list-inline-item me-4">
          <RouterLink class="link-light" to="/"> HOME </RouterLink>
        </li>
        <li class="list-inline-item">
          <RouterLink class="link-light" to="/chat"
            >GETTING STARTED
          </RouterLink>
        </li>
      </ul>
      <p class="text-muted mb-0">
        Copyright © {{ year }}
        <a
          class="link-secondary"
          href="https://www.linkedin.com/in/informatiker"
        >
          Marius Heinrich
        </a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
