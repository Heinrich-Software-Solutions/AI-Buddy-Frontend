import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Axios

import axios from "axios";

import VueAxios from "vue-axios";

// Bootstrap

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App);

axios.defaults.headers.common["Authorization"] =
  "Bearer 15291ba39f7823d0579b1cd583c7b98034336f7d1eaea351a6742c667d7a";

app.use(VueAxios, axios);

app.use(router);

app.mount("#app");
