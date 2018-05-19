<template>
    <article class="">
        <Slider :cname="$style.slider" :items="items"></Slider>
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{name: item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{item.title}}</h4>
                </router-link>
            </div>
        </section>
    </article>
</template>

<script>
    //轮播图组件
    import Slider from "../core/slider.vue"
    export default {
        name: "hslider",
        components: {
            Slider,
        },
        data(){
            return{
                items: [{
                    href: "home",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t18364/253/2575097261/44585/72062d30/5afc2dfeN434cf069.jpg?width=750&height=320"
                }, {
                    href: "home",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t16813/193/2522647942/51289/1b585c68/5afc2de8Ned5d1012.jpg?width=750&height=320"
                }, {
                    href: "home",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t19699/357/2481830686/50780/b42b05b3/5afc2df2N8eb998e6.jpg?width=750&height=320"
                }],
                enters: [{
                    href: "home",
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t3991/64/2521945388/12110/93c0139/58d1e462Ncf294123.png?width=132&height=132",
                    title: "优惠券"
                }, {
                    href: "home",
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t5590/252/875247023/17343/946aa72c/59224650N0f7ffc92.png?width=132&height=132",
                    title: "领红包",
                }, {
                    href: "home",
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t4393/329/2180608902/13217/c88c0cec/58ec9dcdN1534e2d7.png?width=132&height=132",
                    title: "抢钢镚"
                }, {
                    href: "home",
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t5488/298/1036263348/12073/b4f4de97/590ac8e8Ne9def22e.png?width=135&height=135",
                    title: "白条提额"
                }]
            }
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .slider{
        margin-top: 120px;
        img{
            width: 100%;
        }
    }
    .list{
        @include list(row);
        background: #fff;
        padding-top: 40px;
        padding-bottom: 20px;
        justify-content: space-around;
        a{
            text-decoration: none;
        }
        .item{
            text-align: center;
            img{
                display: inline-block;
                width: 90px;
                height: 90px;
            }
            h4{
                font-size: 26px;
                margin-top: 24px;
                color: #666;
            }
        }
    }
</style>