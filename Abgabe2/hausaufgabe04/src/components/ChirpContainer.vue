<template>
  <b-container>
    <!-- TODO -->
    <div v-bind:key="chirp.id" v-for="chirp in chirps">
      <ChirpCard v-bind:chirp = "chirp"/>
      {{chirp.author}}
      
    </div>
  </b-container>
</template>

<script>
import ChirpCard from './ChirpCard'
export default {
  name: "ChirpContainer",
  //TODO
  components:{ChirpCard},
  props:["chirps"]
};
</script>

<style scoped>

</style>