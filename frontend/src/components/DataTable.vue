<template>
  <v-card flat>
    <v-card-title class="d-flex align-center pe-2">
      <v-icon :icon="icon" /> &nbsp; {{ title }}

      <v-spacer />

      <v-text-field
        v-model="search"
        density="compact"
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-magnify"
        single-line
        variant="solo-filled"
      />
    </v-card-title>

    <v-divider />

    <v-data-table
      v-model:search="search"
      class="elevation-1"
      :headers="headers.text"
      :items="items"
    >
      <template v-for="header in headers" #[`item.${header.value}`]="{ item }">
        <span v-if="header.type === 'text'">{{ item[header.value] }}</span>

        <v-card
          v-else-if="header.type === 'image'"
          class="my-2"
          elevation="2"
          rounded
          width="75"
        >
          <v-img cover :src="item[header.value]" />
        </v-card>

        <span v-else-if="header.type === 'price'">R$ {{ item[header.value].toFixed(2) }}</span>

        <v-chip
          v-else-if="header.type === 'boolean'"
          class="text-uppercase"
          :color="item[header.value] ? 'green' : 'red'"
          label
          size="small"
        >
          {{ item[header.value] ? 'IN STOCK' : 'OUT OF STOCK' }}
        </v-chip>

      </template>
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    props: {
      title: String,
      icon: String,
      items: {
        type: Array,
        required: true,
        default: () => []
      },
      headers: {
        type: Array,
        required: true,
        default: () => []
      }
    },
    data () {
      return {
        search: ''
      }
    }
  }
</script>
