import './assets/main.css';
import 'primeicons/primeicons.css';

import router from './router'; // Removed the semicolon inside the import path

import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);
app.use(router);
app.mount('#app');

