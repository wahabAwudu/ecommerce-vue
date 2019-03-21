import Vuex from 'vuex'
import Vue from 'vue'

import products from './products'
import cart from './cart'

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    modules: {
        products,
        cart,
    },
})