export default {
    login(context) {
        context.commit('setIsLoggedIn', true);
    },
    logout(context) {
        context.commit('setIsLoggedIn', false);
    },
    addToCart(context, productData) {
        const cart = context.getters.cartItems;
        const productInCartIndex = cart.findIndex(
            (ci) => ci.productId === productData.id
        );

        if (productInCartIndex >= 0) {
            cart[productInCartIndex].qty++;
        } else {
            const newItem = {
                productId: productData.id,
                title: productData.title,
                image: productData.image,
                price: productData.price,
                qty: 1,
            };
            cart.push(newItem);
        }
        cart.qty++;
        cart.total += productData.price;

        context.commit('setCart', cart);
    },
    removeFromCart(context, productId) {
        const cart = context.getters.cartItems;

        const productInCartIndex = cart.findIndex(
            (cartItem) => cartItem.productId === productId
        );
        const prodData = cart[productInCartIndex];
        cart.splice(productInCartIndex, 1);
        cart.qty -= prodData.qty;
        cart.total -= prodData.price * prodData.qty;

        context.commit('setCart', cart);
    }
}