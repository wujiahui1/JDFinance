<template>
    <div>
        <Panel title="白条" :class="$style.panel">
            <section :class="$style.content">
                <div :class="$style.item1">
                    <p>小白信用分</p>
                    <p>登入查看</p>
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
            年轻不留白&gt;
        </div>
    </div>

</template>

<script>
    import Panel from "../core/panel.vue"

    export default {
        name: "note",
        components: {
            Panel,
        },
        data(){
            return {
                items:[{
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t8803/130/802395570/1891/103bedf1/59af980eN987fd5c2.png?width=56&height=56",
                    title: "白条"
                }, {
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t9373/154/878445473/2758/410dc92d/59b901f5Nc93edaac.png?width=56&height=56",
                    title: "还款",
                }, {
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t9391/169/1385525558/2762/2d29f1d5/59b90214N4f745107.png?width=56&height=56",
                    title: "1元抢劵",
                }, {
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t7246/167/3036813324/1578/d4ae001e/59b90228Nd61b6465.png?width=56&height=56",
                    title: "小白卡",
                }, {
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t8422/203/1374629409/2823/430e740d/59b90230N09140aba.png?width=56&height=56",
                    title: "金条",
                }, {
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t7618/313/3082994165/3330/e1692006/59b90247Nac3c9ebe.png?width=56&height=56",
                    title: "校园",
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
                width: 31%;
                margin-left: 4%;
                margin-right: 2%;
                box-sizing: border-box;
                border: 1px solid #ddd;
                p{
                    text-align: center;
                    &:nth-child(1){
                        font-size: 32px;
                        lin-height: 32px;
                        color: black;
                        margin-top: 40%;
                        margin-left: auto;
                        margin-right: auto;
                        color: #c4a36c;
                    }
                    &:nth-child(2){
                        background:  #c4a36c;;
                        border-radius: 32px;
                        padding: 10px;
                        width: 60%;
                        font-size: 20px;
                        margin-top: 10%;
                        margin-left: auto;
                        margin-right: auto;
                        color: white;
                    }
                }
            }
            .item2{
                width: 59%;
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