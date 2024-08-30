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
      text: "Quelle est la plus haute montagne du monde ?",
      answers: ["Mont Everest", "Mont Kilimandjaro", "Mont Blanc", "Mont Fuji"],
      correct: 0,
    },
    {
      text: "Qui a écrit 'Les Misérables' ?",
      answers: ["Victor Hugo", "Gustave Flaubert", "Émile Zola", "Jules Verne"],
      correct: 0,
    },
    {
      text: "Quelle est la capitale du Japon ?",
      answers: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
      correct: 0,
    },
    {
      text: "Quel est l'animal le plus rapide du monde ?",
      answers: ["Guépard", "Faucon pèlerin", "Antilope", "Lièvre"],
      correct: 1,
    },
    {
      text: "Quel est le symbole chimique de l'or ?",
      answers: ["Au", "Ag", "Fe", "Cu"],
      correct: 0,
    },
    {
      text: "Quel est le plus grand désert du monde ?",
      answers: ["Sahara", "Gobi", "Kalahari", "Arctique"],
      correct: 0,
    },
    {
      text: "Quel est l'élément chimique avec le symbole 'H' ?",
      answers: ["Hydrogène", "Hélium", "Hafnium", "Holmium"],
      correct: 0,
    },
    {
      text: "Quel est le plus grand pays du monde par superficie ?",
      answers: ["Russie", "Canada", "Chine", "États-Unis"],
      correct: 0,
    },
    {
      text: "Quel est le plus petit pays du monde ?",
      answers: ["Vatican", "Monaco", "Nauru", "Liechtenstein"],
      correct: 0,
    },
    {
      text: "Qui a peint 'La Joconde' ?",
      answers: [
        "Leonard de Vinci",
        "Vincent van Gogh",
        "Claude Monet",
        "Pablo Picasso",
      ],
      correct: 0,
    },
    {
      text: "Quel est le plus grand mammifère marin ?",
      answers: ["Baleine bleue", "Requin blanc", "Orque", "Narval"],
      correct: 0,
    },
    {
      text: "Quel est le plus long fleuve du monde ?",
      answers: ["Nil", "Amazone", "Yangtsé", "Mississippi"],
      correct: 1,
    },
    {
      text: "Quel est le gaz le plus abondant dans l'atmosphère terrestre ?",
      answers: ["Azote", "Oxygène", "Dioxyde de carbone", "Hélium"],
      correct: 0,
    },
    {
      text: "Qui a découvert la théorie de la relativité ?",
      answers: ["Albert Einstein", "Isaac Newton", "Galilée", "Nikola Tesla"],
      correct: 0,
    },
    {
      text: "Quel est le plus grand continent en termes de superficie ?",
      answers: ["Asie", "Afrique", "Amérique du Nord", "Europe"],
      correct: 0,
    },
    {
      text: "Quel est le pays avec la plus grande population au monde ?",
      answers: ["Chine", "Inde", "États-Unis", "Indonésie"],
      correct: 0,
    },
    {
      text: "Quel est le plus grand lac d'eau douce au monde ?",
      answers: [
        "Lac Baïkal",
        "Lac Supérieur",
        "Lac Victoria",
        "Lac Tanganyika",
      ],
      correct: 1,
    },
    {
      text: "Qui est l'auteur de 'Hamlet' ?",
      answers: [
        "William Shakespeare",
        "Charles Dickens",
        "Jane Austen",
        "Mark Twain",
      ],
      correct: 0,
    },
    {
      text: "Quel est le plus petit os du corps humain ?",
      answers: ["Étrier", "Tibia", "Radius", "Cubitus"],
      correct: 0,
    },
    {
      text: "Quel est le plus grand organe du corps humain ?",
      answers: ["Peau", "Cœur", "Poumons", "Foie"],
      correct: 0,
    },
    {
      text: "Quel est le symbole chimique du fer ?",
      answers: ["Fe", "F", "Ir", "Fr"],
      correct: 0,
    },
    {
      text: "Quel est le plus grand volcan actif du monde ?",
      answers: ["Mauna Loa", "Etna", "Kilimandjaro", "Vésuve"],
      correct: 0,
    },
    {
      text: "Quel est le plus grand pays d'Amérique du Sud par superficie ?",
      answers: ["Brésil", "Argentine", "Colombie", "Pérou"],
      correct: 0,
    },
    {
      text: "Quel est le nom du premier homme à marcher sur la Lune ?",
      answers: [
        "Neil Armstrong",
        "Buzz Aldrin",
        "Yuri Gagarin",
        "Michael Collins",
      ],
      correct: 0,
    },
    {
      text: "Quel est le plus grand lac salé du monde ?",
      answers: ["Mer Caspienne", "Mer Morte", "Grand Lac Salé", "Lac d'Aral"],
      correct: 0,
    },
    {
      text: "Quel est le plus long mur du monde ?",
      answers: [
        "Grande Muraille de Chine",
        "Mur d'Hadrien",
        "Mur de Berlin",
        "Mur des Lamentations",
      ],
      correct: 0,
    },
    {
      text: "Quel est le pays avec le plus grand nombre de langues parlées ?",
      answers: ["Papouasie-Nouvelle-Guinée", "Inde", "Nigeria", "Indonésie"],
      correct: 0,
    },
    {
      text: "Quel est le plus grand désert chaud du monde ?",
      answers: [
        "Sahara",
        "Désert de Gobi",
        "Désert d'Arabie",
        "Désert de Sonora",
      ],
      correct: 0,
    },
    {
      text: "Quel est le plus grand producteur de café au monde ?",
      answers: ["Brésil", "Vietnam", "Colombie", "Éthiopie"],
      correct: 0,
    },
    {
      text: "Quel est le plus grand archipel du monde ?",
      answers: ["Indonésie", "Philippines", "Maldives", "Japon"],
      correct: 0,
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
