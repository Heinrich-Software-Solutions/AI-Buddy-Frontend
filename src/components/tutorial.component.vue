<template>
  <div class="accordion accordion-flush" id="accordionFlushExample">
    <h4>Tutorial</h4>
    <hr />

    <div class="accordion" id="accordionExample">
      <div v-for="tutorial in tutorials" v-bind:key="tutorial.id">
        <div class="accordion-item">
          <h2 class="accordion-header" :id="`heading-${tutorial.id}`">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#collapse-${tutorial.id}`"
              aria-expanded="true"
              :aria-controls="`collapse-${tutorial.id}`"
            >
              {{ tutorial.title }} #{{ tutorial.id }}
            </button>
          </h2>
          <div
            :id="`collapse-${tutorial.id}`"
            class="accordion-collapse collapse show"
            :aria-labelledby="`heading-${tutorial.id}`"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {{ tutorial.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tutorials: [
        {
          id: 1,
          title: "TOPICS",
          description:
            "The AI knews things about Science, Computers, Food, Movies, Money, Gossip etc.",
        },
        {
          id: 2,
          title: "QUESTIONS",
          description:
            "You can ask question like: (have you seen blade runner?), (what is chemistry?), (what is bioinformatics?)",
        },
        {
          id: 3,
          title: "DISCONNECTED",
          description:
            "For each session, a new instance is created on our server. So after a certain time it can happen that the temporary instance is shut down after inactivity to save resources. If this happens, it is enough to reload the page.",
        },
        {
          id: 4,
          title: "AI DONT KNOW",
          description:
            "It may happen that some of your questions are not yet available in our training data. This of course leads to the fact that our neural network does not know how to react to your question.",
        },
      ],
    };
  },
};
</script>
