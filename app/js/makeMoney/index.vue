<template>
    <div>
        <m-heador></m-heador>
        <m-slider></m-slider>
    </div>
</template>

<script>
    import mHeador from "./mheader.vue"
    import mSlider from "./mslider.vue"

    export default {
        name: "index",
        components: {
            mHeador,
            mSlider,
        }
    }
</script>

<style scoped>

</style>