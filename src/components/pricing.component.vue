<template>
  <div class="container py-4 py-xl-5">
    <div class="row mb-5">
      <div class="col-md-8 col-xl-6 text-center mx-auto">
        <h2>How much does it cost?</h2>
        <p class="w-lg-50">
          Just pick one of the plans below and start building your own tools
          with our API.
        </p>
      </div>
    </div>
    <div
      class="row gy-4 gx-md-0 gy-md-0 row-cols-1 row-cols-md-2 row-cols-xl-3 d-md-flex d-xl-flex align-items-md-center"
    >
      <div class="col offset-xl-2">
        <div class="card bg-light border-0">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between">
              <div>
                <h3 class="fw-bold mb-0">Basic Bundle</h3>
                <p>Monthly payment excluding taxes.</p>
                <h4 class="display-6 fw-bold">250 €</h4>
              </div>
            </div>
            <div>
              <ul class="list-unstyled">
                <li class="d-flex mb-2">
                  <span
                    class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"
                    ><svg
                      class="bi bi-check-lg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                      ></path></svg></span
                  ><span>No API calling limits.</span>
                </li>
                <li class="d-flex mb-2">
                  <span
                    class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"
                    ><svg
                      class="bi bi-check-lg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                      ></path></svg></span
                  ><span>Support via e-mail.</span>
                </li>
                <li class="d-flex mb-2">
                  <span
                    class="bs-icon-xs bs-icon-rounded bs-icon-primary-light bs-icon me-2"
                    ><svg
                      class="bi bi-check-lg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                      ></path></svg></span
                  ><span>One high performance AWS instance.</span>
                </li>
              </ul>
            </div>
            <button
              @click="buyPlan(1)"
              class="btn btn-primary d-block w-100 disabled"
            >
              SUBSCRIBE 297,50 € (<small>incl taxes</small>)
            </button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card text-white bg-primary border-0">
          <div class="card-body p-4">
            <div class="d-flex justify-content-between">
              <div>
                <h3 class="fw-bold text-white mb-0">Pro Bundle</h3>
                <p>Monthly payment excluding taxes.</p>
                <h4 class="display-6 fw-bold text-white">380 €</h4>
              </div>
              <div>
                <span
                  class="badge rounded-pill bg-primary text-uppercase bg-white-300"
                  >Best Value</span
                >
              </div>
            </div>
            <div>
              <ul class="list-unstyled">
                <li class="d-flex mb-2">
                  <span
                    class="bs-icon-xs bs-icon-rounded bs-icon-semi-white bs-icon me-2 xs"
                    ><svg
                      class="bi bi-check-lg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                      ></path></svg></span
                  ><span>No API calling limits.</span>
                </li>
                <li class="d-flex mb-2">
                  <span
                    class="bs-icon-xs bs-icon-rounded bs-icon-semi-white bs-icon me-2 xs"
                    ><svg
                      class="bi bi-check-lg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                      ></path></svg></span
                  ><span>Upload your own NLP Models.</span>
                </li>
                <li class="d-flex mb-2">
                  <span
                    class="bs-icon-xs bs-icon-rounded bs-icon-semi-white bs-icon me-2 xs"
                    ><svg
                      class="bi bi-check-lg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                      ></path></svg></span
                  ><span>24/7 support via email and phone.</span>
                </li>
                <li class="d-flex mb-2">
                  <span
                    class="bs-icon-xs bs-icon-rounded bs-icon-semi-white bs-icon me-2 xs"
                    ><svg
                      class="bi bi-check-lg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                      ></path></svg></span
                  ><span>Team function for multiple AI instances</span>
                </li>
                <li class="d-flex mb-2">
                  <span
                    class="bs-icon-xs bs-icon-rounded bs-icon-semi-white bs-icon me-2 xs"
                    ><svg
                      class="bi bi-check-lg"
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"
                      ></path></svg></span
                  ><span>Kubernetes clusters for automatic scaling.</span>
                </li>
              </ul>
            </div>

            <button
              @click="buyPlan(2)"
              class="btn btn-primary d-block w-100 bg-white-300 disabled"
            >
              SUBSCRIBE 452,20 € (<small>incl 19% taxes</small>)
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    buyPlan(id) {
      if (id === 1) {
        alert("YOU SUCCESSFULLY BUYED THE BASIC PLAN");
      }

      if (id === 2) {
        alert("YOU SUCCESSFULLY BUYED THE PRO PLAN");
      }
    },
  },
};
</script>

<style scoped>
.bg-white-300 {
  background: rgba(255, 255, 255, 0.3) !important;
}

.rounded-bottom-left {
  border-radius: 0;
  border-bottom-left-radius: 0.25rem !important;
}

.rounded-bottom-right {
  border-radius: 0;
  border-bottom-right-radius: 0.25rem !important;
}
</style>
