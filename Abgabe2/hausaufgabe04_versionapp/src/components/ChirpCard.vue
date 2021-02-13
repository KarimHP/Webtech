<template>
    <b-card 
            v-bind:title="detail.author"
            v-bind:img-src="getImgUrl(detail.thumbnail)" img-left 
    >
       
        <b-card-text >
           {{detail.text}}<a href="#" v-for="tag in detail.hashtags" v-bind:key="tag.index" >{{tag}}</a>

        </b-card-text>
    </b-card>
</template>

<script>
    export default {
        name: "ChirpCard",
        props: {
            detail: {
                type: Object,
                default: () => {}
            }
        },
        methods: {
            getImgUrl(thumbnailPath) {
                return require("../assets/" + thumbnailPath);
            },
        },
    };
</script>

<style scoped>
   
    img
    {
        border-radius: 50%; 
        height:64px; 
        width: 64px; 
    }

</style>