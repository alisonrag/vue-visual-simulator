<template>
  <div class="container-jobs">
    <table class="table table-bordered">
      <tbody>
        <tr>
          <td
            v-for="job in novice_job"
            :key="job.id"
            class="text-center"
            colspan="13"
            :class="{
              'job-selected': parseInt(job.id) == $store.state.character.job,
            }"
          >
            <img
              :id="job.id"
              :src="
                require('../../assets/img/job/icon_jobs_' + job.id + '.png')
              "
              :alt="job.name"
              @click="clickJob($event)"
              class="job-image"
            />
          </td>
        </tr>
        <tr>
          <td
            v-for="job in first_job"
            :key="job.id"
            class="text-center"
            :colspan="[job.colspan ? job.colspan : 2]"
            :class="{
              'job-selected': parseInt(job.id) == $store.state.character.job,
            }"
          >
            <img
              :id="job.id"
              :src="
                require('../../assets/img/job/icon_jobs_' + job.id + '.png')
              "
              :alt="job.name"
              @click="clickJob($event)"
              class="job-image"
            />
          </td>
        </tr>
        <tr>
          <td
            v-for="job in second_job"
            :key="job.id"
            class="text-center"
            :class="{
              'job-selected': parseInt(job.id) == $store.state.character.job,
            }"
          >
            <img
              :id="job.id"
              :src="
                require('../../assets/img/job/icon_jobs_' + job.id + '.png')
              "
              :alt="job.name"
              @click="clickJob($event)"
              class="job-image"
            />
          </td>
        </tr>
        <tr>
          <td
            v-for="job in transcendence_job"
            :key="job.id"
            class="text-center"
            :class="{
              'job-selected': parseInt(job.id) == $store.state.character.job,
            }"
          >
            <img
              :id="job.id"
              :src="
                require('../../assets/img/job/icon_jobs_' + job.id + '.png')
              "
              :alt="job.name"
              @click="clickJob($event)"
              class="job-image"
            />
          </td>
        </tr>
        <tr>
          <td
            v-for="job in third_job"
            :key="job.id"
            class="text-center"
            :class="{
              'job-selected': parseInt(job.id) == $store.state.character.job,
            }"
          >
            <img
              :id="job.id"
              :src="
                require('../../assets/img/job/icon_jobs_' + job.id + '.png')
              "
              :alt="job.name"
              @click="clickJob($event)"
              class="job-image"
            />
          </td>
        </tr>
        <tr>
          <td
            v-for="job in fourth_job"
            :key="job.id"
            class="text-center"
            :class="{
              'job-selected': parseInt(job.id) == $store.state.character.job,
            }"
          >
            <img
              :id="job.id"
              :src="
                require('../../assets/img/job/icon_jobs_' + job.id + '.png')
              "
              :alt="job.name"
              @click="clickJob($event)"
              class="job-image"
            />
          </td>
        </tr>
        <tr class="table-info">
        <td colspan="13"></td>
        </tr>
        <tr>
          <td
            v-for="job in expanded_first_job"
            :key="job.id"
            class="text-center"
            :colspan="[job.colspan ? job.colspan : 1]"
            :class="{
              'job-selected': parseInt(job.id) == $store.state.character.job,
            }"
          >
            <img
              :id="job.id"
              :src="
                require('../../assets/img/job/icon_jobs_' + job.id + '.png')
              "
              :alt="job.name"
              @click="clickJob($event)"
              class="job-image"
            />
          </td>
          <td colspan="13"></td>
        </tr>
        <tr>
          <td
            v-for="job in expanded_second_job"
            :key="job.id"
            class="text-center"
            :class="{
              'job-selected': parseInt(job.id) == $store.state.character.job,
            }"
          >
            <img
              :id="job.id"
              :src="
                require('../../assets/img/job/icon_jobs_' + job.id + '.png')
              "
              :alt="job.name"
              @click="clickJob($event)"
              class="job-image"
            />
          </td>
          <td colspan="2"></td>
          <td colspan="1"></td>
          <td colspan="1"></td>
          <td colspan="1"></td>
          <td colspan="13"></td>
        </tr>
        <tr>
          <td
            v-for="job in expanded_third_job"
            :key="job.id"
            class="text-center"
            :class="{
              'job-selected': parseInt(job.id) == $store.state.character.job,
            }"
          >
            <img
              :id="job.id"
              :src="
                require('../../assets/img/job/icon_jobs_' + job.id + '.png')
              "
              :alt="job.name"
              @click="clickJob($event)"
              class="job-image"
            />
          </td>
          <td colspan="1"></td>
          <td colspan="13"></td>
        </tr>
        <tr>
          <td
            v-for="job in expanded_fourth_job"
            :key="job.id"
            class="text-center"
            :class="{
              'job-selected': parseInt(job.id) == $store.state.character.job,
            }"
          >
            <img
              :id="job.id"
              :src="
                require('../../assets/img/job/icon_jobs_' + job.id + '.png')
              "
              :alt="job.name"
              @click="clickJob($event)"
              class="job-image"
            />
          </td>
          <td colspan="13"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      novice_job: [
        {
          id: 0,
          name: "Novice",
        },
      ],
      first_job: [
        {
          id: 1,
          name: "Swordman",
        },
        {
          id: 2,
          name: "Magician",
        },
        {
          id: 3,
          name: "Archer",
          colspan: 3,
        },
        {
          id: 4,
          name: "Acolyte",
        },
        {
          id: 5,
          name: "Merchant",
        },
        {
          id: 6,
          name: "Thief",
        },
      ],
      second_job: [
        {
          id: 7,
          name: "Knight",
        },
        {
          id: 14,
          name: "Crusader",
        },
        {
          id: 9,
          name: "Wizard",
        },
        {
          id: 16,
          name: "Sage",
        },
        {
          id: 11,
          name: "Hunter",
        },
        {
          id: 19,
          name: "Bard",
        },
        {
          id: 20,
          name: "Dancer",
        },
        {
          id: 8,
          name: "Priest",
        },
        {
          id: 15,
          name: "Monk",
        },
        {
          id: 10,
          name: "Blacksmith",
        },
        {
          id: 18,
          name: "Alchemist",
        },
        {
          id: 12,
          name: "Assassin",
        },
        {
          id: 17,
          name: "Rogue",
        },
      ],
      transcendence_job: [
        {
          id: 4008,
          name: "Lord Knight",
        },
        {
          id: 4015,
          name: "Paladin",
        },
        {
          id: 4010,
          name: "High Wizard",
        },
        {
          id: 4017,
          name: "Professor",
        },
        {
          id: 4012,
          name: "Sniper",
        },
        {
          id: 4020,
          name: "Clown",
        },
        {
          id: 4021,
          name: "Gypsy",
        },
        {
          id: 4009,
          name: "High Priest",
        },
        {
          id: 4016,
          name: "Champion",
        },
        {
          id: 4011,
          name: "Whitesmith",
        },
        {
          id: 4019,
          name: "Creator",
        },
        {
          id: 4013,
          name: "Assassin Cross",
        },
        {
          id: 4018,
          name: "Stalker",
        },
      ],
      third_job: [
        {
          id: 4060,
          name: "Rune Knight",
        },
        {
          id: 4066,
          name: "Royal Guard",
        },
        {
          id: 4061,
          name: "Warlock",
        },
        {
          id: 4067,
          name: "Sorcerer",
        },
        {
          id: 4062,
          name: "Ranger",
        },
        {
          id: 4068,
          name: "Minstrel",
        },
        {
          id: 4069,
          name: "Wanderer",
        },
        {
          id: 4063,
          name: "Arch Bishop",
        },
        {
          id: 4070,
          name: "Sura",
        },
        {
          id: 4064,
          name: "Mechanic",
        },

        {
          id: 4071,
          name: "Genetic",
        },
        {
          id: 4065,
          name: "Guillotine Cross",
        },

        {
          id: 4072,
          name: "Shadow Chaser",
        },
      ],
      fourth_job: [
        {
          id: 4252,
          name: "Dragon Knight",
        },
        {
          id: 4258,
          name: "Imperial Guard",
        },
        {
          id: 4255,
          name: "Arch Mage",
        },
        {
          id: 4261,
          name: "Elemental Master",
        },
        {
          id: 4257,
          name: "Windhawk",
        },
        {
          id: 4263,
          name: "Troubadour",
        },
        {
          id: 4264,
          name: "Trouvere",
        },
        {
          id: 4256,
          name: "Cardinal",
        },
        {
          id: 4262,
          name: "Inquisitor",
        },
        {
          id: 4253,
          name: "Meister",
        },
        {
          id: 4259,
          name: "Biolo",
        },
        {
          id: 4254,
          name: "Shadow Cross",
        },
        {
          id: 4260,
          name: "Abyss Chaser",
        },
      ],
      expanded_first_job: [
        {
          id: 4046,
          name: "Taekwon",
          colspan: 2,
        },
        {
          id: 25,
          name: "Ninja",
          colspan: 2,
        },
        {
          id: 24,
          name: "Gunslinger",
        },
        {
          id: 23,
          name: "Super Novice",
        },
        {
          id: 4218,
          name: "Summoner",
        },
      ],
      expanded_second_job: [
        {
          id: 4047,
          name: "Star Gladiator",
        },
        {
          id: 4049,
          name: "Soul Linker",
        },
      ],
      expanded_third_job: [
        {
          id: 4239,
          name: "Star Emperor",
        },
        {
          id: 4240,
          name: "Soul Reaper",
        },
        {
          id: 4211,
          name: "Kagerou",
        },
        {
          id: 4212,
          name: "Oboro",
        },
        {
          id: 4215,
          name: "Rebellion",
        },
        {
          id: 4190,
          name: "Ex. Super Novice",
        },
      ],
      expanded_fourth_job: [
        {
          id: 4302,
          name: "JT_SKY_EMPEROR",
        },
        {
          id: 4303,
          name: "JT_SOUL_ASCETIC",
        },
        {
          id: 4304,
          name: "JT_SHINKIRO",
        },
        {
          id: 4305,
          name: "JT_SHIRANUI",
        },
        {
          id: 4306,
          name: "JT_NIGHT_WATCH",
        },
        {
          id: 4307,
          name: "JT_HYPER_NOVICE",
        },
        {
          id: 4308,
          name: "JT_SPIRIT_HANDLER",
        },
      ],
      other_job: [
        {
          id: 22,
          name: "Wedding",
        },
        {
          id: 26,
          name: "Christmas",
        },
        {
          id: 27,
          name: "Summer",
        },
        {
          id: 30,
          name: "Summer",
        },
        {
          id: 28,
          name: "Hanbok",
        },
        {
          id: 29,
          name: "Oktoberfest",
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["SAVE_JOB"]),
    clickJob: function (event) {
      this.SAVE_JOB(parseInt(event.target.id));
    },
  },
};
</script>

<style scoped>
.job-selected {
  background-color: #0d6efd !important;
}
.jobs {
  height: 30px;
}

.job-image {
  align-self: flex-start;
}

.job-group {
}

.table {
  margin-bottom: 0px !important;
}
.table > :not(caption) > * > * {
  padding: 1px;
}
</style>
