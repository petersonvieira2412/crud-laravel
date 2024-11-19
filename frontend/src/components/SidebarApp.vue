<template>
  <v-navigation-drawer app expand-on-hover mobile-breakpoint="true" rail>
    <v-list>
      <v-list-item prepend-avatar="../assets/logo.png" title="Menu" />
    </v-list>

    <v-divider />

    <v-list density="compact" nav>
      <v-list-item prepend-icon="mdi-home" title="Home" @click="$router.push('/')" />
      <v-list-item prepend-icon="mdi-cart" title="Produtos" @click="$router.push('/products')" />
      <v-list-item prepend-icon="mdi-account" title="Usuários" @click="$router.push('/users')" />
    </v-list>

    <v-divider />

    <v-list>
      <v-list-item prepend-icon="mdi-logout" title="Sair" />
    </v-list>
  </v-navigation-drawer>
</template>
