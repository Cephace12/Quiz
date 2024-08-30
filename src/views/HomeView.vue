<template>
  <div class="bg-blue-100 h-screen grid place-items-center">
    <div class="grid justify-items-center w-full grid-cols-1 md:grid-cols-2">
      <div class="mx-auto">
        <img
          src="/src/images/logo_home-1916c57e.svg"
          width="300"
          height="300"
        />
      </div>
      <div class="mx-auto">
        <div class="greetings space-y-4 pt-8 text-center">
          <h2 class="text-blue-800 text-2xl p-2 font-weight-bold mb-16">
            Bienvenue sur une plateforme de Quiz
          </h2>
          <RouterLink to="/quiz"
            ><button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 text-md px-2 inline-flex rounded items-center"
            >
              <span>Commencer</span>
            </button></RouterLink
          >
        </div>
      </div>
    </div>
    <h2 class="justify-items-center text-2xl text-blue-500 italic font-md">
      Design réaliser par Céphace Kinhohegbe
    </h2>
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
