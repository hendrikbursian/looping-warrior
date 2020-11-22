import {createApp} from 'vue';
import {createRouter, createWebHistory} from 'vue-router';
import App from './App.vue';
import Home from './components/Home.vue';
import Music from './components/Music.vue';
import './index.css';
import './tailwind.css';


const routes = [
  {path: '/', component: Home},
  {path: '/music', component: Music}
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
