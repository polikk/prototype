import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { createPinia } from 'pinia';

import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'
import ContactView from './ContactView.vue'
import OverviewRoute from './Overview.vue'
import Samtykke from './pages/Samtykke.vue';

const routes = [
  { path: '/', component: HomeView },
    { path: '/prototype', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/contact', component: ContactView },
  { path: '/overview', component: OverviewRoute },
    { path: '/consent', component: Samtykke },
     { path: '/empty', component: HomeView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
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
