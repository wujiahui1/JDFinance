<template>
    <div>
        <Panel title="保险保障" :class="$style.panel">
            <section :class="$style.content">
                <div :class="$style.item1">
                    <p>今日推荐</p>
                    <p>100万</p>
                    <p>账户安全险</p>
                    <p>免费领取</p>
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
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t18631/176/1296661704/41624/f193c3f6/5ac2e521N06980907.png?width=750&height=200">
    </div>
</template>

<script>
    import Panel from "../core/panel.vue"

    export default {
        name: "safe",
        components: {
            Panel,
        },
        data(){
            return {
                items:[{
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t8881/304/1359242815/2540/5ef07179/59b90050N62f41061.png?width=56&height=56",
                    title: "车险"
                }, {
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t9040/57/2313007861/3024/82c36c44/59ca556eNb605e901.png?width=56&height=56",
                    title: "人寿",
                }, {
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t9283/283/1383600733/3117/82a51164/59b900cfNe88db318.png?width=56&height=56",
                    title: "意外",
                }, {
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t8929/33/1393593833/1749/1e115bd7/59b900e6N73c7b311.png?width=56&height=56",
                    title: "财产",
                }, {
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t8902/275/1411242449/2807/a2cc902a/59b90111N4e88098c.png?width=56&height=56",
                    title: "健康",
                }, {
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t8962/170/1384497943/2594/aa2a2ad9/59b9011bNf3b01bea.png?width=56&height=56",
                    title: "旅行",
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
            margin-left: -16px;
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

    img{
        width: 100%;
    }
</style>