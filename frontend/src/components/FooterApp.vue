<template>
  <v-footer height="40" app>
    <div
      class="text-caption text-disabled"
      style="position: absolute; right: 16px;"
    >
      &copy; 2024-{{ (new Date()).getFullYear() }} <span class="d-none d-sm-inline-block"></span>
      —
      <a
        class="text-decoration-none on-surface"
        href="https://github.com/petersonvieira2412/crud-laravel"
        rel="noopener noreferrer"
        target="_blank"
      >
        Peterson Vieira Santos
      </a>
    </div>
  </v-footer>
</template>

<style scoped lang="sass">
  .social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
      color: rgba(25, 118, 210, 1)
</style>
