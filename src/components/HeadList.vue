<template>
    <div class="container-head-list">
        <ul v-show="human_male" id="human_male" class="ul-head-list">
            <li v-for="(head, index) in heads.human_male" :key="index">
                <img
                    class="li-head-normal"
                    :class="{ 'li-head-select': parseInt(head) == $store.state.character.head }"
                    :src="require('../assets/head/img_hairstyle' + head + '.png')"
                    :id="head"
                    @click="clickHead($event)"
                />
            </li>
        </ul>
        <ul v-show="human_female" id="human_female" class="ul-head-list">
            <li v-for="(head, index) in heads.human_female" :key="index">
                <img
                    class="li-head-normal"
                    :class="{ 'li-head-select': parseInt(head) == $store.state.character.head }"
                    :src="require('../assets/head/img_hairstyle_girl' + head + '.png')"
                    :id="head"
                    @click="clickHead($event)"
                />
            </li>
        </ul>
        <ul v-show="doram_male" id="doram_male" class="ul-head-list">
            <li v-for="(head, index) in heads.doram_male" :key="index">
                <img
                    class="li-head-normal"
                    :class="{ 'li-head-select': parseInt(head) == $store.state.character.head }"
                    :src="require('../assets/head/img_hairstyle_doramboy' + head + '.png')"
                    :id="head"
                    @click="clickHead($event)"
                />
            </li>
        </ul>
        <ul v-show="doram_female" id="doram_female" class="ul-head-list">
            <li v-for="(head, index) in heads.doram_female" :key="index">
                <img
                    class="li-head-normal"
                    :class="{ 'li-head-select': parseInt(head) == $store.state.character.head }"
                    :src="require('../assets/head/img_hairstyle_doramgirl' + head + '.png')"
                    :id="head"
                    @click="clickHead($event)"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'HeadList',
    data() {
        return {
            heads: {
                human_male: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
                human_female: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
                doram_male: ['01', '02', '03', '04', '05', '06'],
                doram_female: ['01', '02', '03', '04', '05', '06'],
            },
            active: false,
            human_male: true,
            human_female: false,
            doram_male: false,
            doram_female: false,
        }
    },
    computed: {
        ...mapState({
            character: state => state.character
        })
    },
    methods: {
        ...mapMutations(['SAVE_HEAD']),
        clickHead: function (event) {
            this.SAVE_HEAD(parseInt(event.target.id))
        },
        changeHeadList: function () {
            this.human_male = this.human_female = this.doram_male = this.doram_female = false
            if (this.character.gender) {
                if (parseInt(this.character.job[0]) == 4218 || parseInt(this.character.job[0]) == 4308) {
                    this.doram_male = true
                } else {
                    this.human_male = true
                }
            } else {
                if (parseInt(this.character.job[0]) == 4218 || parseInt(this.character.job[0]) == 4308) {
                    this.doram_female = true
                } else {
                    this.human_female = true
                }
            }
        }

    }, watch: {
        '$store.state.character.gender': {
            deep: true,
            handler(newValue, oldValue) {
                this.changeHeadList()
            }
        },
         '$store.state.character.job': {
            deep: true,
            handler(newValue, oldValue) {
                this.changeHeadList()
            }
        }
    }
}
</script>

<style scoped>
.ul-head-list {
    list-style: none;
}

.li-head-normal,
.li-head-over,
.li-head-press,
.li-head-select {
    float: left;
    width: 36px;
    height: 37px;
    margin: 5px;
}
.li-head-normal {
    background: url("~@/assets/head/bt_hairstyle_normal.png");
}
.li-head-over {
    background: url("~@/assets/head/bt_hairstyle_over.png");
}
.li-head-press {
    background: url("~@/assets/head/bt_hairstyle_press.png");
}
.li-head-select {
    background: url("~@/assets/head/bt_hairstyle_select.png");
}
</style>