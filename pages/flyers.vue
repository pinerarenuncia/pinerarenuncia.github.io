<template>
  <div class="links">
    <ul>
      <li v-for="(flyer, index) in flyers" :key="index" class="flyer-box">
          <a :href="'/flyers/'+flyer.file">{{flyer.title}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flyers: [
        {
          title: "Afiche de @radiovillafrancia y @piensalibre",
          file: "DEMO21_10_Berlin.pdf"
        }
      ]
    };
  }
};
</script>

