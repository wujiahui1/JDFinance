<template>
    <div>
        <Panel title="京东众筹" :class="$style.panel">
            <section :class="$style.content">
                <div :class="$style.item1">
                    <p>今日推荐</p>
                    <p>100万</p>
                    <p>拆红包</p>
                    <p>立即抢购</p>
                </div>
                <div :class="$style.item2">
                    <ul>
                        <li v-for="item in items">
                            <img :src="item.img">
                            <p>{{item.title}}</p>
                        </li>
                    </ul>
                </div>
            </section>
        </Panel>
        <div :class="$style.rightIcon">
            好生活 享品质&gt;
        </div>
    </div>

</template>

<script>
    import Panel from "../core/panel.vue"

    export default {
        name: "crowdfunding",
        components: {
          Panel,
        },
        data(){
            return {
                items:[{
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t9739/355/2223965438/3092/b3cc4062/59f2fef3Nc2363e64.png?width=56&height=56",
                    title: "京东出众"
                }, {
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t10882/187/2325566882/2968/e64c911c/59f2ff2cNd85eb522.png?width=56&height=56",
                    title: "手机优惠",
                }, {
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t11674/229/560588342/2307/d88f9fd7/59f2ff5eNcac8d195.png?width=56&height=56",
                    title: "领神劵",
                }, {
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t10018/213/2260133396/2902/107476f0/59f2ff70N35c5d0bb.png?width=56&height=56",
                    title: "智能首发",
                }, {
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t7552/255/3352153359/2695/fc610922/59f2ff88N95232a40.png?width=56&height=56",
                    title: "舌尖美味",
                }, {
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t9523/348/2258037555/2792/9e8e1a80/59f2ff9fNf9648450.png?width=56&height=56",
                    title: "轻时尚",
                }]
            }
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        >h4{
            text-align: left;
            font-weight: bolder;
        }
        .content{
            @include list(row);
            .item1{
                width: 26%;
                margin-left: 4%;
                margin-right: 2%;
                box-sizing: border-box;
                border: 1px solid #ddd;
                p{
                    text-align: center;
                    &:nth-child(1){
                        font-size: 32px;
                        lin-height: 32px;
                        position: absolute;
                        left: 4%;
                        color: white;
                        background: black;
                    }
                    &:nth-child(2){
                        margin-top: 52px;
                        font-size: 50px;
                        color: rgb(27, 213, 199);
                        line-height: 62px;
                    }
                    &:nth-child(3){
                        font-size: 24px;
                        color: #000;
                        line-height: 34px;
                    }
                    &:nth-child(4){
                        background: rgb(27, 213, 199);
                        border-radius: 20px;
                        padding: 10px;
                        width: 60%;
                        margin: 0 auto;
                        font-size: 20px;
                    }
                }
            }
            .item2{
                width: 64%;
                height: 100%;
                box-sizing: border-box;
                border: 1px solid #ddd;
                ul{
                    @include list(row);
                    box-sizing: border-box;
                    li{
                        width: 33.33%;
                        height: 50%;
                        text-align: center;
                        img{
                            width: 46px;
                            hieght: 46px;
                            margin-top: 10px;
                        }
                        p{
                            font-size: 24px;
                            margin-bottom: 20px;
                        }
                    }
                }
            }
        }
    }
    .rightIcon{
        position: relative;
        color: black;
        font-size: 24px;
        top: -306px;
        right: 32px;
        float: right;
        cursor: pointer;
    }
</style>