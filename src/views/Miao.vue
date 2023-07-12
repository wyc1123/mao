<template>
    <div class="box">
        <div class="header">
            <div class="header-a">
                <div class="header-b">
                    <span class="zi">链猫秒杀</span>
                    <div class="header-o">
                        <span class="zi-a">8点场</span>
                        <van-count-down class="block" :time="time" />
                    </div>
                </div>
                <div class="header-i">
                    <div class="header-r">
                        <img src="../image//秒杀/demo1.png" alt="">
                        <sapn class="ret">￥298</sapn>
                        <sapn class="ret-a">￥399</sapn>
                    </div>
                    <div class="header-r">
                        <img src="../image//秒杀/demo2.png" alt="">
                        <sapn class="ret">￥298</sapn>
                        <sapn class="ret-a">￥399</sapn>
                    </div>
                    <div class="header-r">
                        <img src="../image//秒杀/demo3.png" alt="">
                        <sapn class="ret">￥298</sapn>
                        <sapn class="ret-a">￥399</sapn>
                    </div>
                </div>
            </div>
            <div class="hao">
                <div class="hao-a">
                    <div class="hao-b">
                        <span class="hao-zi">发现好货</span>
                        <span class="hao-zi-a">好物不要</span>
                    </div>
                    <div class="zi-l">
                        品质好物
                    </div>
                </div>
                <div>
                    <img class="img" src="../image//秒杀/demo4.png" alt="">
                    <img class="img" src="../image//秒杀/demo5.png" alt="">
                </div>
            </div>
        </div>
        <div class="price-a">
            <div class="price">
                <span class="title">特价秒杀</span>
                <span class="pro">10元抢购</span>
                <img src="../image/秒杀/demo6.png" alt=""> 
            </div>
            <div class="price">
                <span class="title">品牌秒杀</span>
                <span class="pro-a">笔记本秒杀</span>
                <img src="../image/秒杀/demo7.png" alt="">
            </div>
            <div class="price">
                <span class="title">新品首发</span>
                <span class="pro">小黑盒新品</span>
                <img src="../image/秒杀/demo8.png" alt="">
            </div>
            <div class="price">
                <span class="title">优品排行</span>
                <span class="pro-b">榜上好物购</span>
                <img src="../image/秒杀/demo9.png" alt="">
            </div>
        </div>

        <div class="header">
            <div class="hao">
                <div class="hao-a">
                    <div class="hao-b">
                        <span class="hao-zi">大牌购走</span>
                        <span class="hao-zi-a">信赖大品牌</span>
                    </div>
                    <div class="zi-l">
                        戴尔》
                    </div>
                </div>
                <div>
                    <img class="img" src="../image//秒杀/demo10.png" alt="">
                    <img class="img" src="../image//秒杀/demo11.png" alt="">
                </div>
            </div>
            <div class="hao">
                <div class="hao-a">
                    <div class="hao-b">
                        <span class="hao-zi">爱逛好店</span>
                        <span class="hao-zi-a"> 来逛个够</span>
                    </div>
                    <div class="hao-zi-c">
                       懂你所要
                    </div>
                </div>
                <div>
                    <img class="img" src="../image//秒杀/demo12.png" alt="">
                    <img class="img" src="../image//秒杀/demo13.png" alt="">
                </div>
            </div>
        </div>
    </div>
    
</template>

<script setup>
import { ref } from 'vue';
const time = ref(30 * 60 * 60 * 1000);
</script>

<style scoped>
.img{
    width: 75px;
    height: 75px;
}
.hao-zi-c{
    border: 0.02667rem solid #e2c9ff;
    font-size: 0.32rem;
    color: #e2c9ff;
    height: 0.53333rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0.16rem 0 0.16rem;
    margin-left: 0.08rem;
}
.price-a{
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    padding: 10px;
    .price{
        display: flex;
        flex-direction: column;
        width: 25%;
        text-align: center;
        /* justify-content: center; */
        .title{
            font-weight: bold;
            font-size: 18px;
        }
        .pro{
            color: #ff9378;
            font-size: 12px;
        }
        .pro-a{
            color: #dd3749;
            font-size: 12px;
        }
        .pro-b{
            color: #91c95b;
            font-size: 12px;
        }
    }
}
.box {
    position: absolute;
    right: 0px;
    left: 0px;
    margin: auto;
    width: 95%;
    background-color: #fff;
    margin-bottom: 110px;
    .header {
        background-color: #fff;
        display: flex;
        justify-content: space-around;
        padding: 10px;
        .header-a {
            display: flex;
            flex-direction: column;

            .header-b {
                display: flex;
                align-items: center;
                width: 165px;

                .zi {
                    font-weight: bold;
                    font-size: 18px;
                }

                .header-o {
                    display: flex;
                    align-items: center;
                    border: 1px solid red;
                    justify-content: space-around;

                    .zi-a {
                        font-size: 12px;
                        background-color: red;
                        color: #fff;
                        padding: 3px;
                    }
                }
            }
        }
    }
}

.header-i {
    display: flex;
    justify-content: space-around;

    .header-r {
        display: flex;
        flex-direction: column;
        text-align: center;

        img {
            width: 42px;
            height: 49px;
        }
    }
}

.ret {
    color: red;
    font-size: 15px;
    font-weight: bold;
}

.ret-a {
    color: #949497;
    text-decoration: line-through;
    font-size: 15px;
}

.hao {
    display: flex;
    flex-direction: column;

    .hao-a {
        display: flex;

        .hao-b {
            display: flex;
            flex-direction: column;

            .hao-zi {
                font-size: 17px;
                font-weight: bold;
            }

            .hao-zi-a {
                font-size: 12px;
                color: #949497;
            }
        }

        .zi-l {
            border: 1px solid red;
            font-size: 12px;
            color: red;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 6px 0 6px;
            margin-left: 3px;
        }
    }
}

.block {
    color: red;
    font-size: 12px;
    width: 55px;
    text-align: center;
    line-height: 4px;
}</style>