<template>
    <div class="header">
        <div class="five">
            <img src="../image/5/1_03.jpg" alt="">
            <span>链猫精品</span>
        </div>
        <div class="five">
            <img src="../image/5/1_05.jpg" alt="">
            <span>CM专区</span>
        </div>
        <div class="five">
            <img src="../image/5/1_07.jpg" alt="">
            <span>领CM币</span>
        </div>
        <div class="five">
            <img src="../image/5/1_09.jpg" alt="">
            <span>领券</span>
        </div>
        <div class="five">
            <img src="../image/5/1_11.jpg" alt="">
            <svg-icon icon-class="cm-area"></svg-icon>
            <span>链猫会员</span>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #efeff4;
    margin-top: 10px;
    height: 100px;

    .five {
        display: flex;
        flex-direction: column;
        align-items: center;

    }
}

span {
    font-size: 17px;
    margin-top: 10px;
}
</style>