<template>
    <div :class="[btnClass,cname]">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "btn.vue",
        props: {
            cname: {
                type: String,
                default: "",
            }
        },
        data(){
            return {
                btnClass: 'btn',
            }
        }
    }
</script>

<style lang="scss">
    @import "../../css/element.scss";
    .btn{
        @include btn;
    }
</style>