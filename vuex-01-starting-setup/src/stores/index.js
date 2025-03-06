import { createStore } from 'vuex';
import counterModule from './counter/index.js';

export default createStore({
    modules: {
        counter: counterModule
    },
    state() {
        return {
            isLoggedIn: false,
        }
    },
    mutations: {
        setIsLoggedIn(state, value) {
            state.isLoggedIn = value;
        },
    },
    actions: {
        login(context) {
            context.commit('setIsLoggedIn', true);
        },
        logout(context) {
            context.commit('setIsLoggedIn', false);
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.isLoggedIn;
        }
    }
});