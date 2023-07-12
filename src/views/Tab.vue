<template>
    <router-view />
    <!-- <van-tabbar v-model="active" active-color="#fe5272">
        <van-tabbar-item name="gem-o" icon="gem-o">首页</van-tabbar-item>
        <van-tabbar-item name="todo-list-o" icon="todo-list-o">分类</van-tabbar-item>
        <van-tabbar-item name="shopping-cart-o" icon="shopping-cart-o" badge="0">购物车</van-tabbar-item>
        <van-tabbar-item name="contact" icon="contact">我</van-tabbar-item>
    </van-tabbar> -->
    <van-tabbar route active-color="#fe5272">
        <van-tabbar-item  to="/" icon="gem-o">首页</van-tabbar-item>
        <van-tabbar-item  to="/Classify" icon="todo-list-o">分类</van-tabbar-item>
        <van-tabbar-item  to="/Cart" icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item  to="/Wo" icon="contact">我</van-tabbar-item>
    </van-tabbar>
</template>

<script setup>
// import { ref } from 'vue';
// const active = ref('gem-o');
import { RouterView } from "vue-router";
</script>

<style scoped></style>