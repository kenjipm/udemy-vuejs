export default {
    requests(state, _, _2, rootGetters) {
        const requests = state.requests;
        const userId = rootGetters.userId;
        return requests.filter(request => request.coachId === userId);
    },
    hasRequests(_, getters) {
        return getters.requests && getters.requests.length > 0;
    }
}