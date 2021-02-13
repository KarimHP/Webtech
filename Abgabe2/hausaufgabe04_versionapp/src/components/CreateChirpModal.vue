<template>
    <div>
        <b-button v-b-modal.addModal size="sm" variant="outline-light">Chirpen!</b-button>
        <b-modal id="addModal" hide-footer>
            <template #modal-title>
                Neuen Chirp erstellen
            </template>
            <div class="d-block">
                <h6>Dein Name*</h6>
                <b-form-input v-model="newChirp.author" required :state="validation.author">
                </b-form-input>
                <br>
                <h6>Deine Nachrichit*</h6>
                <b-form-textarea
                        placeholder="Max. 200 Zeichen"
                        rows="3"
                        v-model="newChirp.text"
                        :state="validation.text"
                        maxlength="200"
                ></b-form-textarea>
                <small class="float-right">Noch {{200 - newChirp.text.length}} Zeichen ubrig</small>

                <h6 class="mt-3">Hashtags:</h6>
                <b-form-input placeholder="z.B #hashtags1 #hashtags2"
                              v-model="hashtagString"
                              :state="validation.hashtags">
                </b-form-input>
                <small>Hashtags durch leerzeichen getrennt angeben</small>
            </div>
            <b-button class="mt-3 float-right mr-1" @click="addChirp">Ok</b-button>
            <b-button class="mt-3 float-right mr-1" @click="$bvModal.hide('addModal')">Cancel</b-button>
        </b-modal>
    </div>
</template>

<script>
    export default {
        name: "CreateChirpModal",
        data() {
            return {
                hashtagString: "",
                newChirp: {
                    author: "",
                    text: "",
                    hashtags: [],
                },
                validation: {
                    author: null,
                    text: null,
                    hashtags: null
                }
            };
        },
        props: {
            addedChirp: {
                type: Function,
                default: function () {

                }
            },
        },
        methods: {
            addChirp(bvModalEvt) {
                if (!this.newChirp.author) {
                    this.validation.author = false
                } else if (!this.newChirp.text.length > 0 && !this.newChirp.text.length <= 200) {
                    this.validation.author = null
                    this.validation.text = false
                } else {
                    this.validation = {
                        author: null,
                        text: null,
                        hashtags: null
                    };
                    this.newChirp.hashtags = this.hashtagString
                        .split(" ")
                        .map((h) => "#" + h.replace("#", ""));
                    this.$emit("addedChirp", this.newChirp);
                    this.$bvModal.hide('addModal')
                    this.newChirp = {
                        author: '',
                        text: "",
                        hashtags: ''
                    }
                }
            },
        },
    };
</script>

<style scoped>
</style>