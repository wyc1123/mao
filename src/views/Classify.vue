<template>
    <div class="head">
        <div class="box">
            <h4>商品分类</h4>
        </div>
        <!-- <van-tree-select v-for="(item, index) in activeIndex"  v-model:main-active-index="activeIndex" :items="items">
            <template #content>
                <div class="box-a"   v-for="(item, index) in item.list">
                    <div class="box-b" v-if="activeIndex === index">
                        <div class="tit">
                            {{ item.title }}
                        </div>
                        <div class="por" v-for="(item, index) in item.productList">
                            <img class="img" :src="item.imgUrl" alt="">
                            <span class="zi">{{ item.title }}</span>
                        </div>
                    </div>
                </div>
            </template>
        </van-tree-select> -->
        <van-tree-select v-model:main-active-index="activeIndex" height="75vh" :items="items">
            <template #content>
                <div class="in" v-for="(item, index) in a[activeIndex].list">
                    <!-- {{ item }} -->
                    <p class="tit">{{ item.title }}</p>
                    <div class="po">
                        <div class="kn" v-for="i in item.productList">
                            <img :src="i.imgUrl" alt="">
                            <span class="te">{{ i.title }}</span>
                        </div>
                    </div>
                </div>
            </template>
        </van-tree-select>
    </div>
    <!-- tab切换 -->
    <Tab />
</template>

<script setup>
// 引入tab切换
import Tab from '../views/Tab.vue';
import { ref } from 'vue';
import { getHomeCat } from '../api/index.js';
const activeIndex = ref(0);
let lei = {
    message: 123
}
let items = ref([])
let a = ref([
    { list: [] }
])
getHomeCat(lei).then(res => {
    console.log(res);
    console.log(res.categoryData);
    a.value = res.categoryData
    console.log(a.value);
    // activeIndex.value = res.tabsLabel
    res.categoryData.forEach(element => {
        items.value.push({ 'text': element.name, "mainImgUrl": element.mainImgUrl })
    });
}).catch(erroe => {
    console.log(erroe);
});


</script>

<style scoped>
.te{
    margin-top: 10px;
}
.kn {
    /* display: inline-block; */
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.po {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
}

.in {
    display: inline-block;
    width: 255px;
    /* background-color: aqua; */
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    overflow: hidden;

    /* overflow-y: auto; */
}

.tit {
    font-size: 20px;
    font-weight: bold;
    color: red;
}


img {
    width: 65px;
    height: 100px;
}

.head {
    display: flex;
    flex-direction: column;

    .box {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 80px;
        align-items: center;
    }
}
</style>