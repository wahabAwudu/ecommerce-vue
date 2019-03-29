<template>
  <div>
      <!-- Page Content -->
  <div class="container">
    <div class="row">

      <div class="col-lg-3">

        <h1 class="my-4">Categories</h1>
        <div class="list-group">
          <li class="list-group-item"><router-link to="/">All</router-link>
          <li class="list-group-item" v-for="cat in categories" :key="cat.id">
            <router-link :to="'/categories/' + cat.value + '/' + cat.id">{{cat.name}}</router-link>
          </li>
        </div>
        

      </div>
      <!-- /.col-lg-3 -->

      <div class="col-lg-9">
        <app-carousel></app-carousel>

      <div class="row mt-5">
      <div class="col-md-6 col-md-offset-3">
        <form>
          <div class="form-group">
            <label for="search"></label>
            <input type="text" id="search" class="form-control" placeholder="search products" v-model="product_name">
          </div>
        </form>
      </div>
    </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 mb-4" v-for="prod in filteredProducts" :key="prod.id">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" :src="prod.image" alt=""></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">{{ prod.name }}</a>
                </h4>
                <h5>
                  <i class="pull-left selling-price">${{prod.market_price}}</i>         
                  <span class="pull-right">${{prod.selling_price}}</span></h5>
                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small> 
                <add-to-cart :productId="prod.id"></add-to-cart>
              </div>
            </div>
          </div> 

        </div>
        <!-- /.row -->

      </div>
      <!-- /.col-lg-9 -->


    </div>
    <!-- /.row -->

  </div>
  <!-- /.container -->
  </div>
</template>

<script>
import AddToCart from '@/components/addToCart.vue'
import Carousel from '@/components/carousel.vue'
export default {
    components: {
      'add-to-cart': AddToCart,
      'app-carousel': Carousel,
    },

    props: {
      producId: { default: null }
    },

    data() {
      return {
        product_name: '',
      }
    },

    computed: {
    // ...mapState({
    //   products: 'products',
    //   categories: 'categories',
    // })

    products() {
      return this.$store.state.products.products
    },

    categories() {
      return this.$store.state.products.categories
    },

    filteredProducts() {
      if(this.product_name === this.product_name.toLowerCase()) {
        return this.products.filter(prod => {
        return prod.name.includes(this.product_name)
      })
      }else {
        return this.products.filter(prod => {
        return prod.name.includes(this.product_name.toLowerCase())
      })
      }
      
    },

  },

  methods: {
 
  },
}
</script>

<style scoped>
.selling-price {
  text-decoration-line: line-through;
}

.card-title {
  text-transform: capitalize;
}
</style>
