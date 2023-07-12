<template>
    <div class="header">
        <!-- 搜索框 -->
        <div class="box">
            <RouterLink to="Search">
                <van-search class="input" v-model="value" placeholder="请输入搜索关键词" input-align="center" />
            </RouterLink>
            <div class="box-a"><van-icon name="service-o" size="30" color="#fff" /></div>
        </div>
        <!-- 轮播图 -->
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" show-indicators="false">
            <van-swipe-item v-for="item in a"><img :src="item.imgUrl" :alt="item.categoryId"> </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getHomeData } from '../api/index.js'
let params = {
    message: 123
}
let a = ref([])
getHomeData(params).then(res => {
    console.log(res);
    a.value = res.banners
}).catch(erroe => {
    console.log(erroe);
});
</script>

<style scoped lang="less">
.header{
    display: flex;
    justify-content: space-between;
}
// 轮播图
.my-swipe {
    position: absolute;
    top: 0px;
    overflow: hidden;
    width: 375px;

    img {
        width: 100%;
        height: 300px;
    }
}

// 搜索框
.box {
    display: flex;
    align-items: center;
    .box-a {
        z-index: 1000;
    }

    .input {
        position: relative;
        z-index: 1000;
        background-color: transparent;
        width:335px;
        height: 1.6rem;
        // line-height: 40px;
    }
}
</style>