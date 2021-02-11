<template>
  <b-card v-bind:title="this.author"
          v-bind:img-src="getImgUrl(this.thumbnail)" img-left >
    <p>{{this.text}}<span id = "hashtagspan" v-bind:key="hashtag.id" v-for="hashtag in hashtags">{{hashtag}}</span></p>
      
  </b-card>
</template>

<script>
export default {
  name: "ChirpCard",
  methods: {
    getImgUrl(thumbnailPath) {
      return require("../assets/" + thumbnailPath);
    },
  },
    // TODO
    props:{
            id:{Type: Number,required:true},
            author:{Type: String,required:true},
            thumbnail:{Type: String,required:true},
            text:{Type: String,required:true},
            hashtags:{Type: Object,required:true},
            category:{Type: String,required:true}
            
    }
  
  
};
</script>

<style scoped>
img
{
  border-radius: 50%;
  height:64px; 
  width:64px; 
}

#hashtagspan{
  color:blue;

}
</style>