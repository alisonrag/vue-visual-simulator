<template>
  <div class="container-jobs">
    <div class="container">
      <div class="row">
        <div
          v-for="(jobs_list, index) in novice_job"
          class="col-md-12 job-group"
          :key="index"
        >
          <div
            v-for="(jobs, index) in jobs_list.list"
            :key="index"
            class="row jobs"
          >
            <div
              v-for="job in jobs.list"
              :key="job.id"
              class="text-center"
              :class="{
                'col-md-12': jobs.list.length == 1,
                'col-md-6': jobs.list.length == 2,
                'col-md-4': jobs.list.length == 3,
              }"
            >
              <img
                :id="job.id"
                :src="
                  require('../../assets/img/job/icon_jobs_' + job.id + '.png')
                "
                @click="clickJob($event)"
                class="job-image"
                :class="{
                  'job-selected':
                    parseInt(job.id) == $store.state.character.job,
                }"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(jobs_list, index) in regular_job"
          class="col-md-2 job-group"
          :key="index"
        >
          <div
            v-for="(jobs, index) in jobs_list.list"
            :key="index"
            class="row jobs"
          >
            <div
              v-for="job in jobs.list"
              :key="job.id"
              class="jobs text-center"
              :class="{
                'col-md-12': jobs.list.length == 1,
                'col-md-6': jobs.list.length == 2,
                'col-md-4': jobs.list.length == 3,
              }"
            >
              <img
                :id="job.id"
                :src="
                  require('../../assets/img/job/icon_jobs_' + job.id + '.png')
                "
                @click="clickJob($event)"
                class="job-image"
                :class="{
                  'job-selected':
                    parseInt(job.id) == $store.state.character.job,
                }"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(jobs_list, index) in expanded_job"
          class="col-md-2 job-group"
          :key="index"
        >
          <div
            v-for="(jobs, index) in jobs_list.list"
            :key="index"
            class="row jobs"
          >
            <div
              v-for="job in jobs.list"
              :key="job.id"
              class="jobs text-center"
              :class="{
                'col-md-12': jobs.list.length == 1,
                'col-md-6': jobs.list.length == 2,
                'col-md-4': jobs.list.length == 3,
              }"
            >
              <img
                :id="job.id"
                :src="
                  require('../../assets/img/job/icon_jobs_' + job.id + '.png')
                "
                @click="clickJob($event)"
                class="job-image"
                :class="{
                  'job-selected':
                    parseInt(job.id) == $store.state.character.job,
                }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      novice_job: [
        {
          name: "novice",
          list: [
            {
              name: "novice",
              list: [
                {
                  id: 0,
                  name: "Novice",
                },
              ],
            },
          ],
        },
      ],
      regular_job: [
        {
          name: "swordman",
          list: [
            {
              name: "first",
              list: [
                {
                  id: 1,
                  name: "Swordman",
                },
              ],
            },
            {
              name: "second",
              list: [
                {
                  id: 7,
                  name: "Knight",
                },
                {
                  id: 14,
                  name: "Crusader",
                },
              ],
            },
            {
              name: "trans",
              list: [
                {
                  id: 4008,
                  name: "Lord Knight",
                },
                {
                  id: 4015,
                  name: "Paladin",
                },
              ],
            },
            {
              name: "third",
              list: [
                {
                  id: 4060,
                  name: "Rune Knight",
                },
                {
                  id: 4066,
                  name: "Royal Guard",
                },
              ],
            },
            {
              name: "fourth",
              list: [
                {
                  id: 4252,
                  name: "Dragon Knight",
                },
                {
                  id: 4258,
                  name: "Imperial Guard",
                },
              ],
            },
          ],
        },
        {
          name: "magician",
          list: [
            {
              name: "first",
              list: [
                {
                  id: 2,
                  name: "Magician",
                },
              ],
            },
            {
              name: "second",
              list: [
                {
                  id: 9,
                  name: "Wizard",
                },
                {
                  id: 16,
                  name: "Sage",
                },
              ],
            },
            {
              name: "trans",
              list: [
                {
                  id: 4010,
                  name: "High Wizard",
                },
                {
                  id: 4017,
                  name: "Professor",
                },
              ],
            },
            {
              name: "third",
              list: [
                {
                  id: 4061,
                  name: "Warlock",
                },
                {
                  id: 4067,
                  name: "Sorcerer",
                },
              ],
            },
            {
              name: "fourth",
              list: [
                {
                  id: 4255,
                  name: "Arch Mage",
                },
                {
                  id: 4261,
                  name: "Elemental Master",
                },
              ],
            },
          ],
        },
        {
          name: "archer",
          list: [
            {
              name: "first",
              list: [
                {
                  id: 3,
                  name: "Archer",
                },
              ],
            },
            {
              name: "second",
              list: [
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
              ],
            },
            {
              name: "trans",
              list: [
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
              ],
            },
            {
              name: "third",
              list: [
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
              ],
            },
            {
              name: "fourth",
              list: [
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
              ],
            },
          ],
        },
        {
          name: "acolyte",
          list: [
            {
              name: "first",
              list: [
                {
                  id: 4,
                  name: "Acolyte",
                },
              ],
            },
            {
              name: "second",
              list: [
                {
                  id: 8,
                  name: "Priest",
                },
                {
                  id: 15,
                  name: "Monk",
                },
              ],
            },
            {
              name: "trans",
              list: [
                {
                  id: 4009,
                  name: "High Priest",
                },
                {
                  id: 4016,
                  name: "Champion",
                },
              ],
            },
            {
              name: "third",
              list: [
                {
                  id: 4063,
                  name: "Arch Bishop",
                },
                {
                  id: 4070,
                  name: "Sura",
                },
              ],
            },
            {
              name: "fourth",
              list: [
                {
                  id: 4256,
                  name: "Cardinal",
                },
                {
                  id: 4262,
                  name: "Inquisitor",
                },
              ],
            },
          ],
        },
        {
          name: "merchant",
          list: [
            {
              name: "first",
              list: [
                {
                  id: 5,
                  name: "Merchant",
                },
              ],
            },
            {
              name: "second",
              list: [
                {
                  id: 10,
                  name: "Blacksmith",
                },
                {
                  id: 18,
                  name: "Alchemist",
                },
              ],
            },
            {
              name: "trans",
              list: [
                {
                  id: 4011,
                  name: "Whitesmith",
                },
                {
                  id: 4019,
                  name: "Creator",
                },
              ],
            },
            {
              name: "third",
              list: [
                {
                  id: 4064,
                  name: "Mechanic",
                },

                {
                  id: 4071,
                  name: "Genetic",
                },
              ],
            },
            {
              name: "fourth",
              list: [
                {
                  id: 4253,
                  name: "Meister",
                },
                {
                  id: 4259,
                  name: "Biolo",
                },
              ],
            },
          ],
        },
        {
          name: "thief",
          list: [
            {
              name: "first",
              list: [
                {
                  id: 6,
                  name: "Thief",
                },
              ],
            },
            {
              name: "second",
              list: [
                {
                  id: 12,
                  name: "Assassin",
                },
                {
                  id: 17,
                  name: "Rogue",
                },
              ],
            },
            {
              name: "trans",
              list: [
                {
                  id: 4013,
                  name: "Assassin Cross",
                },
                {
                  id: 4018,
                  name: "Stalker",
                },
              ],
            },
            {
              name: "third",
              list: [
                {
                  id: 4065,
                  name: "Guillotine Cross",
                },

                {
                  id: 4072,
                  name: "Shadow Chaser",
                },
              ],
            },
            {
              name: "fourth",
              list: [
                {
                  id: 4254,
                  name: "Shadow Cross",
                },
                {
                  id: 4260,
                  name: "Abyss Chaser",
                },
              ],
            },
          ],
        },
      ],
      expanded_job: [
        {
          name: "taekwon",
          list: [
            {
              name: "first",
              list: [
                {
                  id: 4046,
                  name: "Taekwon",
                },
              ],
            },
            {
              name: "second",
              list: [
                {
                  id: 4047,
                  name: "Star Gladiator",
                },
                {
                  id: 4049,
                  name: "Soul Linker",
                },
              ],
            },
            {
              name: "third",
              list: [
                {
                  id: 4239,
                  name: "Star Emperor",
                },
                {
                  id: 4240,
                  name: "Soul Reaper",
                },
              ],
            },
            {
              name: "fourth",
              list: [
                {
                  id: 4302,
                  name: "JT_SKY_EMPEROR",
                },
                {
                  id: 4303,
                  name: "JT_SOUL_ASCETIC",
                },
              ],
            },
          ],
        },
        {
          name: "ninja",
          list: [
            {
              name: "first",
              list: [
                {
                  id: 25,
                  name: "Ninja",
                },
              ],
            },
            {
              name: "second",
              list: [],
            },
            {
              name: "third",
              list: [
                {
                  id: 4211,
                  name: "Kagerou",
                },
                {
                  id: 4212,
                  name: "Oboro",
                },
              ],
            },
            {
              name: "fourth",
              list: [
                {
                  id: 4304,
                  name: "JT_SHINKIRO",
                },
                {
                  id: 4305,
                  name: "JT_SHIRANUI",
                },
              ],
            },
          ],
        },
        {
          name: "gunslinger",
          list: [
            {
              name: "first",
              list: [
                {
                  id: 24,
                  name: "Gunslinger",
                },
              ],
            },
            {
              name: "second",
              list: [],
            },
            {
              name: "third",
              list: [
                {
                  id: 4215,
                  name: "Rebellion",
                },
              ],
            },
            {
              name: "fourth",
              list: [
                {
                  id: 4306,
                  name: "JT_NIGHT_WATCH",
                },
              ],
            },
          ],
        },
        {
          name: "novice",
          list: [
            {
              name: "first",
              list: [
                {
                  id: 23,
                  name: "Super Novice",
                },
              ],
            },
            {
              name: "second",
              list: [],
            },
            {
              name: "third",
              list: [
                {
                  id: 4190,
                  name: "Ex. Super Novice",
                },
              ],
            },
            {
              name: "fourth",
              list: [
                {
                  id: 4307,
                  name: "JT_HYPER_NOVICE",
                },
              ],
            },
          ],
        },
        {
          name: "summoner",
          list: [
            {
              name: "first",
              list: [
                {
                  id: 4218,
                  name: "Summoner",
                },
              ],
            },
            {
              name: "second",
              list: [],
            },
            {
              name: "third",
              list: [],
            },
            {
              name: "fourth",
              list: [
                {
                  id: 4308,
                  name: "JT_SPIRIT_HANDLER",
                },
              ],
            },
          ],
        },
        {
          name: "others",
          list: [
            {
              name: "first",
              list: [
                {
                  id: 22,
                  name: "Wedding",
                },
                {
                  id: 26,
                  name: "Christmas",
                },
              ],
            },
            {
              name: "second",
              list: [
                {
                  id: 27,
                  name: "Summer",
                },
                {
                  id: 30,
                  name: "Summer",
                },
              ],
            },
            {
              name: "third",
              list: [
                {
                  id: 28,
                  name: "Hanbok",
                },
                {
                  id: 29,
                  name: "Oktoberfest",
                },
              ],
            },
            {
              name: "fourth",
              list: [],
            },
          ],
        },
      ],
      regular_job_group: [{}],
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
  border: 2px dashed #0d6efd;
  border-radius: 5px;
  filter: contrast(105%) brightness(110%);
}

.novice {
  background-color: #fcfc9f;
}

.swordman {
  background-color: #9fdefc;
}

.magician {
  background-color: #fcd99f;
}

.archer {
  background-color: #bcfc9f;
}

.acolyte {
  background-color: #9ffced;
}

.merchant {
  background-color: #fcfc9f;
}

.thief {
  background-color: #df9ffc;
}

.taekwon {
  background-color: #9ffced;
}

.ninja {
  background-color: #fcd99f;
}

.gunslinger {
  background-color: #bcfc9f;
}

.summoner {
  background-color: #f0e68c;
}

.others {
  background-color: #ffebcd;
}

.jobs {
  height: 30px;
}

.job-image {
  align-self: flex-start;
}

.job-group {
}
</style>
