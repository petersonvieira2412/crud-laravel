<template>
  <v-container>
    <DataTable
      title="Product List"
      :items="items"
      :headers="headers"
      icon="mdi-cart"
    />
  </v-container>
</template>

<script>
import DataTable from '@/components/DataTable.vue';

export default {
  components: {
    DataTable,
  },
  data() {
    return {
      headers: [
        { text: 'Name', value: 'name', sortable: true },
        { text: 'Image', value: 'image', sortable: false },
        { text: 'Price', value: 'price', sortable: true },
        { text: 'Stock', value: 'stock', sortable: true },
      ],
      items: [
        {
          name: { value: 'Nebula GTX 3080', type: 'text', align: 'center' },
          image: { value: 'https://cdn.vuetifyjs.com/docs/images/graphics/gpus/1.png', type: 'img', align: 'center' },
          price: { value: 699.99, type: 'price', align: 'center' },
          stock: { value: true, type: 'boolean', align: 'center' },
        },
        {
          name: { value: 'Galaxy RTX 3080', type: 'text', align: 'center' },
          image: { value: 'https://cdn.vuetifyjs.com/docs/images/graphics/gpus/2.png', type: 'img', align: 'center' },
          price: { value: 799.99, type: 'price', align: 'center' },
          stock: { value: false, type: 'boolean', align: 'center '}
        },
        {
          name: { value: 'Orion RX 6800 XT', type: 'text', align: 'center' },
          image: { value: 'https://cdn.vuetifyjs.com/docs/images/graphics/gpus/3.png', type: 'img', align: 'center' },
          price: { value: 649.99, type: 'price', align: 'center' },
          stock: { value: true, type: 'boolean', align: 'center '}
        },
        {
          name: { value: 'Vortex RTX 3090', type: 'text', align: 'center' },
          image: { value: 'https://cdn.vuetifyjs.com/docs/images/graphics/gpus/4.png', type: 'img', align: 'center' },
          price: { value: 1499.99, type: 'price', align: 'center' },
          stock: { value: true, type: 'boolean', align: 'center '}
        },
        {
          name: { value: 'Cosmos GTX 1660 Super', type: 'text', align: 'center' },
          image: { value: 'https://cdn.vuetifyjs.com/docs/images/graphics/gpus/5.png', type: 'img', align: 'center' },
          price: { value: 299.99, type: 'price', align: 'center' },
          stock: { value: false, type: 'boolean', align: 'center '}
        }
      ]
    };
  }
};
</script>
