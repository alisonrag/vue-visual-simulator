<template>
  <ul class="ul-item-list">
    <li v-for="(item, index) in items" class="li-item" :key="index">
      <img
        :src="'https://static.divine-pride.net/images/items/item/' + item.id + '.png'"
        :alt="item.name"
        class="img-item"
        :viewID="item.viewID"
        :id="item.id"
        @click="clickItem($event)"
      />
    </li>
  </ul>
</template>

<script>
export default {
  name: "ItemListGarmet",
  data() {
    return {
      items: [
        { "id": 20506, "name": "Manto Invisível", "viewID": 0 }, { "id": 20515, "name": "Círculo de Conjuração", "viewID": 0 }, { "id": 20519, "name": "Aura de Folhas de Outono", "viewID": 0 }, { "id": 20522, "name": "Miaura", "viewID": 0 }, { "id": 20535, "name": "Holograma Futurista", "viewID": 0 }, { "id": 20537, "name": "Folhas Dançantes", "viewID": 0 }, { "id": 20538, "name": "Círculo Arco-íris", "viewID": 0 }, { "id": 20547, "name": "Mil e Uma Assombrações", "viewID": 0 }, { "id": 20548, "name": "Aura de Poring", "viewID": 0 }, { "id": 20567, "name": "Aura Gótica", "viewID": 0 }, { "id": 20564, "name": "Aura Maligna", "viewID": 0 }, { "id": 20559, "name": "Aura Escarlate", "viewID": 0 }, { "id": 480131, "name": "Chama Circular", "viewID": 0 }, { "id": 20565, "name": "Aura Trovejante", "viewID": 0 }, { "id": 20568, "name": "Aura Dourada", "viewID": 0 }, { "id": 20560, "name": "Aura Lazuli", "viewID": 0 }, { "id": 20561, "name": "Aura Púrpura", "viewID": 0 }, { "id": 20562, "name": "Aura Azul", "viewID": 0 }, { "id": 20566, "name": "Aura Argêntea", "viewID": 0 }, { "id": 20569, "name": "Aura Esmeralda", "viewID": 0 }, { "id": 20765, "name": "Asas Imaculadas de Arcanjo", "viewID": 1 }, { "id": 20512, "name": "Mochila de Caça", "viewID": 2 }, { "id": 20521, "name": "Miau-chila de Bichano Preto", "viewID": 2 }, { "id": 20764, "name": "Asas Negras do Arcanjo", "viewID": 3 }, { "id": 20727, "name": "Asas Douradas da Justiça", "viewID": 5 }, { "id": 20737, "name": "Asas Pavão Roxo", "viewID": 6 }, { "id": 20746, "name": "Visual de Asas da Fênix", "viewID": 8 }, { "id": 20761, "name": "Visual de Asas de Alfheim", "viewID": 9 }, { "id": 20762, "name": "Asas do Tormento", "viewID": 10 }, { "id": 20501, "name": "Asas Mecanizadas", "viewID": 11 }, { "id": 20502, "name": "Asa de Morcego Mutante", "viewID": 12 }, { "id": 20504, "name": "Asas da Sarakura", "viewID": 14 }, { "id": 20507, "name": "Mochila de Poring", "viewID": 16 }, { "id": 20509, "name": "Asas de Uriel", "viewID": 17 }, { "id": 20510, "name": "Asas das Mil Lâminas", "viewID": 19 }, { "id": 20587, "name": "Asas da Justiça", "viewID": 20 }, { "id": 20511, "name": "Asas Azuis de Fada", "viewID": 21 }, { "id": 20514, "name": "Espada de Thanatos", "viewID": 23 }, { "id": 20516, "name": "Asas de Miguel", "viewID": 24 }, { "id": 20517, "name": "Miau-chila de Bichano", "viewID": 25 }, { "id": 20518, "name": "Deviruchila", "viewID": 27 }, { "id": 20527, "name": "Asas da Borboleta do Vale", "viewID": 35 }, { "id": 20528, "name": "Asas Douradas da Borboleta", "viewID": 36 }, { "id": 20530, "name": "Asas de Gabriel", "viewID": 37 }, { "id": 20573, "name": "Essência Violeta", "viewID": 39 }, { "id": 20541, "name": "Asas Etéreas", "viewID": 42 }, { "id": 20543, "name": "Mochila de Poring Assombrado", "viewID": 44 }, { "id": 20545, "name": "Asas de Natal", "viewID": 45 }, { "id": 20546, "name": "Sino Espalhafatoso", "viewID": 46 }, { "id": 20570, "name": "Mochocochila", "viewID": 47 }, { "id": 20571, "name": "Voo das Valquírias", "viewID": 48 }, { "id": 20572, "name": "Liberdade Amorosa", "viewID": 50 }, { "id": 20574, "name": "Mochila do Aluno Rebelde", "viewID": 51 }, { "id": 20575, "name": "Mochila do Aluno Esperto", "viewID": 52 }, { "id": 20576, "name": "Garfo do Glutão", "viewID": 53 }, { "id": 20577, "name": "Borboleta de Balão", "viewID": 54 }, { "id": 31737, "name": "Asas de Lúcifer", "viewID": 55 }, { "id": 20578, "name": "Asas de Raquel", "viewID": 56 }, { "id": 20579, "name": "Asas de Raphael", "viewID": 57 }, { "id": 20582, "name": "Mochila do Pimpão", "viewID": 60 }, { "id": 480069, "name": "Asas Encantadas de Arcanjo", "viewID": 61 }, { "id": 20584, "name": "Cauda de Arbusto", "viewID": 62 }, { "id": 20585, "name": "Mochilurso", "viewID": 63 }, { "id": 20586, "name": "Brilho da Lua Crescente", "viewID": 64 }, { "id": 20588, "name": "Vassoura da Bruxa", "viewID": 65 }, { "id": 20589, "name": "Asa Mecânica", "viewID": 66 }, { "id": 20590, "name": "Cruz do Druida Maligno", "viewID": 67 }, { "id": 20591, "name": "Arco da Coragem", "viewID": 68 }, { "id": 480052, "name": "Laçarote da Retaguarda", "viewID": 69 }, { "id": 20592, "name": "Bolsa de Brinquedos", "viewID": 70 }, { "id": 20593, "name": "Asas das Lágrimas de Gelo", "viewID": 71 }, { "id": 480056, "name": "Asas Amaldiçoadas de Arcanjo", "viewID": 73 }, { "id": 480058, "name": "Asas Áureas de Arcanjo", "viewID": 75 }, { "id": 20594, "name": "Laço Pomposo", "viewID": 76 }, { "id": 20597, "name": "Foice Maligna", "viewID": 79 }, { "id": 20598, "name": "Miau-chila de Bichano Mágico", "viewID": 80 }, { "id": 480071, "name": "Recipiente das Areias", "viewID": 82 }, { "id": 20599, "name": "Asas de Sakura", "viewID": 83 }, { "id": 20602, "name": "Voo dos Jotun", "viewID": 84 }, { "id": 20603, "name": "Asas Camaleônicas", "viewID": 85 }, { "id": 20604, "name": "Véu Abençoado", "viewID": 86 }, { "id": 20605, "name": "Folha-chuva", "viewID": 87 }, { "id": 480082, "name": "Asas Radiantes", "viewID": 88 }, { "id": 20612, "name": "Escudo de Oridecon", "viewID": 90 }, { "id": 20607, "name": "Voo de Baldur", "viewID": 91 }, { "id": 20988, "name": "Asas Mecânicas de Borboleta", "viewID": 92 }, { "id": 20989, "name": "Parafuso de Corda", "viewID": 93 }, { "id": 20992, "name": "Asas do Paraíso", "viewID": 95 }, { "id": 480093, "name": "Cetro da Dinastia", "viewID": 97 }, { "id": 480095, "name": "Mochila de Coelho", "viewID": 98 }, { "id": 480096, "name": "Casaco Aconchegante", "viewID": 99 }, { "id": 20613, "name": "Pernas de Aranha", "viewID": 101 }, { "id": 20614, "name": "Sussurros de Kiel", "viewID": 102 }, { "id": 480108, "name": "Cesta de Porings", "viewID": 103 }, { "id": 480107, "name": "Espadas Cruzadas", "viewID": 104 }, { "id": 480111, "name": "Buquê de Asas", "viewID": 106 }, { "id": 480110, "name": "Mochila do Doram Aventureiro", "viewID": 107 }, { "id": 480126, "name": "Tubarão Fofinho", "viewID": 109 }, { "id": 480121, "name": "Asas Orientais", "viewID": 111 }, { "id": 480123, "name": "Asas Floridas", "viewID": 113 }, { "id": 480118, "name": "Espada do General", "viewID": 114 }, { "id": 480127, "name": "Chapéu Pendurado de Palha", "viewID": 115 }, { "id": 480129, "name": "Sorvetinho Triplo", "viewID": 116 }, { "id": 480152, "name": "Talheres do Comilão", "viewID": 121 }
      ],
      active: false,
    }
  }, methods: {
    clickItem: function (event) {
      if (this.active)
        this.active.target.classList.remove('item-selected')

      this.active = event
      this.active.target.classList.add('item-selected')
      this.$emit("changeGarmet", { 'viewID': parseInt(event.target.getAttribute('viewID')), 'itemID': parseInt(event.target.getAttribute('id')) })
    }
  }
}
</script>
  
<style scoped>
.ul-item-list {
  list-style: none;
}

.li-item {
  float: left;
  width: 32px;
  height: 32px;
  background: url("~@/assets/interface/item-bg.png");
}

.img-item {
  width: 24px;
  height: 24px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.item-selected {
  border: 1px solid #4bb1f5;
  border-radius: 5px;
}
</style>