<template>
  <div class="p-4 bg-blue-100 rounded-md">
    <h2 class="text-lg font-semibold">Questions effectuées</h2>
    <p class="text-xl font-bold">{{ completedTasks }} / {{ totalTasks }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useTasksStore } from "@/stores/quiz";

const tasksStore = useTasksStore();

const completedTasks = computed(() => tasksStore.completedTasks);
const totalTasks = computed(() => tasksStore.questions.length);
</script>
