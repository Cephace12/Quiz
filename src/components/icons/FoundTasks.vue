<template>
  <div class="p-4 bg-green-100 rounded-md">
    <h2 class="text-lg font-semibold">Questions Trouvées</h2>
    <p class="text-xl font-bold">{{ foundTasks }} / {{ totalTasks }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useTasksStore } from "@/stores/quiz";

const tasksStore = useTasksStore();

const foundTasks = computed(() => tasksStore.foundTasks);
const totalTasks = computed(() => tasksStore.questions.length);
</script>
