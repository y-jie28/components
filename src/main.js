import { createApp } from 'vue'
import App from './App.vue'
import Greeting from './components/Greeting.vue';

const vm = createApp(App);

// components must be registered after a Vue instance
vm.component('Greeting', Greeting);

vm.mount('#app');
