<template>
    <section :class="cname">
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <swiper-slide v-for="(item, index) in items" :key="item.index">
                <div>
                    <p>{{item.title}}</p>
                    <p>{{item.label}}</p>
                    <p>{{item.subtitle}}</p>
                    <p>{{item.desc}}</p>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" v-if="options.pagination" slot="pagination"></div>
        </swiper>
    </section>
</template>

<script>
    import {swiper, swiperSlide} from 'vue-awesome-swiper';

    export default {
        name: "chestSlider",
        components: {
            swiper,
            swiperSlide,
        },
        props:{
            cname: {
                type:String,
                default: ""
            },
            options: {
                type: Object,
                default(){
                    return {

                        notNextTick: false,
                    }
                },
            },
            items:{
                type:Array,
                default(){
                    return [{title: "",label: "",subtitle: "",desc: ""}]
                }
            },

        }

    }
</script>

<style lang="scss">
    @import "~swiper/dist/css/swiper.css";
</style>