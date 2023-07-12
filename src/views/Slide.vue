<template>
    <div class="header">
        <div class="slide">
            <img src="../image/3/test10.png">
            <img src="../image/3/test11.png">
            <img src="../image/3/test12.jpg">
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped lang="less">
.header {
    width: 375px;
    // overflow: hidden;
    overflow-x: auto;
    .slide {
        // background-color: aqua;
        height: 130px;
        width: 700px;
        display: flex;
        align-items: center;
        justify-content: space-around;

        img {
            width: 200px;
            height: 100px;
        }

    }
}
.header::-webkit-scrollbar{
    display: none;
}
</style>