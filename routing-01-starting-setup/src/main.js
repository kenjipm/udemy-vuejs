import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue'
import TeamFooter from './components/teams/TeamFooter.vue';
import UserFooter from './components/users/UserFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/teams' },
        {
            path: '/teams',
            components: {
                default: TeamsList,
                footer: TeamFooter
            },
            children: [
                { name: 'team-members', path: ':teamId', component: TeamMembers, props: true },
            ]
        },
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UserFooter
            }
        },
        //{ path: '/teams/:teamId', component: TeamMembers, props: true },
        { path: '/:notFound(.*)', component: NotFound },
    ],
    linkActiveClass: 'active',
    scrollBehavior: (to, from, savedPosition) => {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    }
})

router.beforeEach(function(to, from, next) {
    next(); // allow navigation
    // next(false); // cancel navigation
    // next({ name: 'team-members', params: { teamId: 't2' } }); // go to specific route
})

const app = createApp(App);

app.use(router);

app.mount('#app');
