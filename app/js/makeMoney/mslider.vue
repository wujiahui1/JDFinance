<template>
    <article>
        <Slider :cname="$style.slider" :items="items"></Slider>
        <div :class="$style.main">
            <div :class="$style.mainInfo">
                <p>会员等级</p>
                <p>立即登入&nbsp;马上赚钱!</p>
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
    </article>
</template>

<script>
    import Slider from "../core/slider";
    //轮播图

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
                }],

            }
        }

    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .slider{
        margin-top: 92px;
        img{
            width: 100%;
        }
    }
    .list{
        @include list;
        margin-top: 140px;
        justify-content: space-around;
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
        width: 100%;
        overflow: hidden;
        margin-bottom: 24px;
        .mainInfo{
            /* 为什么width写600px 而京东上面写的是343 *2 px?*/
            width: 92%;
            z-index: 99;
            border: 1px solid #ddd;
            border-radius: 4px;
            position: absolute;
            background: white;
            text-align: center;
            color: #515151;
            margin-left: 4%;
            margin-top: -14px;
            p{
                float:left;
                overflow: hidden;

                &:nth-child(1){
                    width: 92px;
                    height: 66px;
                    line-height: 66px;
                    background: yellow;
                    margin-top: 32px;
                    margin-left: 20px;
                    margin-right: 20px;
                    font-size: 16px;
                }
                &:nth-child(2){
                    line-height: 130px;
                    font-size: 24px;
                    margin: 0 auto;
                }
                &:nth-child(3){
                    width: 92px;
                    height: 66px;
                    text-align:center;
                    line-height: 66px;
                    background: red;
                    border-radius: 4px;
                    float:right;
                    font-size: 24px;
                    margin-top: 32px;
                    margin-right: 20px;
                }
            }
        }
    }

</style>