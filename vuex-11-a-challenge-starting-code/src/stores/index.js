import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';
import { createStore } from 'vuex';
import userStore from './user/index.js';
import productStore from './product/index.js';

export default createStore({
    modules: {
        user: userStore,
        product: productStore,
    },
    state() {
        return {

        };
    },
    getters,
    mutations,
    actions,
});