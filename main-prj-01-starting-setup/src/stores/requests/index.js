import mutations from './mutations.js';
import getters from './getters.js';
import actions from './actions.js';

export default {
    namespaced: true,
    state() {
        return {
            requests: []
        }
    },
    mutations,
    getters,
    actions,
}