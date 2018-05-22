<template>
    <div :class="$style.advert">
        <div :class="$style.left">
            <p>11.7%</p>
            <p>历史年化投资回报率</p>
            <p>签到领红包 &gt;&gt;</p>
        </div>
        <div :class="$style.right">
            <make-money-slider :cname="$style.makemoneyslider" :items="makemoneyitems"></make-money-slider>
            <p :class="$style.advict">为您推荐  &gt;&gt;</p>
        </div>
    </div>
</template>

<script>
    import MakeMoneySlider from "../core/makeMoneySlider.vue"
    //广告
    export default {
        name: "advice",
        components: {
            MakeMoneySlider,
        },
        data(){
            return {
                makemoneyitems: [{
                    href: "/makemoney",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t18925/279/2516775624/9109/97c00ce2/5af905abN02431813.jpg?width=160&height=160",
                    title: "智能颈椎按摩  立省200元",
                }, {
                    href: "/makemoney",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t22324/100/61261492/6662/37bff492/5af905bcNb9cd1b6f.jpg?width=160&height=160",
                    title: "咕咚智能健步鞋  3.7折限时秒"
                }],
            }
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .advert{
        margin-top: 20px;
        width: 100%;
        @include list(row);
        overflow: hidden;
        .left{
            width: 32%;
            height: 170px;
            font-size: 28px;
            background: orangered;
            border-radius: 4px;
            float: left;
            box-sizing: border-box;
            margin-left: 4%;
            margin-right: 2%;
            p{
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                color: white;
                text-align: center;
                &:nth-child(1){
                     margin-top: 10px;
                     font-size: 70px;

                 }
                &:nth-child(2){
                     font-size: 24px;
                     margin-left: 20px;
                     margin-bottom: 24px;
                 }
                &:nth-child(3){
                     cursor: pointer;
                 }
            }
        }
        .right{
            width: 58%;
            height: 170px;
            float: left;
            background: blue;
            color:white;
            border-radius: 4px;
            overflow: hidden;
            .makemoneyslider{
                margin-top: 15px;
                margin-left: 15px;
                height: 100%;
                img{
                    width: 170px;
                    height: 170px;
                    display: inline-block;
                    float: left;
                }
                p{
                    width: 150px;
                    float: left;
                    font-size: 24px;
                    color:white;
                }
            }
            .advict{
                width: 150px;
                font-size: 24px;
                margin-left: 200px;
                margin-top: -80px;
            }
        }
    }
</style>