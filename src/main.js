import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/primevue.min.css';
import 'primevue/resources/themes/mdc-light-deeppurple/theme.css';

const app = createApp(App);
app.use(PrimeVue);
app.mount('#app')
