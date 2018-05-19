<template>
    <Panel :class="$style.panel" title="极速借贷">
        <section :class="$style.content">
            <router-link :to="{name: 'home' }">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t17932/270/2520140717/14455/ed098b39/5afbd2d0N6ac844bf.png?width=690&height=154">
            </router-link>
        </section>
    </Panel>
</template>

<script>
    import Panel from "../core/panel.vue"
    export default {
        name: "borrow",
        components: {
            Panel,
        }
    }
</script>

<style lang="scss" module>
    @import "../../css/element.scss";
    .panel{
        @include panel;
        .content{
            padding-bottom: 48px;
            img{
                display: block;
                width: 100%;
            }
        }
    }

</style>