<template>
    <div class="header">
        <div class="box">
            <!-- 搜索框/轮播图 -->
            <Slideshow />
        </div>
        <!-- 滑动 -->
        <Slide />
        <!-- 5张图片 -->
        <Five />
        <!-- 秒杀 -->
        <Miao />
        <!-- 选项卡切换 -->
        <Cut />
        <!-- tab切换 -->
        <Tab />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { getHomeData } from '../api/index.js'
// 引入搜索框/轮播图
import Slideshow from '../views/Slideshow.vue'
// 滑动图片
import Slide from '../views/Slide.vue'
// 5张图片
import Five from '../views/Five.vue'
// 秒杀
import Miao from '../views/Miao.vue'
// 选项卡切换
import Cut from '../views/Cut.vue'
// tab切换
import Tab from '../views/Tab.vue'
let params = {
    message: 123
}
// let a = ref([])
getHomeData(params).then(res => {
    console.log(res);
    // a = res.banners
}).catch(erroe => {
    console.log(erroe);
});
// axios.get('/sugrec?prod=pc&wd=a').then(res => {
//     console.log(res)
// }).catch(err => {
//     console.log(err)
//     showDialog({ message: err.message })
// })
</script>

<style scoped lang="less">
.header {
    background-color: #efeff4;
}

.box {
    background-color: #efeff4;
    display: flex;
    flex-direction: column;
    position: relative;
    height: 300px;
}

.slide {
    background-color: aqua;
    height: 200px;
}
</style>