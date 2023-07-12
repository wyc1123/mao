<template>
    <div class="header">
        <van-tabs v-model:active="active" animated background="#efeff4" color="red" :ellipsis="false">
            <van-tab v-for="(item, index) in a" >
                <template #title>
                    <span style="display: block;font-size: 13px; text-align: center;">{{item.title}}</span>
                    <span style="display: block;font-size: 12px; text-align: center;">{{item.name}}</span>
                </template>
                <div class="box">
                    <div class="cut" v-for="(item, index) in item.list">
                        <div class="cut-a">
                            <img class="img" src="../image/3/test10.png" alt="">
                        </div>
                        <div class="title">
                            <span>{{ item.name }}</span>
                            <span>{{ item.title }}</span>
                        </div>
                        <div class="pic">
                            <div class="pic-a"><span>{{ item.forceValue }}倍算</span></div>
                            <span class="pic-b">+</span>
                        </div>
                    </div>
                </div>

            </van-tab>
        </van-tabs>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { getHomeData } from '../api/index.js'
let params = {
    message: 123
}
let a = ref([])
getHomeData(params).then(res => {
    console.log(res.tabList);
    a.value = res.tabList
}).catch(erroe => {
    console.log(erroe);
});
</script>

<style scoped>
.van-tab-grow{
    padding:0px;
}
.header {
    position: relative;
    /* width: 350px; */
}

.box {
    columns: 2;
    margin-top: 15px;
}

.cut {
    width: 100%;
    display: flex;
    flex-direction: column;
    break-inside:avoid;
    justify-content: space-between;
    background-color: #fff;
    margin: 0 0 10px 0;
    padding: 0 0px 6px 0px;
    .pic {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 15px;
        margin-top: 6px;
        padding:  0 5px;
        .pic-a {
            background-color: #d8182d;
            color: #fff;
            border-radius: 20px;
            overflow: hidden;
            padding: 3px;
        }
        .pic-b{
            background-color: #d8182d;
            color: #fff;
            border-radius: 20px;
            overflow: hidden;
            font-size: 20px;
            padding: 3px;
            width: 20px;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .title {
        font-size: 15px;
        padding:  0 5px;
    }

    .cut-a {
        width: 100%;

        .img {
            width: 100%;
            height: 150px;
        }
    }
}

.active {
    color: red;
}
</style>