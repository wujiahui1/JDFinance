<template>
    <Panel :class="$style.panel" title="小金库">
        <section :class="$style.content">
            <div :class="$style.left">
                <p>4.4440</p>
                <p>七日年化收益</p>
                <p>支付/缴费/优质理财/大额理财</p>
                <p>开启礼包</p>
            </div>
            <p :class="$style.title">稳定灵活 定期理财</p>
            <chest-slider cname="chest-slide" :items="items" :options="options"></chest-slider>
        </section>
    </Panel>
</template>

<script>
    import Panel from "../core/panel.vue"
    import ChestSlider from "../core/chestSlider.vue"
    //小金库
    export default {
        name: "chest",
        components: {
            Panel,
            ChestSlider,
        },
        data(){
            return {
                items: [{
                    title: "年年盈",
                    label: "金融专属",
                    subtitle: "5.80%",
                    desc: "近七日年化收益率",
                }, {
                    title: "周期盈",
                    label: "理财优选",
                    subtitle: "5.04%",
                    desc: "近七日年化收益率",
                }, {
                    title: "双年盈",
                    label: "两年可赎回",
                    subtitle: "6.00%",
                    desc: "历史年化投资回报率",
                }, {
                    title: "随享盈",
                    label: "质押贷款",
                    subtitle: "5.50%",
                    desc: "历史年化结算利率",
                }],
                options: {
                    slidesPerView: 3.1,
                    spaceBetween: 20,
                    freeMode: true
                }
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
        }
        .content{
            width: 92%;
            padding: 0 4%;
            .left{
                width: 100%;
                background: #726A17;
                color: white;
                border-radius: 4px;
                font-size: 24px;
                height: 200px;
                padding-top: 24px;
                p{
                    margin-left: 32px;
                    text-align: left;

                    &:nth-child(1){
                        font-size: 60px;
                        margin-bottom: 18px;

                    }
                    &:nth-child(2){
                        margin-bottom: 12px;
                    }
                    &:nth-child(4){
                        position: relative;
                        text-align: center;
                        line-height: 80px;
                        width: 200px;
                        height: 80px;
                        left: 360px;
                        top: -90px;
                        background: yellow;
                        border-radius: 16px;
                    }

                }
            }
            .title{
                font-size: 24px;
                margin: 24px 0;
            }
        }
    }

</style>

<style lang="scss">
    .chest-slide{
        .swiper-container {
            box-sizing: border-box;
            .swiper-slide {
                div {
                    width: 100%;
                    border-radius: 10px;
                    border: 1px solid #ddd;
                    font-size: 32px;
                    text-align: center;
                    height: 240px;
                    margin-bottom: 24px;
                    p {
                        margin: 0;
                        color: #515151;
                        line-height: 46px;
                        &:nth-child(2){
                            font-size: 18px;
                            border-radius: 22px;
                            color:white;
                            background: blue;
                            width: 60%;
                            margin-left:20%;
                        }
                        &:nth-child(3){
                            color: rgb(255, 40, 30);
                            font-size: 50px;
                            line-height: 60px;
                        }
                        &:nth-child(4){
                            font-size: 20px;
                        }
                    }
                }

            }
        }
    }
</style>