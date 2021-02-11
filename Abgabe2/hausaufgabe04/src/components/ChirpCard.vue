<template>
  <b-card >
  <b-card-text>
    
  </b-card-text>
      
  </b-card>
</template>

<script>
export default {
  name: "ChirpCard",
  methods: {
    getImgUrl(thumbnailPath) {
      return require("../assets/" + thumbnailPath);
    },
    // TODO
    props:["chirps"]
  },
};
</script>

<style scoped>

</style>