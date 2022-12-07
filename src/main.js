import { createApp } from 'vue'
import { InfineonIconVue } from '@infineon/infineon-icons-vue';
import './style.css'
import App from './App.vue'
import './plugins/infineonIcons'
import "@infineon/infineon-design-system-stencil";
// import "@infineon/design-system-bootstrap";


const app = createApp(App);
app.component('InfineonIconVue', InfineonIconVue);
app.mount('#app')