<template>
  <div>
    <div class="box">
      <div class="field has-addons">
        <div class="control is-expanded">
          <input
            v-model="searchText"
            class="input has-text-centered"
            type="search"
            placeholder="Buscar"
          />
        </div>
        <div class="control">
          <button @click="clearSearch" class="button is-danger">X</button>
        </div>
      </div>
      <div class="control">
        <div class="tags has-addons">
          <span class="tag is-dark">{{isSearchEmpty ? 'Videos' : 'Videos encontrados'}}</span>
          <span class="tag is-success">{{filteredVideos.length}}</span>
        </div>
      </div>
    </div>
    <h2 class="title">Lista de videos por orden de aparici&oacute;n</h2>

    <div v-for="row in rowsAmount" :key="row" class="row columns">
      <video-box v-for="(video, index) in getVideosForRow(row-1, columns)"
                 :key="index" :video="video"/>
    </div>
    <paginator @page-clicked="goToPage($event)" :current-page="$store.state.currentPage" :pages-amount="pagesAmount" />
  </div>
</template>

<script>
  import VideoBox from "../components/VideoBox";
  import videosProcessor from "../lib/VideosProcessor"
  import Paginator from "../components/Paginator";

  export default {
    components: {
      Paginator,
      VideoBox
    },
    created() {
      let currentPage = this.$route.query.page ? parseInt(this.$route.query.page) : 1;
      this.$store.commit('setCurrentPage', currentPage);
    },
    data() {
      return {
        videos: videosProcessor.getVideos(),
        columns: 3,
        searchText: null,
        maxItemsPerPageForMobile: 3,
        maxItemsPerPageForDesktop: 9,
        currentPage: 1
      };
    },
    computed: {
      rowsAmount() {
        return Math.ceil(this.videosOfCurrentPage.length / this.columns);
      },
      videosOfCurrentPage() {
        return this.getVideosForPage(this.filteredVideos);
      },
      isSearchEmpty() {
        return !this.searchText || 0 === this.searchText.length;
      },
      filteredVideos() {
        return videosProcessor.search(this.videos, this.isSearchEmpty ? null : this.searchText);
      },
      pagesAmount() {
        return Math.round(this.filteredVideos.length / this.videosPerPage);
      },
      videosPerPage() {
        return this.$device.isMobileOrTablet ? this.maxItemsPerPageForMobile : this.maxItemsPerPageForDesktop;
      }
    },
    watch: {
      isSearchEmpty(newValue) {
        // If the search field is not empty
        if (!newValue) {
          this.$store.commit('setCurrentPage', 1);
        }
      }
    },
    methods: {
      clearSearch() {
        this.searchText = null;
      },
      getVideosForRow(row) {
        let videos = [];
        for (let i = row * this.columns; i < (row + 1) * this.columns; i++) {
          if (typeof this.videosOfCurrentPage[i] !== 'undefined' && this.videosOfCurrentPage[i] !== null) {
            videos.push(this.videosOfCurrentPage[i]);
          }

        }
        return videos;
      },
      getVideosForPage(allVideos) {
        let videos = [];
        for (let i = (this.$store.state.currentPage - 1) * this.videosPerPage; i < this.$store.state.currentPage * this.videosPerPage; i++) {
          if (typeof allVideos[i] !== 'undefined' && allVideos[i] !== null) {
            videos.push(allVideos[i]);
          }

        }
        return videos;
      }
    }
  };
</script>

<style lang="scss">
  @import "../node_modules/bulma/sass/utilities/all";
  @import "../node_modules/bulma/sass/form/shared";
  @import "../node_modules/bulma/sass/form/tools";
  @import "../node_modules/bulma/sass/elements/box";
  @import "../node_modules/bulma/sass/elements/tag";
  @import "../node_modules/bulma/sass/form/input-textarea";
  @import "../node_modules/bulma/sass/elements/button";
</style>
