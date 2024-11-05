<template>
  <v-breadcrumbs :items="items" bg-color="#00438f" color="white" class="pl-10 font-weight-bold"/>
</template>

<script>
export default {
  data() {
    const routePath = this.$route.path;
    const pages = routePath.split('/').filter(page => page);

    const items = [
      ...pages.map((page, index) => {
        const title = page.charAt(0).toUpperCase() + page.slice(1);
        const href = '/' + pages.slice(0, index + 1).join('/');
        return {
          title,
          href,
          disabled: index !== pages.length - 1,
        };
      })
    ];

    return { items };
  },
  watch: {
    '$route.path'() {
      this.updateBreadcrumbs();
    },
  },
  methods: {
    updateBreadcrumbs() {
      const routePath = this.$route.path;
      const pages = routePath.split('/').filter(page => page);

      this.items = [
        ...pages.map((page, index) =>{
          const title = page.charAt(0).toUpperCase() + page.slice(1);
          const href = '/' + pages.slice(0, index + 1).join('/');
          return {
            title,
            href: pages.length > 1 ? href : '',
            disabled: index === 1,
          };
        })
      ];
    },
  },
  mounted() {
    this.updateBreadcrumbs();
  },
};
</script>
