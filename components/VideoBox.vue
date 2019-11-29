<template>
  <div class="column is-one-third">
    <div class="card">
      <div class="card-content">
        <p class="title is-6">
          {{video.title}}
        </p>
        <video preload="metadata" controls :src="video.url"></video>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">
      <span>
        <nuxt-link :to="'video/'+video.file">Comparte esto</nuxt-link>
      </span>
        </p>
        <p class="card-footer-item">
      <span>
        <a :href="video.url">Descarga</a>
      </span>
        </p>
      </footer>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['video']
  }
</script>
<style>
  .video-box video {
    width: 100%;
  }
</style>
