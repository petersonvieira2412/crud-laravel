<template>
  <v-breadcrumbs
    :items="items"
    bg-color="#00438f"
    class="pl-10 font-weight-bold"
  >
    <template v-slot:item="{ item }">
      <v-breadcrumbs-item
        :to="item.disabled ? null : item.href"
        :class="{ 'current-page': item.disabled, 'default-page': !item.disabled }"
      >
        {{ item.title }}
      </v-breadcrumbs-item>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  data() {
    const routePath = this.$route.path;
    const pages = routePath.split('/').filter(page => page);

    const items = pages.map((page, index) => {
      const title = page.charAt(0).toUpperCase() + page.slice(1);
      const href = '/' + pages.slice(0, index + 1).join('/');
      return {
        title,
        href,
        disabled: index === pages.length - 1,
      };
    });

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

      this.items = pages.map((page, index) => {
        const title = page.charAt(0).toUpperCase() + page.slice(1);
        const href = '/' + pages.slice(0, index + 1).join('/');
        return {
          title,
          href: pages.length > 1 ? href : '',
          disabled: index === pages.length - 1
        };
      });
    }
  },
  mounted() {
    this.updateBreadcrumbs();
  }
};
</script>

<style scoped>
.current-page {
  color: white;
  font-weight: bold;
}

.default-page {
  color: inherit;
}

.v-breadcrumbs-item--link {
  pointer-events: none;
}
</style>
