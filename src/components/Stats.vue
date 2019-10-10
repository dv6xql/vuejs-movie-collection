<template>
    <section>
        <div class="title">
            <h2>Stats</h2>
        </div>
        <div class="movies">
            <article>
                <BarChart id="chart_1" title="Bar Chart" xKey="name" yKey="amount" :data="barChartData"></BarChart>
            </article>
            <article>
                <BarChart id="chart_2" title="Bar Charts" xKey="name" yKey="amount" :data="barChartDatas"></BarChart>
            </article>
        </div>
    </section>
</template>

<script>
    import BarChart from "./BarChart";
    export default {
        name: "Stats",
        components: {
            BarChart
        },
        data() {
            return {
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
        }
    }
</script>

<style scoped>

</style>