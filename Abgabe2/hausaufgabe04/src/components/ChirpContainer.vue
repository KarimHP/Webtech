<template>
    <b-container class="pt-3">
        <b-row>
            <b-col cols="12" sm="12" md="6" lg="4" v-for="(item,idx) in chirps" :key="idx">
                <chirp-card :detail="item"></chirp-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

    import ChirpCard from "./ChirpCard";
    export default {
        name: "ChirpContainer",
        components: {ChirpCard},
        props:{
            chirps:{
                type:Array,
                default:()=>[]
            }
        }
    };
</script>
