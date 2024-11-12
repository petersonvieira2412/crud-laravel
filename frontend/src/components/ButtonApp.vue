<template>
  <v-btn append-icon="mdi-plus" :color="color" :to="link">
    {{ text }}
  </v-btn>
</template>

<script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: 'green'
      },
      icon: {
        type: String,
        default: 'mdi-plus'
      },
      link: {
        type: String,
        required: true
      }
    }
  }
</script>
