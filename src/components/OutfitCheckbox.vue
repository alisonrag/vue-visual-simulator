<template>
    <div>
        <input class="form-check-input" type="checkbox" value="1" id="outfit" @change="outfitCheck($event)"/>
        <label class="form-check-label px-1" for="outfit">Outfit</label>
    </div>
</template>

<script>
export default {
    name: 'OutfitCheckbox',
    methods: {
        outfitCheck: function(event) {
             this.$emit("changeOutfit", event.target.checked)
        }
    }
}
</script>

<style>
</style>