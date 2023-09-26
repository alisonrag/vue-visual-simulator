import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import itemsJson from "../db/items.json";

const ITEM_TOP = itemsJson.filter((item) => item.top === true);
const ITEM_MID = itemsJson.filter((item) => item.mid === true);
const ITEM_BOT = itemsJson.filter((item) => item.bot === true);
const ITEM_GARMENT = itemsJson.filter((item) => item.garment === true);

export default createStore({
  state: {
    character: {
      gender: 1,
      job: ["0"],
      head: 1,
      headPalette: 1,
      headdir: 0,
      headgear: [0, 0, 0],
      garment: 0,
      bodyPalette: 0,
      action: 0,
      canvas: "200x200+100+150",
      outfit: 0,
    },
    itens: {
      top: ITEM_TOP,
      mid: ITEM_MID,
      bot: ITEM_BOT,
      garment: ITEM_GARMENT,
    },
    headgear_type: {
      isTop: false,
      isMid: false,
      isBot: false,
      isGarment: false,
    },
    headgear_top_item: {},
    headgear_mid_item: {},
    headgear_bottom_item: {},
    garment_item: {},
    cash_mount_checked: 0,
    regular_mount_checked: 0,
  },
  getters: {},
  mutations: {
    SAVE_GENDER(state, gender) {
      state.character.gender = gender;
    },
    SAVE_HAIR_COLOR(state, id) {
      state.character.headPalette = id - 1;
    },
    SAVE_HEAD(state, id) {
      state.character.head = id;
    },
    SAVE_BODY_PALETTE(state, id) {
      state.character.bodyPalette = id;
    },
    SAVE_JOB(state, id) {
      state.character.job[0] = id.toString();
    },
    SAVE_HEADGEAR_TOP(state, viewID) {
      state.character.headgear[1] = viewID;
    },
    SAVE_HEADGEAR_TOP_ITEM(state, item) {
      state.headgear_top_item = item;
    },
    SAVE_HEADGEAR_MID(state, viewID) {
      state.character.headgear[2] = viewID;
    },
    SAVE_HEADGEAR_MID_ITEM(state, item) {

      state.headgear_mid_item = item;
    },
    SAVE_HEADGEAR_BOTTOM(state, viewID) {
      state.character.headgear[0] = viewID;
    },
    SAVE_HEADGEAR_BOTTOM_ITEM(state, item) {
      state.headgear_bottom_item = item;
    },
    SAVE_GARMENT(state, viewID) {
      state.character.garment = viewID;
    },
    SAVE_GARMENT_ITEM(state, item) {
      state.garment_item = item;
    },
    SAVE_CHARACTER_POSITION(state, side) {
      if (side == "left") {
        let action = (state.character.action + 1) % 8;
        if (action == 0) {
          state.character.action -= 7;
        } else {
          state.character.action++;
        }
      } else {
        let action = state.character.action % 8;
        if (action == 0) {
          state.character.action += 7;
        } else {
          state.character.action--;
        }
      }
    },
    SAVE_CHARACTER_HEAD(state, side) {
      let positions = [1, 0, 2];
      let current_head_position = state.character.headdir;
      let index = positions.findIndex(
        (index) => index == current_head_position
      );
      if (side == "right") {
        if (index > 0) index--;
        state.character.headdir = positions[index];
      } else {
        if (index < 2) index++;
        state.character.headdir = positions[index];
      }
    },
    SAVE_ACTION(state, id) {
      let action = (state.character.action + 1) % 8;
      state.character.action = id + action - 1;
      if (state.character.action < 0) state.character.action = 0;
    },
    SAVE_OUTFIT(state, checked) {
      if (checked) {
        state.character.outfit = 1;
      } else {
        state.character.outfit = 0;
      }
    },
    SAVE_CASH_MOUNT(state, checked) {
      if (checked) {
        state.cash_mount_checked = 1;
      } else {
        state.cash_mount_checked = 0;
      }
    },
    SAVE_REGULAR_MOUNT(state, checked) {
      if (checked) {
        state.regular_mount_checked = 1;
      } else {
        state.regular_mount_checked = 0;
      }
    },
    RESET_CHARACTER(state, payload) {
      state.character.gender = 1;
      state.character.job = ["0"];
      state.character.head = 1;
      state.character.headPalette = 1;
      state.character.headgear = [0, 0, 0];
      state.character.garment = 0;
      state.character.bodyPalette = 0;
      state.character.action = 0;
      state.character.outfit = 0;
      state.character.headdir = 0;
    },
    SAVE_CHARACTER(state, character) {
      state.character = character;
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState()],
});
