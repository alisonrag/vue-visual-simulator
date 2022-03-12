<template>
    <div class="container-gender">
        <img
            :src="male_btn_src"
            @click="clickSexBtn(1)"
            @mouseover="overSexBtn(1)"
            @mouseleave="outSexBtn(1)"
        />
        <img
            :src="female_btn_src"
            @click="clickSexBtn(0)"
            @mouseover="overSexBtn(0)"
            @mouseleave="outSexBtn(0)"
        />
    </div>
</template>

<script>
export default {
    name: 'GenderList',
    data() {
        return {
            male_btn_src: require('../assets/gender/bt_male_on.png'),
            male_btn_state: 1,
            female_btn_src: require('../assets/gender/bt_female_off.png'),
            female_btn_state: 0,

        }
    },
    methods: {
        clickSexBtn: function (id) {
            if (id) {
                if (!this.male_btn_state) {
                    this.male_btn_state = 1
                    this.male_btn_src = require('../assets/gender/bt_male_press.png')
                    setTimeout(function () {
                        this.male_btn_src = require('../assets/gender/bt_male_on.png')
                    }, 250)
                    this.female_btn_state = 0
                    this.female_btn_src = require('../assets/gender/bt_female_off.png')
                }
            } else {
                if (!this.female_btn_state) {
                    this.female_btn_state = 1
                    this.female_btn_src = require('../assets/gender/bt_female_press.png')
                    setTimeout(function () {
                        this.female_btn_src = require('../assets/gender/bt_female_on.png')
                    }, 250)
                    this.male_btn_state = 0
                    this.male_btn_src = require('../assets/gender/bt_male_off.png')
                }
            }
            this.$emit("changeSex", id)
        },
        overSexBtn: function (id) {
            if (id) {
                if (!this.male_btn_state) {
                    this.male_btn_src = require('../assets/gender/bt_male_over.png')
                }
            } else {
                if (!this.female_btn_state) {
                    this.female_btn_src = require('../assets/gender/bt_female_over.png')
                }
            }
        },
        outSexBtn: function (id) {
            if (id) {
                if (this.male_btn_state) {
                    this.male_btn_src = require('../assets/gender/bt_male_on.png')
                } else {
                    this.male_btn_src = require('../assets/gender/bt_male_off.png')
                }
            } else {
                if (this.female_btn_state) {
                    this.female_btn_src = require('../assets/gender/bt_female_on.png')
                } else {
                    this.female_btn_src = require('../assets/gender/bt_female_off.png')
                }

            }
        }
    }
}
</script>

<style scoped>
</style>