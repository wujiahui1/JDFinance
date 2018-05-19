<template>
   <div :class="$style.header">
       <p>&lt;</p>
       <p>...</p>
       <p>赚钱</p>
   </div>
</template>

<script>

    export default {
        name: "mheader.vue",
    }
</script>

<style lang="scss" module>
    .header{
        position: fixed;
        top:0;
        left:0;
        z-index: 100;
        width:100%;
        height: 90px;
        p{
            color: #333;
            line-height: 88px;
            height: 100%;
            &:nth-child(1){
                float: left;
            }
            &:nth-child(3){
                margin: 0 auto;
                text-align: center;
            }
            &:nth-child(2){
                float: right;
                padding-right:0;
            }


        }
    }


</style>