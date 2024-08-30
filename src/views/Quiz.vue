<template>
  <div class="grid place-items-center w-full p-2 bg-gray-50 h-screen">
    <div
      class="justify-items-center md:w-10/12 sm:w-full bg-blue-50 shadow-md rounded-md p-4"
    >
      <CompletedTasks />
      <FoundTasks />
      <div class="grid justify-between grid-cols-1 md:grid-cols-2">
        <div class="mx-auto w-full text-center pt-16">
          <h2
            class="text-blue-500 text-2xl font-weight-bold font-weight-bolder"
          >
            Quiz App Live
          </h2>
        </div>
        <div class="mx-auto">
          <img
            src="/src/images/undraw_faq_re_31cw.svg"
            width="200px"
            height="200px"
          />
        </div>
      </div>
      <div class="container space-y-3 p-2">
        <p class="italic text-blue-700 text-md p-2 text-center">
          "Veuillez cocher une réponse avant de continuer"
        </p>
        <hr class="mt-2" />
        <div class="m-20">
          <h2
            class="text-blue-800 rounded-md bg-blue-50 font-medium text-xl p-2"
          >
            {{ questions[currentQuestionIndex].text }}
          </h2>
          <div
            v-for="(answer, index) in questions[currentQuestionIndex].answers"
            :key="index"
            class="answer"
          >
            <label>
              <input
                type="radio"
                :name="currentQuestionIndex"
                :value="index"
                v-model="selectedAnswer"
              />
              {{ answer }}
            </label>
          </div>
        </div>
        <button
          @click="submit"
          class="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Continuer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import CompletedTasks from "@/components/icons/CompletedTasks.vue";
import FoundTasks from "@/components/icons/FoundTasks.vue";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useTasksStore } from "@/stores/quiz";

const router = useRouter();
const tasksStore = useTasksStore();

const selectedAnswer = ref(null);
const currentQuestionIndex = computed(() => tasksStore.currentQuestionIndex);
const questions = computed(() => tasksStore.questions);

const submit = () => {
  if (selectedAnswer.value === null) {
    alert("Veuillez sélectionner une réponse avant de continuer.");
    return;
  }
  tasksStore.submitAnswer(selectedAnswer.value);
  selectedAnswer.value = null;

  if (tasksStore.currentQuestionIndex >= tasksStore.questions.length) {
    router.push({ name: "Result", query: { score: tasksStore.foundTasks } });
  }
};
</script>

<!-- <template>
  <div class="grid place-items-center w-full p-2 bg-gray-50 h-screen">
    <div
      class="justify-items-center md:w-10/12 sm:w-full bg-blue-50 shadow-md rounded-md p-4"
    >
      <div class="grid justify-between grid-cols-1 md:grid-cols-2">
        <div class="mx-auto w-full text-center pt-16">
          <h2
            class="text-blue-500 text-2xl font-weight-bold font-weight-bolder"
          >
            Quiz App Live
          </h2>
        </div>
        <div class="mx-auto">
          <img
            src="/src/images/undraw_faq_re_31cw.svg"
            width="200px"
            height="200px"
          />
        </div>
      </div>
      <div class="container space-y-3 p-2">
        <p class="italic text-blue-700 text-md p-2 text-center">
          "Veuillez cocher une réponse avant de continuer"
        </p>
        <hr class="mt-2" />
        <div class="m-20">
          <h2
            class="text-blue-800 rounded-md bg-blue-50 font-medium text-xl p-2"
          >
            {{ questions[currentQuestionIndex].text }}
          </h2>
          <div
            v-for="(answer, index) in questions[currentQuestionIndex].answers"
            :key="index"
            class="answer"
          >
            <label>
              <input
                type="radio"
                :name="currentQuestionIndex"
                :value="index"
                v-model="userAnswers[currentQuestionIndex]"
              />
              {{ answer }}
            </label>
          </div>
        </div>
        <button
          @click="submitAnswer"
          class="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Continuer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const questions = ref([
  {
    text: "Quelle est la capitale de la France?",
    answers: ["Paris", "Londres", "Cotonou", "Berlin"],
    correct: 0,
  },
  {
    text: "Quelle est la plus grande planète du système solaire ?",
    answers: ["Terre", "Jupiter", "Saturne", "Mars"],
    correct: 1,
  },
  {
    text: 'Quel est l\'élément chimique avec le symbole "O" ?',
    answers: ["Or", "Oxygène", "Osmium", "Oganesson"],
    correct: 1,
  },
  {
    text: "Quelle est la monnaie officielle des États-Unis ?",
    answers: ["Dollar", "Euro", "Yen", "Livre"],
    correct: 0,
  },
  {
    text: "Quel est le plus grand océan de la Terre ?",
    answers: [
      "Océan Atlantique",
      "Océan Pacifique",
      "Océan Indien",
      "Océan Arctique",
    ],
    correct: 1,
  },
]);

const currentQuestionIndex = ref(0);
const userAnswers = ref(Array(questions.value.length).fill(null));
const router = useRouter();

const submitAnswer = () => {
  if (userAnswers.value[currentQuestionIndex.value] === null) {
    alert("Veuillez sélectionner une réponse avant de continuer.");
    return;
  }
  if (currentQuestionIndex.value < questions.value.length - 1) {
    currentQuestionIndex.value++;
  } else {
    let score = 0;
    questions.value.forEach((question, index) => {
      if (userAnswers.value[index] === question.correct) {
        score++;
      }
    });
    router.push({ name: "Result", query: { score } });
  }
};
</script> -->
<!-- {
    text: 'Qui a écrit "Les Misérables" ?',
    answers: ["Victor Hugo", "Charles Dickens", "Mark Twain", "Jules Verne"],
    correct: 0,
  },
  {
    text: "Quelle est la planète la plus proche du soleil ?",
    answers: ["Terre", "Mars", "Mercure", "Vénus"],
    correct: 2,
  },
  {
    text: "Quelle est la langue officielle du Brésil ?",
    answers: ["Espagnol", "Portugais", "Français", "Anglais"],
    correct: 1,
  },
  {
    text: "Quel est le symbole chimique de l'eau ?",
    answers: ["H2O", "O2", "CO2", "NaCl"],
    correct: 0,
  },
  {
    text: 'Qui a peint la "Joconde" ?',
    answers: [
      "Vincent van Gogh",
      "Claude Monet",
      "Pablo Picasso",
      "Leonardo da Vinci",
    ],
    correct: 3,
  }, -->
