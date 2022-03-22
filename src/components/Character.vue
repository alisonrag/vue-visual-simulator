<template>
    <img :src="img_src" alt="character" />
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "Character",
    data() {
        return {
            img_src: ""
        }
    },
    methods: {
        requestCharacter: async function () {
            const char = JSON.stringify(this.character)
            const url = process.env.VUE_APP_API_URL + "&accesstoken=" + process.env.VUE_APP_API_KEY
            const self = this;
            const req = await fetch(url, {
                method: "POST",
                headers: { 'Content-Type': 'application/vnd.api+json' },
                body: char,
            }).then(function (response) {
                return response.blob();
            }).then(function (myBlob) {
                var objectURL = URL.createObjectURL(myBlob);
                self.img_src = objectURL;
            }).catch(function (error) {
                console.log('There has been a problem with character fetch operation: ' + error.message);
            });
            localStorage.setItem('character', char);
        }
    },
    computed: {
        ...mapState({
            character: state => state.character,
        }),
    },
    watch: {
        '$store.state.character': {
            deep: true,
            handler: 'requestCharacter'
        }
    },
}
</script>

<style>
</style>