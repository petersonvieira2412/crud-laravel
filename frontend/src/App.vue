<template>
  <v-app>
    <SidebarApp />
    <v-main>
      <BreadcrumbsApp />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
  import SidebarApp from './components/SidebarApp.vue'
  import BreadcrumbsApp from './components/BreadcrumbsApp.vue'

  export default {
    components: {
      SidebarApp,
      BreadcrumbsApp
    }
  }
</script>
