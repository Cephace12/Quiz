<!-- <template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-50"
  >
    <div class="bg-white shadow-md rounded-md p-4 w-full max-w-md">
      <h1 class="text-2xl font-bold text-blue-600 text-center">
        Résultats du Quiz
      </h1>
      <p class="text-lg mt-4 text-center">
        Votre score final est :
        <span class="font-bold text-blue-800"
          >{{ score }}/{{ totalQuestions }}</span
        >
      </p>
      <div class="mt-6 flex justify-center">
        <button
          @click="restartQuiz"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Recommencer le Quiz
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const score = route.query.score ? parseInt(route.query.score, 10) : 0;
const totalQuestions = 5;

const restartQuiz = () => {
  router.push({ name: "quiz" });
};
</script> -->
<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gray-50"
  >
    <div class="bg-white shadow-md rounded-md p-4 w-full max-w-md">
      <h1 class="text-2xl font-bold text-blue-600 text-center">
        Résultats du Quiz
      </h1>
      <p class="text-lg mt-4 text-center">
        Votre score final est :
        <span class="font-bold text-blue-800"
          >{{ score }}/{{ totalQuestions }}</span
        >
      </p>
      <div class="mt-6 flex justify-center">
        <button
          @click="restartQuiz"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Recommencer le Quiz
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useTasksStore } from "@/stores/quiz";

const router = useRouter();
const tasksStore = useTasksStore();

const score = tasksStore.foundTasks;
const totalQuestions = tasksStore.questions.length;

const restartQuiz = () => {
  tasksStore.currentQuestionIndex = 0;
  tasksStore.userAnswers = [];
  router.push({ name: "quiz" });
};
</script>
