<template>
  <ul class="ul-item-list">
    <li
      v-for="(item, index) in items"
      v-show="item.name.toLowerCase().includes(item_filter.toLowerCase())"
      class="li-item"
      :key="item.id"
    >
      <img
        :src="
          'https://static.divine-pride.net/images/items/item/' +
          item.id +
          '.png'
        "
        class="img-item"
        :class="{
          'item-selected': parseInt(item.id) == $store.state.garment_id,
          'item-disabled': parseInt(item.viewID) == 0,
        }"
        :viewID="item.viewID"
        :id="item.id"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        :title="item.name"
        :name="item.name"
        @click="clickItem($event)"
      />
    </li>
  </ul>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "ItemListGarmet",
  props: ["item_filter"],
  data() {
    return {
      items: [
        { id: 0, name: "X", viewID: 0 },
        { id: 20765, name: "Asas Imaculadas de Arcanjo", viewID: 1 },
        { id: 20512, name: "Mochila de Caça", viewID: 2 },
        { id: 20521, name: "Miau-chila de Bichano Preto", viewID: 2 },
        { id: 20764, name: "Asas Negras do Arcanjo", viewID: 3 },
        { id: 20727, name: "Asas Douradas da Justiça", viewID: 5 },
        { id: 20737, name: "Asas Pavão Roxo", viewID: 6 },
        { id: 20746, name: "Visual de Asas da Fênix", viewID: 8 },
        { id: 20761, name: "Visual de Asas de Alfheim", viewID: 9 },
        { id: 20762, name: "Asas do Tormento", viewID: 10 },
        { id: 20501, name: "Asas Mecanizadas", viewID: 11 },
        { id: 20502, name: "Asa de Morcego Mutante", viewID: 12 },
        { id: 20504, name: "Asas da Sarakura", viewID: 14 },
        { id: 20507, name: "Mochila de Poring", viewID: 16 },
        { id: 20509, name: "Asas de Uriel", viewID: 17 },
        { id: 20510, name: "Asas das Mil Lâminas", viewID: 19 },
        { id: 20587, name: "Asas da Justiça", viewID: 20 },
        { id: 20511, name: "Asas Azuis de Fada", viewID: 21 },
        { id: 20513, name: "Mochila Funcional", viewID: 22 },
        { id: 20514, name: "Espada de Thanatos", viewID: 23 },
        { id: 20516, name: "Asas de Miguel", viewID: 24 },
        { id: 20517, name: "Miau-chila de Bichano", viewID: 25 },
        { id: 20518, name: "Deviruchila", viewID: 27 },
        { id: 20526, name: "Asas Delicadas de Arcanjo", viewID: 34 },
        { id: 20527, name: "Asas da Borboleta do Vale", viewID: 35 },
        { id: 20528, name: "Asas Douradas da Borboleta", viewID: 36 },
        { id: 20530, name: "Asas de Gabriel", viewID: 37 },
        { id: 20573, name: "Essência Violeta", viewID: 39 },
        { id: 20541, name: "Asas Etéreas", viewID: 42 },
        { id: 20543, name: "Mochila de Poring Assombrado", viewID: 44 },
        { id: 20545, name: "Asas de Natal", viewID: 45 },
        { id: 20546, name: "Sino Espalhafatoso", viewID: 46 },
        { id: 20570, name: "Mochocochila", viewID: 47 },
        { id: 20571, name: "Voo das Valquírias", viewID: 48 },
        { id: 20572, name: "Liberdade Amorosa", viewID: 50 },
        { id: 20574, name: "Mochila do Aluno Rebelde", viewID: 51 },
        { id: 20575, name: "Mochila do Aluno Esperto", viewID: 52 },
        { id: 20576, name: "Garfo do Glutão", viewID: 53 },
        { id: 20577, name: "Borboleta de Balão", viewID: 54 },
        { id: 31737, name: "Asas de Lúcifer", viewID: 55 },
        { id: 20578, name: "Asas de Raquel", viewID: 56 },
        { id: 20579, name: "Asas de Raphael", viewID: 57 },
        { id: 20987, name: "Mochila de Angeling", viewID: 58 },
        { id: 20582, name: "Mochila do Pimpão", viewID: 60 },
        { id: 480069, name: "Asas Encantadas de Arcanjo", viewID: 61 },
        { id: 20584, name: "Cauda de Arbusto", viewID: 62 },
        { id: 20585, name: "Mochilurso", viewID: 63 },
        { id: 20586, name: "Brilho da Lua Crescente", viewID: 64 },
        { id: 20588, name: "Vassoura da Bruxa", viewID: 65 },
        { id: 20589, name: "Asa Mecânica", viewID: 66 },
        { id: 20590, name: "Cruz do Druida Maligno", viewID: 67 },
        { id: 20591, name: "Arco da Coragem", viewID: 68 },
        { id: 480052, name: "Laçarote da Retaguarda", viewID: 69 },
        { id: 20592, name: "Bolsa de Brinquedos", viewID: 70 },
        { id: 20593, name: "Asas das Lágrimas de Gelo", viewID: 71 },
        { id: 480055, name: "Asas Encantadas de Rudra", viewID: 72 },
        { id: 480056, name: "Asas Amaldiçoadas de Arcanjo", viewID: 73 },
        { id: 480058, name: "Asas Áureas de Arcanjo", viewID: 75 },
        { id: 20594, name: "Laço Pomposo", viewID: 76 },
        { id: 20597, name: "Foice Maligna", viewID: 79 },
        { id: 20598, name: "Miau-chila de Bichano Mágico", viewID: 80 },
        { id: 20596, name: "Mochila Zipper", viewID: 81 },
        { id: 480071, name: "Recipiente das Areias", viewID: 82 },
        { id: 20599, name: "Asas de Sakura", viewID: 83 },
        { id: 20602, name: "Voo dos Jotun", viewID: 84 },
        { id: 20603, name: "Asas Camaleônicas", viewID: 85 },
        { id: 20604, name: "Véu Abençoado", viewID: 86 },
        { id: 20605, name: "Folha-chuva", viewID: 87 },
        { id: 480082, name: "Asas Radiantes", viewID: 88 },
        { id: 20612, name: "Escudo de Oridecon", viewID: 90 },
        { id: 20607, name: "Voo de Baldur", viewID: 91 },
        { id: 20988, name: "Asas Mecânicas de Borboleta", viewID: 92 },
        { id: 20989, name: "Parafuso de Corda", viewID: 93 },
        { id: 20992, name: "Asas do Paraíso", viewID: 95 },
        { id: 480093, name: "Cetro da Dinastia", viewID: 97 },
        { id: 480095, name: "Mochila de Coelho", viewID: 98 },
        { id: 480096, name: "Casaco Aconchegante", viewID: 99 },
        { id: 20613, name: "Pernas de Aranha", viewID: 101 },
        { id: 20614, name: "Sussurros de Kiel", viewID: 102 },
        { id: 480108, name: "Cesta de Porings", viewID: 103 },
        { id: 480107, name: "Espadas Cruzadas", viewID: 104 },
        { id: 480111, name: "Buquê de Asas", viewID: 106 },
        { id: 480110, name: "Mochila do Doram Aventureiro", viewID: 107 },
        { id: 480117, name: "Guitarra de Rockstar", viewID: 108 },
        { id: 480126, name: "Tubarão Fofinho", viewID: 109 },
        { id: 480119, name: "Chave de Nifflheim", viewID: 110 },
        { id: 480121, name: "Asas Orientais", viewID: 111 },
        { id: 480122, name: "Asas Carnavalescas", viewID: 112 },
        { id: 480123, name: "Asas Floridas", viewID: 113 },
        { id: 480118, name: "Espada do General", viewID: 114 },
        { id: 480127, name: "Chapéu Pendurado de Palha", viewID: 115 },
        { id: 480129, name: "Sorvetinho Triplo", viewID: 116 },
        { id: 480130, name: "Raguaraná", viewID: 117 },
        { id: 480137, name: "Mochila de Filir", viewID: 118 },
        { id: 480152, name: "Talheres do Comilão", viewID: 121 },
        { id: 480155, name: "Capa de Herói", viewID: 122 },
        { id: 480158, name: "Mochila Lunática", viewID: 123 },
        { id: 480167, name: "Báculo do Coração de Chocolate", viewID: 124 },
        { id: 480169, name: "Guitarra de Deviling", viewID: 125 },
        { id: 480168, name: "Asas Musicais", viewID: 126 },
        { id: 480176, name: "Cajado de Rosas Azuis", viewID: 127 },
        { id: 480187, name: "Laçarote de Casamento", viewID: 130 },
        { id: 480189, name: "Asas Amaldiçoadas de Valquíria", viewID: 131 },
        { id: 20618, name: "Mochila de Coelho Angorá", viewID: 133 },
        { id: 480204, name: "Laçarote de Sininho", viewID: 135 },
        { id: 480207, name: "Mochila Multiuso", viewID: 137 },
        { id: 480236, name: "Grimório Mágico Antigo", viewID: 149 },
        { id: 480246, name: "Lança de Valquíria", viewID: 154 },
        { id: 480247, name: "Mochila Gigante de Angeling", viewID: 155 },
        { id: 480237, name: "Katanas do Mestre Tengu", viewID: 158 },
        { id: 410200, name: "Coelho Serviçal das Maravilhas", viewID: 2362 },
        { id: 410201, name: "Caveiras Místicas", viewID: 2363 },
        { id: 20506, name: "Manto Invisível", viewID: 0 },
        { id: 20515, name: "Círculo de Conjuração", viewID: 0 },
        { id: 20519, name: "Aura de Folhas de Outono", viewID: 0 },
        { id: 20522, name: "Miaura", viewID: 0 },
        { id: 20524, name: "Asas Holográficas", viewID: 0 },
        { id: 20535, name: "Holograma Futurista", viewID: 0 },
        { id: 20537, name: "Folhas Dançantes", viewID: 0 },
        { id: 20538, name: "Círculo Arco-íris", viewID: 0 },
        { id: 20547, name: "Mil e Uma Assombrações", viewID: 0 },
        { id: 20548, name: "Aura de Poring", viewID: 0 },
        { id: 20556, name: "Aura Negra do Iniciante", viewID: 0 },
        { id: 20567, name: "Aura Gótica", viewID: 0 },
        { id: 20990, name: "Capa de Engrenagens", viewID: 0 },
        { id: 480097, name: "Aura Nevada", viewID: 0 },
        { id: 20549, name: "Aura Cerúlea do Iniciante", viewID: 0 },
        { id: 20564, name: "Aura Maligna", viewID: 0 },
        { id: 20559, name: "Aura Escarlate", viewID: 0 },
        { id: 480131, name: "Chama Circular", viewID: 0 },
        { id: 20565, name: "Aura Trovejante", viewID: 0 },
        { id: 20568, name: "Aura Dourada", viewID: 0 },
        { id: 20560, name: "Aura Lazuli", viewID: 0 },
        { id: 20561, name: "Aura Púrpura", viewID: 0 },
        { id: 20562, name: "Aura Azul", viewID: 0 },
        { id: 20566, name: "Aura Argêntea", viewID: 0 },
        { id: 20569, name: "Aura Esmeralda", viewID: 0 },
        { id: 20550, name: "Aura Púrpura do Iniciante", viewID: 0 },
        { id: 20551, name: "Aura Azul do Iniciante", viewID: 0 },
        { id: 20555, name: "Aura Prateada do Iniciante", viewID: 0 },
        { id: 20558, name: "Aura Esmeralda do Iniciante", viewID: 0 },
        { id: 20553, name: "Aura Rosa do Iniciante", viewID: 0 },
        { id: 20554, name: "Aura Invernal do Iniciante", viewID: 0 },
        { id: 20557, name: "Aura Dourada do Iniciante", viewID: 0 },
        { id: 20601, name: "Aura Carmesim do Iniciante", viewID: 0 },
        { id: 20583, name: "Estrela Guia", viewID: 0 },
        { id: 20608, name: "Aura Anil do Iniciante", viewID: 0 },
        { id: 20609, name: "Aura Anil", viewID: 0 },
        { id: 20610, name: "Aura Cinza do Iniciante", viewID: 0 },
        { id: 20611, name: "Aura Cinza", viewID: 0 },
        { id: 20552, name: "Aura Verde do Iniciante", viewID: 0 },
        { id: 20563, name: "Aura Esverdeada", viewID: 0 },
        { id: 20950, name: "Aura Alaranjada", viewID: 0 },
        { id: 24422, name: "Aura Laranja do Iniciante", viewID: 0 },
        { id: 480205, name: "Aura Astrológica", viewID: 0 },
      ],
      active: false,
    };
  },
  methods: {
    ...mapMutations(["SAVE_GARMENT", "SAVE_GARMENT_ID", "SAVE_GARMENT_NAME"]),
    clickItem: function (event) {
      this.SAVE_GARMENT(parseInt(event.target.getAttribute("viewID")));
      this.SAVE_GARMENT_ID(parseInt(event.target.getAttribute("id")));
      this.SAVE_GARMENT_NAME(event.target.getAttribute("name"));
    },
  },
};
</script>

<style scoped>
.ul-item-list {
  list-style: none;
  padding-top: 2px;
  padding-left: 1rem;
}

.li-item {
  float: left;
  width: 32px;
  height: 32px;
  background: url("~@/assets/img/interface/item-bg.png");
}

.img-item {
  width: 24px;
  height: 24px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.item-selected {
  outline: 2px dashed #0d6efd;
  border-radius: 5px;
  filter: contrast(105%) brightness(110%);
}

.item-disabled {
  opacity: 0.5;
  background: url("~@/assets/img/interface/forbidden_item.png");
}
</style>
