<template>
  <div class="container-body-pallete">
      <ul class="ul-body-pallete-list">
          <li v-for="(pallete, index) in body_pallete_list" :key="index" class="li-body-pallete" @click="clickBodyPallete(pallete.id)">
              <span :tooltip="pallete.name">{{pallete.id}}</span>
          </li>
      </ul>
  </div>
</template>

<script>
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
            ]
        }
    }, methods: {
        clickBodyPallete: function(id) {
            this.$emit("changeBodyPallete", id)
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
    border: solid 1px;
    border-color: black;
    padding: 5px;
    margin: 5px;
}
</style>