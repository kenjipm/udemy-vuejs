import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './pages/NotFound.vue';
import CoachList from './pages/CoachList.vue';
import CoachDetails from './pages/CoachDetails.vue';
import ContactCoach from './pages/ContactCoach.vue';
import RegisterCoach from './pages/RegisterCoach.vue';
import RequestList from './pages/RequestList.vue';

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches' },
        { path: '/coaches', component: CoachList },
        {
            path: '/coaches/:id', component: CoachDetails, props: true, children: [
                { path: 'contact', component: ContactCoach }
            ]
        },
        { path: '/register', component: RegisterCoach },
        { path: '/requests', component: RequestList },
        { path: '/:notFound(.*)', component: NotFound }
    ]
})