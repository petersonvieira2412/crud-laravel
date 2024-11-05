<template>
  <v-card flat>
    <v-card-title class="d-flex align-center pe-2">
      <v-icon :icon="icon"></v-icon> &nbsp; {{ title }}

      <v-spacer></v-spacer>

      <v-text-field
        v-model="search"
        density="compact"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
      ></v-text-field>
    </v-card-title>

    <v-divider></v-divider>

    <v-data-table
      v-model:search="search"
      :items="items"
      :headers="headers"
    >
      <template v-slot:item="{ item }">
        <tr>
          <td v-for="(field, key) in item" :key="key" :class="field.align">
            <component
              v-if="field.type === 'text'"
              :is="'span'"
            >{{ field.value }}</component>
            <component
              v-else-if="field.type === 'img'"
              :is="'v-img'"
              :src="field.value"
              height="64"
              cover
            ></component>
            <component
              v-else-if="field.type === 'price'"
              :is="'span'"
            >R$ {{ field.value.toFixed(2) }}</component>
            <v-chip
              v-else-if="field.type === 'boolean'"
              :color="field.value ? 'green' : 'red'"
              class="text-uppercase"
              size="small"
              label
            >
              {{ field.value ? 'In stock' : 'Out of stock' }}
            </v-chip>
          </td>
        </tr>
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
      default: () => [],
    },
    headers: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      search: ''
    };
  },
};
</script>
