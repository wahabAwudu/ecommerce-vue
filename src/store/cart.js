const state = {
    cart: [],
}

const getters = {
    cartLength() {
        return state.cart.length
    }
}

const mutations = {
    ADD_TO_CART(state, productId) {
        const cart = JSON.parse(localStorage.getItem('cart'))
        if(!cart) {
            state.cart.push(productId)
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
        else if(cart) {
            const existing_cart = JSON.parse(localStorage.getItem('cart'))
            existing_cart.push(productId)
            state.cart = existing_cart
            localStorage.setItem('cart', JSON.stringify(existing_cart))
        }

    },

    REMOVE_FROM_CART(state, productId) {
        const existing_cart = JSON.parse(localStorage.getItem('cart'))
        let position = existing_cart.indexOf(productId)
        existing_cart.splice(position, 1)
        state.cart = existing_cart
        localStorage.setItem('cart', existing_cart)
    },

    LOAD_CART(state) {
        state.cart = JSON.parse(localStorage.getItem('cart'))
    },
}

const actions = {
    addToCart({commit}, productId) {
        commit('ADD_TO_CART', productId)
    },

    removeFromCart({commit}, productId) {
        commit('REMOVE_FROM_CART', productId)
    },

    loadCart({commit}) {
        commit('LOAD_CART')
    },
}

export default {
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
}