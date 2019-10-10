<template>
    <section>
        <div class="title">
            <h2>Stats</h2>
        </div>
        <BarChart title="Bar Chart" xKey="name" yKey="amount" :data="barChartData"></BarChart>
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
                        amount: 56
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>