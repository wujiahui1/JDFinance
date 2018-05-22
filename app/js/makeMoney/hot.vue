<template>
    <Panel title="热销保险" :class="$style.panel">
        <div>
            <Slider :items="items" :options="options" cname="hot-slider"></Slider>
            <img :class="$style.image" src="//img12.360buyimg.com/jrpmobile/jfs/t19756/137/1902911799/17823/e19ffe7b/5add9511Nf6984e89.jpg?width=750&height=200">
        </div>
    </Panel>
</template>

<script>
    import Panel from "../core/panel.vue"
    import Slider from "../core/slider";

    export default {
        name: "hot",
        components: {
            Panel,
            Slider,
        },
        data(){
            return {
                items: [{
                    href: "/makemoney",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260"
                }, {
                    href: "/makemoney",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260"
                }, {
                    href: "/makemoney",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&height=260"
                }, {
                    href: "/makemoney",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260"
                }],
                options: {
                    slidesPerView: 2.6,
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
    }
</style>

<style lang="scss">
    .hot-slider{
        padding-left: 20px;
        margin-bottom: 20px;
        .swiper-slide{
            a{
                width: 100%;
                img{
                    width: 210px;
                }
            }
        }
    }
</style>