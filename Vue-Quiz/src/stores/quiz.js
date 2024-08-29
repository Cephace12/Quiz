import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useTasksStore = defineStore("tasks", () => {
  const currentQuestionIndex = ref(0);
  const userAnswers = ref([]);
  const totalQuestions = ref(0);
  const completedTasks = computed(() => currentQuestionIndex.value);
  const foundTasks = computed(
    () => userAnswers.value.filter((answer) => answer.correct).length
  );

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

  const submitAnswer = (answerIndex) => {
    userAnswers.value[currentQuestionIndex.value] = {
      index: answerIndex,
      correct:
        questions.value[currentQuestionIndex.value].correct === answerIndex,
    };
    currentQuestionIndex.value++;
  };

  return {
    currentQuestionIndex, 
    userAnswers,
    totalQuestions,
    completedTasks,
    foundTasks,
    questions,
    submitAnswer,
  };
});
