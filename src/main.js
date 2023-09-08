import './assets/scss/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'

const app = createApp(App);
app.component('Header', Header);
app.component('Main', Main);
app.mount('#app');
