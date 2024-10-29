<template>
  <v-navigation-drawer app expand-on-hover rail mobileBreakpoint=true>
    <v-list>
      <v-list-item prepend-avatar="../assets/logo.png" title="Menu"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item @click="$router.push('/')" prepend-icon="mdi-home" title="Home"></v-list-item>
      <v-list-item @click="$router.push('/products')" prepend-icon="mdi-cart" title="Produtos"></v-list-item>
      <v-list-item @click="$router.push('/users')" prepend-icon="mdi-account" title="Usuários"></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list>
      <v-list-item prepend-icon="mdi-logout" title="Sair"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
