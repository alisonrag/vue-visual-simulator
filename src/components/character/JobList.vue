<template>
  <table class="table table-responsive table-bordered">
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
            :src="require('../../assets/img/job/icon_jobs_' + job.id + '.png')"
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
            :src="require('../../assets/img/job/icon_jobs_' + job.id + '.png')"
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
            :src="require('../../assets/img/job/icon_jobs_' + job.id + '.png')"
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
            :src="require('../../assets/img/job/icon_jobs_' + job.id + '.png')"
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
            :src="require('../../assets/img/job/icon_jobs_' + job.id + '.png')"
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
            :src="require('../../assets/img/job/icon_jobs_' + job.id + '.png')"
            :alt="job.name"
            @click="clickJob($event)"
            class="job-image"
          />
        </td>
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
            :src="require('../../assets/img/job/icon_jobs_' + job.id + '.png')"
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
            :src="require('../../assets/img/job/icon_jobs_' + job.id + '.png')"
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
            :src="require('../../assets/img/job/icon_jobs_' + job.id + '.png')"
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
            :src="require('../../assets/img/job/icon_jobs_' + job.id + '.png')"
            :alt="job.name"
            @click="clickJob($event)"
            class="job-image"
          />
        </td>
      </tr>
    </tbody>
  </table>
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
      regular_mount_list: {
        7: 13,
        14: 21,
        4008: 4014,
        4015: 4022,
        4060: 4081,
        4073: 4083,
        4062: 4085,
        4064: 4087,
        4066: 4082,
        4257: 4278,
        4253: 4279,
        4252: 4280,
        4258: 4281,
      },
      cash_mount_list: {
        0: 4124,
        1: 4116,
        2: 4130,
        3: 4122,
        4: 4126,
        5: 4119,
        6: 4141,
        7: 4199,
        8: 4156,
        9: 4134,
        10: 4138,
        11: 4154,
        12: 4145,
        14: 4203,
        15: 4125,
        16: 4131,
        17: 4142,
        18: 4137,
        19: 4149,
        20: 4147,
        23: 4128,
        24: 4115,
        25: 4114,
        4001: 4183,
        4002: 4184,
        4003: 4185,
        4004: 4186,
        4005: 4187,
        4006: 4188,
        4007: 4189,
        4008: 4200,
        4009: 4157,
        4010: 4136,
        4011: 4118,
        4012: 4150,
        4013: 4146,
        4015: 4204,
        4016: 4139,
        4017: 4135,
        4018: 4144,
        4019: 4121,
        4020: 4153,
        4021: 4152,
        4023: 4158,
        4024: 4159,
        4025: 4160,
        4026: 4161,
        4027: 4162,
        4028: 4163,
        4029: 4181,
        4030: 4207,
        4031: 4194,
        4032: 4195,
        4033: 4196,
        4034: 4164,
        4035: 4165,
        4037: 4210,
        4038: 4166,
        4039: 4167,
        4040: 4168,
        4041: 4169,
        4042: 4170,
        4043: 4171,
        4045: 4172,
        4046: 4155,
        4047: 4123,
        4049: 4117,
        4054: 4202,
        4055: 4133,
        4056: 4198,
        4057: 4129,
        4058: 4197,
        4059: 4140,
        4060: 4202,
        4061: 4133,
        4062: 4198,
        4063: 4129,
        4064: 4197,
        4065: 4140,
        4066: 4201,
        4067: 4132,
        4068: 4148,
        4069: 4151,
        4070: 4127,
        4071: 4120,
        4072: 4143,
        4073: 4201,
        4074: 4132,
        4075: 4148,
        4076: 4151,
        4077: 4127,
        4078: 4120,
        4079: 4143,
        4096: 4209,
        4097: 4173,
        4098: 4206,
        4099: 4174,
        4100: 4205,
        4101: 4175,
        4102: 4208,
        4103: 4176,
        4104: 4177,
        4105: 4178,
        4106: 4179,
        4107: 4180,
        4108: 4182,
        4190: 4192,
        4191: 4193,
        4211: 4213,
        4212: 4214,
        4215: 4216,
        4218: 4219,
        4239: 4245,
        4240: 4246,
      },
    };
  },
  methods: {
    ...mapMutations(["SAVE_JOB"]),
    clickJob: function (event) {
      let job_id = parseInt(event.target.id);
      if (this.$store.state.cash_mount_checked) {
        if (job_id in this.cash_mount_list) {
          job_id = this.cash_mount_list[job_id];
        }
      } else if (this.$store.state.regular_mount_checked) {
        if (job_id in this.regular_mount_list) {
          job_id = this.regular_mount_list[job_id];
        }
      }
      this.SAVE_JOB(job_id);
    },
  },
  watch: {
    "$store.state.cash_mount_checked": {
      deep: true,
      handler(newValue, oldValue) {
        let current_job = this.$store.state.character.job[0];
        if (newValue == 1) {
          if (current_job in this.cash_mount_list) {
            this.SAVE_JOB(this.cash_mount_list[current_job]);
          }
        } else {
          Object.keys(this.cash_mount_list).forEach((key) => {
            if (this.cash_mount_list[key] == current_job) {
              this.SAVE_JOB(parseInt(key));
            }
          });
        }
      },
    },
    "$store.state.regular_mount_checked": {
      deep: true,
      handler(newValue, oldValue) {
        let current_job = this.$store.state.character.job[0];
        if (newValue == 1) {
          if (current_job in this.regular_mount_list) {
            this.SAVE_JOB(this.regular_mount_list[current_job]);
          }
        } else {
          Object.keys(this.regular_mount_list).forEach((key) => {
            if (this.regular_mount_list[key] == current_job) {
              this.SAVE_JOB(parseInt(key));
            }
          });
        }
      },
    },
  },
};
</script>

<style scoped>
.job-selected {
  background-color: #0d6efd !important;
}

.job-image {
  align-self: flex-start;
}

@media (max-width: 820px) {
  .job-image {
    height: 18px;
  }
}

.table {
  margin-bottom: 0px !important;
}
.table > :not(caption) > * > * {
  padding: 1px;
}
</style>
