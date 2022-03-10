<template>
    <div class="container-head-list">
        <ul id="human_male" class="ul-head-list">
            <li v-for="(head, index) in heads.human_male" :key="index">
                <img
                    class="li-head-normal"
                    :src="require('../assets/head/img_hairstyle' + head + '.png')"
                    :id="'human_male' + head"
                    @click="clickHead($event)"
                    @mouseover="overHead($event)"
                    @mouseleave="leaveHead($event)"
                />
            </li>
        </ul>
        <ul id="human_female" class="ul-head-list">
            <li v-for="(head, index) in heads.human_female" :key="index">
                <img
                    class="li-head-normal"
                    :src="require('../assets/head/img_hairstyle_girl' + head + '.png')"
                    :id="'human_female' + head"
                    @click="clickHead($event)"
                    @mouseover="overHead($event)"
                    @mouseleave="leaveHead($event)"
                />
            </li>
        </ul>
        <ul id="doram_male" class="ul-head-list">
            <li v-for="(head, index) in heads.doram_male" :key="index">
                <img
                    class="li-head-normal"
                    :src="require('../assets/head/img_hairstyle_doramboy' + head + '.png')"
                    :id="'doram_male' + head"
                    @click="clickHead($event)"
                    @mouseover="overHead($event)"
                    @mouseleave="leaveHead($event)"
                />
            </li>
        </ul>
        <ul id="doram_female" class="ul-head-list">
            <li v-for="(head, index) in heads.doram_female" :key="index">
                <img
                    class="li-head-normal"
                    :src="require('../assets/head/img_hairstyle_doramgirl' + head + '.png')"
                    :id="'doram_female' + head"
                    @click="clickHead($event)"
                    @mouseover="overHead($event)"
                    @mouseleave="leaveHead($event)"
                />
            </li>
        </ul>
    </div>
</template>

<script>
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
            active: false
        }
    },
    methods: {
        clickHead: function (event) {
            if (this.active)
                this.active.target.className = 'li-head-normal'

            this.active = event
            event.target.className = 'li-head-press'
            setTimeout(function () {
                event.target.className = 'li-head-select'
            }, 200)
        },
        overHead: function (event) {
            if (this.active && this.active.target.id != event.target.id)
                event.target.className = 'li-head-over'
        },
        leaveHead: function (event) {
            if (this.active && this.active.target.id != event.target.id)
                event.target.className = 'li-head-normal'
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