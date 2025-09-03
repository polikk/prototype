
import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'
import ContactView from './ContactView.vue'
import OverviewRoute from './Overview.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/contact', component: ContactView },
  { path: '/overview', component: OverviewRoute }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: 'html',
      cssLayer: false
    }
    }
 });
app.mount('#app');
