<template>
    <div class="container-hair-color">
        <ul class="ul-hair-color">
            <li v-for="(color, index) in colors" :key="index" class="li-hair-color">
                <img
                    :src="require('../assets/color/color' + color.id + '_off.png')"
                    :alt="color.name"
                    :id="'color' + color.id"
                    :name="color.id"
                    class="img-hair-color"
                    @click="clickHairColor($event)"
                    @mouseover="overHairColor($event)"
                    @mouseleave="leaveHairColor($event)"
                />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HairColorList',
    data() {
        return {
            active: false,
            colors: [
                {
                    id: '01',
                    name: 'off'
                },
                {
                    id: '02',
                    name: 'yellow'
                },
                {
                    id: '03',
                    name: 'purple'
                },
                {
                    id: '04',
                    name: 'brown'
                },
                {
                    id: '05',
                    name: 'green'
                },
                {
                    id: '06',
                    name: 'blue'
                },
                {
                    id: '07',
                    name: 'white'
                },
                {
                    id: '08',
                    name: 'black'
                },
                {
                    id: '09',
                    name: 'red'
                },
            ]
        }
    },
    methods: {
        clickHairColor: function (event) {
            if (this.active)
                this.active.target.src = require('../assets/color/color' + this.active.target.name + '_off.png')

            this.active = event
            event.target.src = require('../assets/color/color' + event.target.name + '_press.png')
            setTimeout(function () {
                event.target.src = require('../assets/color/color' + event.target.name + '_on.png')
            }, 200)

        },
        overHairColor: function (event) {
            if (this.active && this.active.target.id != event.target.id)
                event.target.src = require('../assets/color/color' + event.target.name + '_over.png')
        },
        leaveHairColor: function (event) {
            if (this.active && this.active.target.id != event.target.id)
                event.target.src = require('../assets/color/color' + event.target.name + '_off.png')
        }
    }

}
</script>

<style scoped>
.ul-hair-color {
    list-style: none;
}
.li-hair-color {
    float: left;
    margin: 5px;
}
</style>