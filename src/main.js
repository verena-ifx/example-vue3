import { createApp } from 'vue'
import { InfineonIconVue } from '@infineon/infineon-icons-vue';
import './style.css'
import App from './App.vue'
import './plugins/infineonIcons'
import { applyPolyfills, defineCustomElements } from "@infineon/infineon-design-system-stencil/loader";
// import "@infineon/design-system-bootstrap";


const app = createApp(App);
app.component('InfineonIconVue', InfineonIconVue);
app.mount('#app')
applyPolyfills().then(() => { defineCustomElements(window)})
;