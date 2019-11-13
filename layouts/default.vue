<template>
  <div>
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="../">
            <div class="columns">
              <div class="column">
                <p class="title is-1">Esto pasa en Chile</p>
                <p class="subtitle is-6">Evidencia de lo que est&aacute; pasando en Chile</p>
              </div>
            </div>
          </a>
        </div>
        <div class="navbar-brand">
          <span class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <nuxt-link class="navbar-item is-active" to="/">Videos</nuxt-link>
            <nuxt-link class="navbar-item" to="/flyers">Flyers</nuxt-link>
          </div>
        </div>
      </div>
    </nav>
    <!-- END NAV -->

    <div class="container">
      <div id="flow">
        <span class="flow-1"></span>
        <span class="flow-2"></span>
        <span class="flow-3"></span>
      </div>
      <div class="section">
        <nuxt/>

      </div>
    </div>

    <!--    <footer class="footer">-->
    <!--      <div class="container">-->
    <!--        <div class="content has-text-centered">-->
    <!--          <div class="soc">-->
    <!--            <a href="#">-->
    <!--              <i class="fa fa-github-alt fa-2x" aria-hidden="true"></i>-->
    <!--            </a>-->
    <!--            <a href="#">-->
    <!--              <i class="fa fa-youtube fa-2x" aria-hidden="true"></i>-->
    <!--            </a>-->
    <!--            <a href="#">-->
    <!--              <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>-->
    <!--            </a>-->
    <!--            <a href="#">-->
    <!--              <i class="fa fa-twitter fa-2x" aria-hidden="true"></i>-->
    <!--            </a>-->
    <!--          </div>-->
    <!--          <p>-->
    <!--            <strong>Bulma</strong> by-->
    <!--            <a href="http://jgthms.com">Jeremy Thomas</a>.-->
    <!--            The source code is licensed-->
    <!--            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.-->
    <!--            <br/>-->
    <!--          </p>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </footer>-->
  </div>
</template>

<script>
  export default {
    head() {
      return {
        title: "Esto pasa en Chile",
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {hid: "charset", charset: "utf-8"},
          {
            hid: "charset",
            name: "viewport",
            content: "width=device-width, initial-scale=1"
          },
          {
            hid: "og_title",
            property: "og:title",
            content: "Esto pasa en Chile"
          },
          {
            hid: "og_description",
            property: "og:description",
            content: this.$store.state.ogDescription
          },
          {
            hid: "og_image",
            property: "og:image",
            content: require('../assets/images/og_image.png')
          }
        ]
      };
    }
  };
</script>

<!--<style>-->
<!--  @import "../node_modules/bulma/css/bulma.css";-->
<!--</style>-->
<!--<style lang="scss">-->
<!--  @import "../node_modules/bulma/sass/utilities/all";-->
<!--  @import "../node_modules/bulma/sass/base/all";-->
<!--  @import "../node_modules/bulma/sass/elements/title";-->
<!--  @import "../node_modules/bulma/sass/components/navbar";-->
<!--  @import "../node_modules/bulma/sass/components/pagination";-->
<!--  @import "../node_modules/bulma/sass/grid/columns";-->
<!--  @import "../node_modules/bulma/sass/layout/section";-->
<!--</style>-->
<style lang="scss">
  @import "../node_modules/bulma/sass/utilities/all";
  @import "../node_modules/bulma/sass/base/all";
  @import "../node_modules/bulma/sass/elements/container";
  @import "../node_modules/bulma/sass/elements/title";
  @import "../node_modules/bulma/sass/components/navbar";
  @import "../node_modules/bulma/sass/components/pagination";
  @import "../node_modules/bulma/sass/grid/columns";
  @import "../node_modules/bulma/sass/layout/section";
</style>
