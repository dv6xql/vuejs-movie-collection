<template>
    <section>
        <div class="title">
            <h2>Stats</h2>
        </div>
        <div class="movies">
            <article v-if="Object.keys(topRatedData).length">
                <BarChart id="chart_1" title="Bar Chart" xKey="title" yKey="vote_average" :data="topRatedData"></BarChart>
            </article>
            <article>
                <BarChart id="chart_2" title="Bar Charts" xKey="name" yKey="amount" :data="barChartDatas"></BarChart>
            </article>
        </div>
    </section>
</template>

<script>
    import BarChart from "./BarChart";
    import { mapGetters } from 'vuex';
    import { mapActions } from 'vuex';
    export default {
        name: "Stats",
        components: {
            BarChart
        },
        watch: {
            topRatedMovies(to) {
                if (!Object.keys(to).length) {
                    return false;
                }

                this.topRatedData = (to.results).slice(0, 10);
            }
        },
        data() {
            return {
                topRatedData: [],
                barChartData: [
                    {
                        name: 'Matrix',
                        amount: 25
                    },
                    {
                        name: 'Lion King',
                        amount: 40
                    },
                    {
                        name: 'Terminator',
                        amount: 15
                    },
                    {
                        name: 'Gran Torino',
                        amount: 21
                    },
                ],
                barChartDatas: [
                    {
                        name: 'Matrix',
                        amount: 54
                    },
                    {
                        name: 'Lion King',
                        amount: 21
                    },
                    {
                        name: 'Terminator',
                        amount: 15
                    },
                    {
                        name: 'Gran Torino',
                        amount: 21
                    },
                ]
            }
        },
        methods: {
            ...mapActions([
                'getTopRatedMovies',
            ]),
            collectTopRatedMoviesData(movies) {
                movies = movies.slice(0, 10);
                console.log(movies);
            }
        },
        computed: {
            ...mapGetters([
                'topRatedMovies',
            ]),
        },
        created() {
            this.getTopRatedMovies();
        }

    }
</script>

<style scoped>

</style>