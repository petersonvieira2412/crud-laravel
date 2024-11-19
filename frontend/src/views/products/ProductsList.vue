<template>
  <div class="text-right v-col-12">
    <ButtonApp
      color="green"
      icon="mdi-plus"
      :link="'/products/add'"
      text="Add Product"
    />
  </div>
  <v-divider class="v-col-md-12" />
  <DataTable
    :headers="headers"
    icon="mdi-cart"
    :items="items"
    title="Product List"
  />
</template>

<script>
  import { productService } from '@/services/ProductService'

  export default {
    data () {
      return {
        headers: [
          { text: 'Name', value: 'name', type: 'text', sortable: true },
          { text: 'Image', value: 'image', type: 'image', sortable: false },
          { text: 'Price', value: 'price', type: 'price', sortable: true },
          { text: 'Stock', value: 'stock', type: 'boolean', sortable: true }
        ],
        items: []
      }
    },
    mounted () {
      this.loadProducts()
    },
    methods: {
      async loadProducts () {
        try {
          const response = await productService.getAllProducts()
          this.items = response.map(product => ({
            ...product,
            price: parseFloat(product.price),
            stock: product.stock === 1
          }))
        } catch (error) {
          console.error('Error loading products:', error)
        }
      }
    }
  }
</script>
