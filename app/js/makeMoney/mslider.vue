<template>
    <article>
        <Slider :cname="$style.slider" :items="items"></Slider>
        <div :class="$style.main">
            <div :class="$style.mainInfo">
                <p>会员等级</p>
                <p>立即登入&nbsp;马上赚钱</p>
                <p>签到</p>
            </div>
        </div>
        <section :class="$style.list">
            <div :class="$style.item" v-for="enter in enters">
                <router-link :to="{name: '/makemoney'}">
                    <img :src="enter.img">
                    <p>{{enter.title}}</p>
                </router-link>
            </div>
        </section>
        <div :class="$style.imgInfo">
            <img src="">
            <img src="">
        </div>

    </article>
</template>

<script>
    import Slider from "../core/slider";
    export default {
        name: "mslider",
        components: {
            Slider,
        },
        data(){
            return {
                items:[{
                    href: "/makemoney",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t18964/175/2571640812/41904/950c9bd9/5afea385Na5887ed2.jpg?width=750&height=400"
                }, {
                    href: "/makemoney",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t22165/79/137579630/49472/e427ad09/5afea3d2N015ae396.jpg?width=750&height=400"

                }, {
                    href: "/makemoney",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t19933/263/590724228/45843/170c9925/5afea3e3Nc2429a7b.jpg?width=750&height=400"
                }],
                enters: [{
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t18103/37/490404196/5076/dfe2d74f/5a8440f1Nbda4f02a.png?width=90&height=90",
                    title: "领红包"
                }, {
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t18073/271/483133084/5159/f8133cd6/5a844103N02f95449.png?width=90&height=90",
                    title: "领福利"
                }, {
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t17710/198/468680838/4169/de69ccb0/5a844046N1f4f2958.png?width=90&height=90",
                    title: "领劵"
                }, {
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t19330/108/485433577/4856/13f8bcb9/5a844068N464525c2.png?width=90&height=90",
                    title: "支付抽奖"
                },{
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t17563/145/489151866/3943/bed46aef/5a8440cfN4a1fabc3.png?width=90&height=90",
                    title: "全部"
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
        @include list;
        .item{
            width: 20%;
            text-align: center;
            font-size: 24px;
            a{
                text-decoration: none;
            }
            img{
                width: 90px;
            }
        }
    }
    .main{
        width:100%;
        height: 130px;
        .mainInfo{
            width: 686px;
            height: 100%;
            z-index: 99;
            position: relative;
            magin: 0 auto;
            top: -18px;
            left: 20px;
            p{
                font-size: 28px;
                float:left;
                &:nth-child(1){

                }
            }
        }
    }


</style>