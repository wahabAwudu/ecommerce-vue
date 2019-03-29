<template>
    <button @click="addToCart(productId)" type="button" class="btn btn-primary"><i class="fas fa-cart-plus"></i></button>
</template>

<script>
import swal from 'sweetalert'

export default {
    props: {
      productId: { default: null,}
    },

    methods: {
    addToCart(id) {
      this.$store.dispatch('addToCart', id)
      swal('Success!', 'Item Added to Cart', 'success');
    },

    }
}
</script>

