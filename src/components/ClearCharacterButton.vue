<template>
    <div>
        <button
            type="button"
            class="btn btn-outline-danger btn-sm"
            @click="resetCharacter()"
        >Reset Character</button>
    </div>
</template>

<script>
export default {
    name: 'ClearCharacterButton',
    methods: {
        resetCharacter: function () {
            this.$emit("resetCharacter", {
                "gender": 1,
                "job": ["0"],
                "head": 1,
                "headPalette": 1,
                "headdir": 0,
                "headgear": [0, 0, 0],
                "garment": 0,
                "bodyPalette": 0,
                "action": 0,
                "canvas": "200x200+100+150",
                "updated": true
            })
        }
    }

}
</script>

<style>
</style>