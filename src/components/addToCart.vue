<template>
    <button @click="addToCart(productId)" type="button" class="btn btn-primary"><i class="fas fa-cart-plus"></i></button>
</template>

<script>
export default {
    props: {
      productId: { default: null,}
    },

    methods: {
    addToCart(id) {
      this.$store.dispatch('addToCart', id)
      this.$toasted.success('Added to Cart', {
        icon: 'check',
        position: 'top-right',
        duration: 3000
      })
    },

    }
}
</script>

