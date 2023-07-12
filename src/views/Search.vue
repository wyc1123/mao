<template>
    <div class="box">
        <!-- 搜索框 -->
            <div class="top">
                <div class="back">
                    <router-link to="/">
                        <van-icon name="arrow-left" to="class" />
                    </router-link>
                
                </div>
                <van-search v-model="message" background="#f5f5f5" placeholder="请输入搜索关键词" />
                <p @click="search">搜索</p>
            </div>
        <!-- 热搜词 -->
            <p class="hotWord">热搜词</p>
            <div class="hotWordFirst">
                <span class="hot-red">小米手机</span>
                <span class="hot-red">笔记本</span>
                <span class="hot-gray">电脑</span>
                <span class="hot-gray">平板</span>
            </div>
            <div class="hotWordFirst">
                <span class="hot-red">液晶电视</span>
                <span class="hot-red">家电</span>
                <span class="hot-gray">玩具</span>
            </div>
        <!-- 历史搜索 -->
            <div class="history">
                <p class="hotWord">历史搜索</p>
                <div class="empty">   </div>
                <div class="remove" @click="removeHistory">
                    <van-icon name="cross" />
                </div>
            </div>
            <ul class="lists">
                <li v-for="item in arr" :key="item.id">{{ item.title }}</li>
            </ul>
    </div>
</template>

<script setup>
    import { createApp } from 'vue';
    import { showConfirmDialog } from 'vant';
    import { useRoute,useRouter } from 'vue-router';
    // import { showDialog } from 'vant';
    import {ref} from "vue"
    let message=ref("")
    let arr=ref([
        // {id:0,title:message.value}
    ])
    let num=0;
    function search(){
        // console.log(message.value)
        if(message.value===""){
            alert("请输入要搜索的内容")
        }else{
            num++;
            arr.value.push({
                id:num,
                title:message.value
            })
        }
    }
  
    function removeHistory(){
        showConfirmDialog({
            title: '标题',
            message:
                '确认删除历史记录吗',
            })
            .then(() => {
                // on confirm
                arr.value=""
            })
            .catch(() => {
                // on cancel
            });
       
    }
</script>

<style scoped>
    .lists{
        width:90vw;
        margin:0 auto;
        /* background-color: antiquewhite; */
    }
    .lists li{
        margin:10px 0;
    }
    li{
        list-style:none;
    }
    .remove{
        font-size: 25px;
    }
    .empty{
        width:250px;
        height:1px;
        background-color: #f5f5f5;
    }
    .history{
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    
    .hot-red{
        border:1px solid red;
        color:red;
    }
    .hot-gray{
        border:1px solid gray;
        color:gray;
    }
    .hotWordFirst{
     
        width:100vw;
        height:50px;
        display: flex;
        align-items: center;
    }
    .hotWordFirst span{
        
        padding:4px 6px;
        border-radius: 3px;
        margin-left:20px;
        
    }
    .hotWord{
        color: rgb(205, 9, 9);
        margin-left:15px;
        margin-top:10px;
    }
    .top{
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 14px;
        
    }
    .top p{
        color:rgb(205, 9, 9);
    }
    .box{
        background-color: #f5f5f5;
        font-size:15px;
        padding-top:10px;
    }
    .back{
        width:30px;
        height:30px;
        background-color: white;
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
    }
   
</style>