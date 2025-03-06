import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import MainPage from './pages/MainPage.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const app = createApp(App);

app.component('base-modal', BaseModal);

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: MainPage },
        { path: '/all-users', component: AllUsers },
        { path: '/course-goals', component: CourseGoals },
    ]
})

app.use(router);

app.mount('#app');
