<template>
    <div :id="id">
        <svg :width="svgWidth" :height="svgHeight">
            <g>
                <rect v-for="(item, index) in data"
                      :class="`${id} bar-${index + 1}`"
                      :key="item[xKey]"
                      :x="xScale(item[xKey])"
                      :y="yScale(0)"
                      :width="xScale.bandwidth()"
                      :height="0">
                </rect>
            </g>
        </svg>
    </div>
</template>

<script>
    import {scaleLinear, scaleBand} from 'd3-scale';
    import {max, min} from 'd3-array';
    import {selectAll} from 'd3-selection';
    import {transition} from 'd3-transition'

    export default {
        name: "BarChart",
        props: {
            id: String,
            title: String,
            xKey: String,
            yKey: String,
            data: Array
        },
        watch: {
            svgWidth() {
                this.svgWidth = document.getElementById(this.id).offsetWidth * 0.75;
            }
        },
        computed: {
            dataMax() {
                return max(this.data, d => {
                    return d[this.yKey];
                });
            },
            dataMin() {
                return min(this.data, d => {
                    return d[this.yKey];
                });
            },
            xScale() {
                return scaleBand()
                    .rangeRound([0, this.svgWidth])
                    .padding(0.1)
                    .domain(this.data.map(d => {
                        return d[this.xKey];
                    }));
            },
            yScale() {
                return scaleLinear()
                    .rangeRound([this.svgHeight, 0])
                    .domain([this.dataMin > 0 ? 0 : this.dataMin, this.dataMax])
            },
            svgHeight() {
                return this.svgWidth / 1.61803398875;
            }
        },
        mounted() {
            this.svgWidth = document.getElementById(this.id).offsetWidth * 0.95;
            this.addResizeListener();
            this.animateLoad();
        },
        data() {
            return {
                svgWidth: 0,
                redrawToggle: true
            }
        },
        methods: {
            animateLoad() {
                transition();
                selectAll(`rect.${this.id}`)
                    .data(this.data)
                    .transition()
                    .delay((d, i) => {
                        return i * 150;
                    })
                    .duration(1000)
                    .attr("y", d => {
                        return this.yScale(d[this.yKey]);
                    })
                    .attr("height", d => {
                        return this.svgHeight - this.yScale(d[this.yKey]);
                    });
            },
            addResizeListener() {
                window.addEventListener("resize", () => {
                    this.$data.redrawToggle = false;
                    setTimeout(() => {
                        this.$data.redrawToggle = true;
                        this.$data.svgWidth = document.getElementById(this.id).offsetWidth * 0.75;
                        this.animateLoad();
                    }, 800);
                });
            }
        }
    }
</script>

<style scoped>
    .bar-1 {
        fill: #2196f3;
        transition: r 0.2s ease-in-out;
    }

    .bar-2 {
        fill: #2196f3;
        transition: r 0.2s ease-in-out;
    }

    .bar-3 {
        fill: #2196f3;
        transition: r 0.2s ease-in-out;
    }

    .bar-4 {
        fill: #2196f3;
        transition: r 0.2s ease-in-out;
    }

    .bar-5 {
        fill: #2196f3;
        transition: r 0.2s ease-in-out;
    }

    .bar-6 {
        fill: #2196f3;
        transition: r 0.2s ease-in-out;
    }

    .bar-7 {
        fill: #2196f3;
        transition: r 0.2s ease-in-out;
    }

    .bar-8 {
        fill: #2196f3;
        transition: r 0.2s ease-in-out;
    }

    .bar-9 {
        fill: #2196f3;
        transition: r 0.2s ease-in-out;
    }

    .bar-10 {
        fill: #2196f3;
        transition: r 0.2s ease-in-out;
    }
</style>