<script setup>
import LoaderComponent from "./loader.component.vue";
import BotAvatar from "../assets/bot-avatar.svg";
import UserAvatar from "../assets/user-avatar.svg";
</script>

<template>
  <div class="card" id="chat1" style="border-radius: 15px">
    <div
      class="card-header d-flex justify-content-between align-items-center p-3 bg-primary text-white border-bottom-0"
      style="border-top-left-radius: 15px; border-top-right-radius: 15px"
    >
      <LoaderComponent :loading="loading" />
    </div>

    <div class="card-body">
      <div class="chat-container">
        <div
          v-for="message in messages.slice().reverse()"
          v-bind:key="message.id"
        >
          <div v-if="message.is_bot">
            <div class="d-flex flex-row justify-content-start mb-4">
              <img
                :src="BotAvatar"
                alt="avatar-bot"
                style="width: 45px; height: 100%"
              />
              <div
                class="p-3 ms-3"
                style="
                  border-radius: 15px;
                  background-color: rgba(57, 192, 237, 0.2);
                "
              >
                <p class="small mb-0" v-html="message.message"></p>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="d-flex flex-row justify-content-end mb-4">
              <div
                class="p-3 me-3 border"
                style="border-radius: 15px; background-color: #fbfbfb"
              >
                <p class="small mb-0">
                  {{ message.message }}
                </p>
              </div>
              <img
                :src="UserAvatar"
                alt="avatar-user"
                style="width: 45px; height: 100%"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="form-outline">
        <input
          v-model="payload.question"
          class="form-control"
          placeholder="Who are you?"
          type="text"
          required
        />

        <button class="btn btn-primary mt-3 w-100" @click="askAI">
          SEND MESSAGE
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Howl } from "howler";

export default {
  name: "chat-component",
  data: () => {
    return {
      id: Date.now(),
      loading: true,
      payload: {
        question: "",
      },
      endpoints: {
        url: "/api/v1/ai/process-question",
        uptime: "/api/v1/server/uptime",
      },
      audio: {
        connected_played: false,
        disconnected_played: false,
        connected: new Howl({
          src: ["/ai-connected.mp3"],
        }),
        disconnected: new Howl({
          src: ["/ai-disconnected.mp3"],
        }),
      },
      messages: [],
    };
  },
  updated() {
    this.$nextTick(() => this.scrollToEnd());
  },
  methods: {
    askAI() {
      if (!this.payload.question) return;

      this.messages.push({
        id: Date.now(),
        is_bot: false,
        message: this.payload.question,
      });

      setTimeout(() => {
        this.axios.post(this.endpoints.url, this.payload).then(({ data }) => {
          this.messages.push({
            id: Date.now(),
            is_bot: true,
            message: data.answer,
          });

          this.readResponses(data);
        });
      }, 3000);
    },
    readResponses(data) {
      var msg = new SpeechSynthesisUtterance();
      msg.lang = "en";
      msg.pitch = 0;
      msg.text = data.answer;
      window.speechSynthesis.speak(msg);
    },
    checkConnection() {
      return this.axios.get(this.endpoints.uptime).then(() => {
        this.loading = false;
      });
    },
    scrollToEnd() {
      this.$el.scrollTop = this.$el.lastElementChild.offsetTop;
    },
  },
  mounted() {
    setInterval(async () => {
      try {
        await this.checkConnection();

        if (!this.audio.connected_played) {
          this.audio.connected.play();
        }

        this.audio.connected_played = true;
      } catch (error) {
        if (!this.audio.disconnected_played) {
          this.audio.disconnected.play();
        }

        this.audio.disconnected_played = true;
      }
    }, 5000);
  },
};
</script>

<style scoped>
#chat1 .form-outline .form-control ~ .form-notch div {
  pointer-events: none;
  border: 1px solid;
  border-color: #eee;
  box-sizing: border-box;
  background: transparent;
}

#chat1 .form-outline .form-control ~ .form-notch .form-notch-leading {
  left: 0;
  top: 0;
  height: 100%;
  border-right: none;
  border-radius: 0.65rem 0 0 0.65rem;
}

#chat1 .form-outline .form-control ~ .form-notch .form-notch-middle {
  flex: 0 0 auto;
  max-width: calc(100% - 1rem);
  height: 100%;
  border-right: none;
  border-left: none;
}

#chat1 .form-outline .form-control ~ .form-notch .form-notch-trailing {
  flex-grow: 1;
  height: 100%;
  border-left: none;
  border-radius: 0 0.65rem 0.65rem 0;
}

#chat1 .form-outline .form-control:focus ~ .form-notch .form-notch-leading {
  border-top: 0.125rem solid #0d6efd;
  border-bottom: 0.125rem solid #0d6efd;
  border-left: 0.125rem solid #0d6efd;
}

#chat1 .form-outline .form-control:focus ~ .form-notch .form-notch-leading,
#chat1 .form-outline .form-control.active ~ .form-notch .form-notch-leading {
  border-right: none;
  transition: all 0.2s linear;
}

#chat1 .form-outline .form-control:focus ~ .form-notch .form-notch-middle {
  border-bottom: 0.125rem solid;
  border-color: #0d6efd;
}

#chat1 .form-outline .form-control:focus ~ .form-notch .form-notch-middle,
#chat1 .form-outline .form-control.active ~ .form-notch .form-notch-middle {
  border-top: none;
  border-right: none;
  border-left: none;
  transition: all 0.2s linear;
}

#chat1 .form-outline .form-control:focus ~ .form-notch .form-notch-trailing {
  border-top: 0.125rem solid #0d6efd;
  border-bottom: 0.125rem solid #0d6efd;
  border-right: 0.125rem solid #0d6efd;
}

#chat1 .form-outline .form-control:focus ~ .form-notch .form-notch-trailing,
#chat1 .form-outline .form-control.active ~ .form-notch .form-notch-trailing {
  border-left: none;
  transition: all 0.2s linear;
}

#chat1 .form-outline .form-control:focus ~ .form-label {
  color: #0d6efd;
}

#chat1 .form-outline .form-control ~ .form-label {
  color: #bfbfbf;
}

.chat-container {
  height: 450px;
  overflow: auto;
  display: flex;
  flex-direction: column-reverse;
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
