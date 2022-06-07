<template>
    <div class="container-jobs">
        <ul class="ul-jobs">
            <li v-for="(job, index) in job_list" class="li-job" :key="index">
                <img
                    :src="require('../../assets/job/icon_jobs_' + job.id + '.png')"
                    :class="{ 'job-selected': job.id == $store.state.character.job }"
                    :alt="job.name"
                    :id="job.id"
                    @click="clickJob($event)"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    data() {
        return {
            job_list: [
                {
                    "id": 0,
                    "name": "Novice"
                },
                {
                    "id": 1,
                    "name": "Swordman"
                },
                {
                    "id": 2,
                    "name": "Magician"
                },
                {
                    "id": 3,
                    "name": "Archer"
                },
                {
                    "id": 4,
                    "name": "Acolyte"
                },
                {
                    "id": 5,
                    "name": "Merchant"
                },
                {
                    "id": 6,
                    "name": "Thief"
                },
                {
                    "id": 7,
                    "name": "Knight"
                },
                {
                    "id": 8,
                    "name": "Priest"
                },
                {
                    "id": 9,
                    "name": "Wizard"
                },
                {
                    "id": 10,
                    "name": "Blacksmith"
                },
                {
                    "id": 11,
                    "name": "Hunter"
                },
                {
                    "id": 12,
                    "name": "Assassin"
                },
                {
                    "id": 14,
                    "name": "Crusader"
                },
                {
                    "id": 15,
                    "name": "Monk"
                },
                {
                    "id": 16,
                    "name": "Sage"
                },
                {
                    "id": 17,
                    "name": "Rogue"
                },
                {
                    "id": 18,
                    "name": "Alchemist"
                },
                {
                    "id": 19,
                    "name": "Bard"
                },
                {
                    "id": 20,
                    "name": "Dancer"
                },
                {
                    "id": 22,
                    "name": "Wedding"
                },
                {
                    "id": 23,
                    "name": "Super Novice"
                },
                {
                    "id": 24,
                    "name": "Gunslinger"
                },
                {
                    "id": 25,
                    "name": "Ninja"
                },
                {
                    "id": 26,
                    "name": "Christmas"
                },
                {
                    "id": 27,
                    "name": "Summer"
                },
                {
                    "id": 28,
                    "name": "Hanbok"
                },
                {
                    "id": 29,
                    "name": "Oktoberfest"
                },
                {
                    "id": 30,
                    "name": "Summer"
                },
                {
                    "id": 4008,
                    "name": "Lord Knight"
                },
                {
                    "id": 4009,
                    "name": "High Priest"
                },
                {
                    "id": 4010,
                    "name": "High Wizard"
                },
                {
                    "id": 4011,
                    "name": "Whitesmith"
                },
                {
                    "id": 4012,
                    "name": "Sniper"
                },
                {
                    "id": 4013,
                    "name": "Assassin Cross"
                },
                {
                    "id": 4015,
                    "name": "Paladin"
                },
                {
                    "id": 4016,
                    "name": "Champion"
                },
                {
                    "id": 4017,
                    "name": "Professor"
                },
                {
                    "id": 4018,
                    "name": "Stalker"
                },
                {
                    "id": 4019,
                    "name": "Creator"
                },
                {
                    "id": 4020,
                    "name": "Clown"
                },
                {
                    "id": 4021,
                    "name": "Gypsy"
                },
                {
                    "id": 4046,
                    "name": "Taekwon"
                },
                {
                    "id": 4047,
                    "name": "Star Gladiator"
                },
                {
                    "id": 4048,
                    "name": "Star Gladiator (Union)"
                },
                {
                    "id": 4049,
                    "name": "Soul Linker"
                },
                {
                    "id": 4060,
                    "name": "Rune Knight"
                },
                {
                    "id": 4061,
                    "name": "Warlock"
                },
                {
                    "id": 4062,
                    "name": "Ranger"
                },
                {
                    "id": 4063,
                    "name": "Arch Bishop"
                },
                {
                    "id": 4064,
                    "name": "Mechanic"
                },
                {
                    "id": 4065,
                    "name": "Guillotine Cross"
                },
                {
                    "id": 4066,
                    "name": "Royal Guard"
                },
                {
                    "id": 4067,
                    "name": "Sorcerer"
                },
                {
                    "id": 4068,
                    "name": "Minstrel"
                },
                {
                    "id": 4069,
                    "name": "Wanderer"
                },
                {
                    "id": 4070,
                    "name": "Sura"
                },
                {
                    "id": 4071,
                    "name": "Genetic"
                },
                {
                    "id": 4072,
                    "name": "Shadow Chaser"
                },
                {
                    "id": 4190,
                    "name": "Ex. Super Novice"
                },
                {
                    "id": 4211,
                    "name": "Kagerou"
                },
                {
                    "id": 4212,
                    "name": "Oboro"
                },
                {
                    "id": 4215,
                    "name": "Rebellion"
                },
                {
                    "id": 4218,
                    "name": "Summoner"
                },
                {
                    "id": 4239,
                    "name": "Star Emperor"
                },
                {
                    "id": 4240,
                    "name": "Soul Reaper"
                },
                {
                    "id": 4252,
                    "name": "Dragon Knight"
                },
                {
                    "id": 4253,
                    "name": "Meister"
                },
                {
                    "id": 4254,
                    "name": "Shadow Cross"
                },
                {
                    "id": 4255,
                    "name": "Arch Mage"
                },
                {
                    "id": 4256,
                    "name": "Cardinal"
                },
                {
                    "id": 4257,
                    "name": "Windhawk"
                },
                {
                    "id": 4258,
                    "name": "Imperial Guard"
                },
                {
                    "id": 4259,
                    "name": "Biolo"
                },
                {
                    "id": 4260,
                    "name": "Abyss Chaser"
                },
                {
                    "id": 4261,
                    "name": "Elemental Master"
                },
                {
                    "id": 4262,
                    "name": "Inquisitor"
                },
                {
                    "id": 4263,
                    "name": "Troubadour"
                },
                {
                    "id": 4264,
                    "name": "Trouvere"
                },
                {
                    "id": 4302,
                    "name": "JT_SKY_EMPEROR"
                },
                {
                    "id": 4303,
                    "name": "JT_SOUL_ASCETIC"
                },
                {
                    "id": 4304,
                    "name": "JT_SHINKIRO"
                },
                {
                    "id": 4305,
                    "name": "JT_SHIRANUI"
                },
                {
                    "id": 4306,
                    "name": "JT_NIGHT_WATCH"
                },
                {
                    "id": 4307,
                    "name": "JT_HYPER_NOVICE"
                },
                {
                    "id": 4308,
                    "name": "JT_SPIRIT_HANDLER"
                },
            ],
        }
    }, methods: {
        ...mapMutations(['SAVE_JOB']),
        clickJob: function (event) {
            this.SAVE_JOB(parseInt(event.target.id))
        }
    }
}
</script>

<style scoped>
.ul-jobs {
    list-style: none;
}
.li-job {
    float: left;
    margin: 2px;
    width: 27px;
    height: 27px;
}
.job-selected {
    border: 2px dashed #0d6efd;
    border-radius: 5px;
    filter: contrast(105%) brightness(110%);
}
</style>