export const cart = (state) => state.cart.cartItems

export const getCartCount = (state) => {
    const cartItems = cart(state)
    return cartItems.length
}

