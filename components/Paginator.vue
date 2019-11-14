<template>
  <nav class="pagination" role="navigation" aria-label="pagination">
    <ul class="pagination-list">
      <li v-for="(page, pageKey) in pagesAmount" :key="'page'+pageKey">
        <nuxt-link @click.native="goToPage(page)" :to="'/?page='+page"
                   :class="{'pagination-link': true, 'is-current': page === currentPage }"
                   :aria-label="'Goto page '+page">{{page}}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: "Paginator",
    props: {
      pagesAmount: Number,
      currentPage: Number
    },
    methods: {
      goToPage(page) {
        this.$store.commit('setCurrentPage', page);
        window.scrollTo(0, 0);
      }
    }
  }
</script>

<style scoped>

</style>
