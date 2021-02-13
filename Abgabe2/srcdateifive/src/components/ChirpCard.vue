<template>
    <b-card class="modify-card p-3 m-2" img-left no-body>
        <b-card-img :src="getImgUrl(detail.thumbnail)"
                    alt="Card image"
                    width="80px"
                    height="80px"
                    :left="true"
                    class="m-2 rounded-circle">
        </b-card-img>
        <b-card-text class="px-2" style="word-break: break-all;">
            <h4 class="text-capitalize">{{detail.author}}</h4>
            <div v-html="detail.text">
            </div>
            <div class="d-flex flex-wrap">
                <a href="#" v-for="tag in detail.hashtags" class="no-underline px-1">{{tag}}</a>
            </div>

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
    .modify-card h4 {
        color: #565656;
    }
    .modify-card .card-text {
        color: #43484B;
    }
    .no-underline {
        text-decoration: none !important;
    }
</style>