<template>
    <b-navbar type="dark" style="background-color: cornflowerblue;  flex-wrap: wrap;">
        <b-navbar-brand href="#" @click="filterCategory('')">Chirper</b-navbar-brand>
        <b-navbar-nav>
            <b-nav-item href="#" @click="filterCategory('')">Alle</b-nav-item>
            <b-nav-item href="#" @click="filterCategory('featured')">Featured</b-nav-item>
            <b-nav-item href="#" @click="filterCategory('friends')">Freunde</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
            <b-form-input size="sm" class="mr-4" placeholder="#hashtag suchen" v-model="hashtag"
                          @keyup.enter="filterHashtag"></b-form-input>
            <slot>
            </slot>
        </b-navbar-nav>



    </b-navbar>
</template>

<script>

    export default {
        name: "NavBar",
        data() {
            return {
                hashtag: '',
            }
        },
        props: {
            filterChirps: {
                type: Function,
                default: function () {

                }
            },
        },
        methods: {
            filterHashtag() {
                 if(this.hashtag.startsWith('#'))
            {
              this.$emit('filterChirps',this.hashtag);
            }
            else{
              this.$emit('filterChirps', '#' + this.hashtag);
            }
            
            },
            filterCategory(val) {
                this.$emit('filterChirps', val)
            },
        }
    }
</script>

<style scoped>

</style>