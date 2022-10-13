<script setup>
import ChatComponent from "../components/chat.component.vue";
import InfoComponent from "../components/info.component.vue";
import TutorialComponent from "../components/tutorial.component.vue";
</script>

<template>
  <div class="container py-5">
    <div class="row gx-5 justify-content-center">
      <div class="col-md-8">
        <ChatComponent />
      </div>

      <div class="col-md-4 mt-5">
        <InfoComponent />
        <TutorialComponent />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
