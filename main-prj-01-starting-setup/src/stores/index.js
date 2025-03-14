import { createStore } from 'vuex';
import coaches from './coaches';
import requests from './requests';

export default createStore({
    modules: {
        coaches,
        requests
    },
    state() {
        return {
            userId: 'c3'
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});