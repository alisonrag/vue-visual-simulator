<template>
    <img :src="img_src" alt="character" />
</template>

<script>
export default {
    name: "Character",
    data() {
        return {
            img_src: ""
        }
    },
    props: ['char'],
    mounted() {
        this.requestCharacter();
    }, methods: {
        requestCharacter: async function () {
            const character = JSON.stringify(this.char)
            const url = process.env.VUE_APP_API_URL + "&accesstoken=" + process.env.VUE_APP_API_KEY
            const self = this;
            const req = await fetch(url, {
                method: "POST",
                headers: { 'Content-Type': 'application/vnd.api+json' },
                body: character,
            }).then(function (response) {
                return response.blob();
            }).then(function (myBlob) {
                var objectURL = URL.createObjectURL(myBlob);
                self.img_src = objectURL;
            }).catch(function (error) {
                console.log('There has been a problem with character fetch operation: ' + error.message);
            });
        }
    },
    watch: {
        char: {
            immediate: true,
            deep: true,
            handler(newValue, oldValue) {
                this.requestCharacter();
            }
        }
    },
}
</script>

<style>
</style>