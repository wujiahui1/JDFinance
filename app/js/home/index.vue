<template lang="html">
    <div>
        <Heador></Heador>
        <Slider></Slider>
        <Noviciate></Noviciate>
        <Borrow></Borrow>
        <Money></Money>
        <Product></Product>
        <Life></Life>
        <Footor></Footor>
        <Navbar></Navbar>
    </div>
</template>

<script>
    import Heador from "../public/header.vue"
    import Footor from "../public/footer.vue"
    import Navbar from "../public/navbar.vue"
    import Slider from "./hslider.vue"
    import Noviciate from "./noviciate.vue"
    import Borrow from "./borrow.vue"
    import Money from "./money.vue"
    import Product from "./product.vue"
    import Life from "./life.vue"


    export default {
        components:{
            Heador,
            Footor,
            Navbar,
            Slider,
            Noviciate,
            Borrow,
            Money,
            Product,
            Life,

        }

    }
</script>

<style lang="scss" module>
    @import '../../css/reset.scss';

    .home {
        color: red;
        font-size: 80px;
    }
</style>



