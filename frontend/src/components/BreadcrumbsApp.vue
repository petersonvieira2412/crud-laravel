<template>
  <v-breadcrumbs :items="breadcrumbsItems" />
</template>

<script>
export default {
  computed: {
    breadcrumbsItems() {
      const routePath = this.$route.path;
      const pages = routePath.split('/').filter(page => page);

      return [
        { text: 'Home', href: '/', disabled: false },
        ...pages.map((page, index) =>{
          const text = page.charAt(0).toUpperCase() + page.slice(1);
          const href = '/' + pages.slice(0, index + 1).join('/');
          return {
            text,
            href,
            disabled: index === pages.length - 1,
          };
        })
      ];
    },
  },
};
</script>
