<template>
    <div>
        <m-heador></m-heador>
        <m-slider></m-slider>
        <Advice></Advice>
        <Chest></Chest>
        <crowd-funding></crowd-funding>
        <Safe></Safe>
        <Hot></Hot>
        <Note></Note>
    </div>
</template>

<script>
    import mHeador from "./mheader.vue"
    import mSlider from "./mslider.vue"
    import Chest from "./chest.vue"
    import Advice from "./advice.vue"
    import crowdFunding from "./crowdfunding.vue"
    import Safe from "./safe.vue"
    import Hot from "./hot.vue"
    import Note from "./note.vue"

    export default {
        name: "index",
        components: {
            mHeador,
            mSlider,
            Chest,
            Advice,
            crowdFunding,
            Safe,
            Hot,
            Note
        }
    }
</script>

<style lang="scss" module>
    /*body{
       background: #ddd;
    }*/
</style>