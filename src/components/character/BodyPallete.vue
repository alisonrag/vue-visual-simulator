<template>
    <div class="container-body-pallete">
        <h6>{{$t("clothesColor")}}</h6>
        <ul class="ul-body-pallete-list">
            <li
                v-for="(pallete, index) in body_pallete_list"
                :key="index"
                class="li-body-pallete btn btn-outline-primary"
                :class="{ 'active': pallete.id == $store.state.character.bodyPalette }"
                :id="pallete.id"
                @click="clickBodyPallete($event)"
            >
                {{ pallete.id }}
            </li>
        </ul>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'BodyPallet',
    data() {
        return {
            body_pallete_list: [
                {
                    id: 0,
                    name: 'regular'
                },
                {
                    id: 1,
                    name: 'blue'
                },
                {
                    id: 2,
                    name: 'red'
                },
                {
                    id: 3,
                    name: 'green'
                },
            ],
        }
    }, methods: {
        ...mapMutations(['SAVE_BODY_PALETTE']),
        clickBodyPallete: function (event) {
            this.SAVE_BODY_PALETTE(parseInt(event.target.getAttribute('id')))
        }
    }
}
</script>

<style scoped>
.ul-body-pallete-list {
    list-style: none;
}
.li-body-pallete {
    float: left;
    padding: 2px 8px;
    margin: 4px;
}
</style>