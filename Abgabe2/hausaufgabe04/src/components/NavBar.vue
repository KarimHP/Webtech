<template>
    <b-navbar type="dark" style="background-color: cornflowerblue;">
    <b-navbar-brand href="#" @click="filterCategory('')">Chirper</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item href="#" @click="filterCategory('')">Alle</b-nav-item>
        <b-nav-item href="#" @click="filterCategory('featured')">Featured</b-nav-item>
        <b-nav-item href="#" @click="filterCategory('friends')">Freunde</b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-form-input size="sm" class="mr-4" placeholder="#hashtag suchen" v-model="hashtag" @keydown.enter="filterHashtag"></b-form-input>
        <!-- TODO -->
        <create-chirp-modal @click="forwardEvent"></create-chirp-modal>
      </b-navbar-nav>
  </b-navbar>
</template>

<script>
import CreateChirpModal from './CreateChirpModal.vue';

    export default {
  components: { CreateChirpModal },
        name: "NavBar",
        data() {
          return {
            activeCategory: '',
            hashtag: ''
          }
        },
      props:{
        filterChirps:{
          type:Function,
          default:function () {

          }
        }
      },
        methods: {
          filterHashtag(){
            if(this.hashtag.startsWith('#'))
            {
              this.$emit('filterChirps',this.hashtag);
            }
            else{
              this.$emit('filterChirps', '#' + this.hashtag);
            }
            
          },
          filterCategory(val){
            this.$emit('filterChirps',val)
          },


        //Event weiterleiten
        forwardEvent()
        {
              this.$emit('added-chirp');
        }

        }
    }
</script>

<style scoped>

</style>