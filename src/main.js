import { createApp } from 'vue'
// import { InfineonIconVue } from '@infineon/infineon-icons-vue';
import './style.css'
import App from './App.vue'
// import './plugins/infineonIcons'
import { library } from '@fortawesome/fontawesome-svg-core'

import "@infineon/design-system-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faBicycle } from '@fortawesome/pro-regular-svg-icons'

library.add(faUserSecret,faBicycle)

const app = createApp(App);
// app.component('InfineonIconVue', InfineonIconVue);
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')