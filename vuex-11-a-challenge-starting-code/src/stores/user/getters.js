export default {
    isLoggedIn(state) {
        return state.isLoggedIn;
    },
    cartItems(state) {
        return state.cart;
    },
    totalCartPrice(state) {
        return state.cart
            .map(item => item.price * item.qty)
            .reduce((prev, curr) => prev + curr, 0)
            .toFixed(2);
    },
    totalCartQty(state) {
        return state.cart
            .map(item => item.qty ?? 0)
            .reduce((prev, curr) => prev + curr, 0);
    },
}