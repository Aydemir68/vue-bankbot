import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura';

import './style.css'
import '/node_modules/primeflex/primeflex.css'
import 'primeflex/themes/primeone-light.css'
import 'primeicons/primeicons.css'
import VueRouter from 'vue-router'

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: '.my-app-dark',
            cssLayer: false
        }
    }
});
app.use(VueRouter);
app.mount('#app');