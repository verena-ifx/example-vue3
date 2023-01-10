<template>
  <h1>{{ msg }}</h1>
  <hr />

  <h3 style="font-family:ifxTestFont1">Infineon Font test 1</h3>
  <p style="font-family:ifxTestFont2">Infineon Font test 2</p>
  <hr />
  <p>Infineon Icon Test:</p>
  <div>
    <font-awesome-icon icon="fa-solid fa-user-secret" />
    <font-awesome-icon icon="fa-regular fa-bicycle" />
  </div>


  <infineon-icon-vue icon="cCheck12" />
  <infineon-icon-vue icon="c-check-12" />
  <hr />



  <button type="button" class="btn btn-primary" @click="count++">Test counter: {{ count }}</button>


  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
