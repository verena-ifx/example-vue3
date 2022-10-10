<template>
  <div>


    <!-- <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a> -->


  </div>
  <HelloWorld msg="IFX Example App using Vite + Vue" />
</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import '@infineon/design-system-tokens/dist/fonts.css';
console.log("test")
</script>


<style scoped>
@font-face {
  font-family: ifxTestFont1;
  src: url(source-sans-pro-v16-latin-600.woff);
}

@font-face {
  font-family: ifxTestFont2;
  src: url(source-sans-pro-v16-latin-600.woff);
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
