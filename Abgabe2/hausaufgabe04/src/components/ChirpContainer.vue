<template>
  <b-container>
    <!-- TODO -->
    <b-row > 
      <b-col  cols = "6">
    <ChirpCard v-for="chirp in chirps"
               v-bind:key="chirp.id"
               v-bind:id="chirp.id"
               v-bind:author="chirp.author"
               v-bind:thumbnail="chirp.thumbnail"
               v-bind:text="chirp.text"
               v-bind:hashtags="chirp.hashtags"
               v-bind:category="chirp.category"
   
      
       ></ChirpCard>
        </b-col>
      </b-row>
    
  </b-container>
</template>

<script>
import ChirpCard from './ChirpCard'
export default {
  name: "ChirpContainer",
  //TODO
  components:{ChirpCard},
  props:{chirps:
          {type:Object,
            required:true}}
};
</script>

<style scoped>

</style>