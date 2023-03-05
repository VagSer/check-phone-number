import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'

import Card from 'primevue/card'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Message from 'primevue/message'

import 'primevue/resources/themes/md-light-indigo/theme.css'
import 'primeicons/primeicons.css'

createApp(App).use(PrimeVue)
    .component('Card', Card)
    .component('Button', Button)
    .component('InputText', InputText)
    .component('Message', Message)
        .mount('#app')
