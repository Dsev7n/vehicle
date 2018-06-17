<template>

    <body>
        <bg-back> </bg-back>
        <div id="park">
            <!-- <router-link to="/">
                <div class="back">
                    <p>
                        < 返回</p>
                </div>
            </router-link> -->
            <ul>
                <li class="subarea" v-for="(item,index) in items" @click="display(index)">
                    <p class="mark">{{item.marker}}区</p>
                    <p>共{{item.total}}个车位</p>
                    <p>剩余{{item.rest}}个车位</p>
                    <img id="pic" :src="item.src" v-show="isShow == index" @click="close()">
                    <div class="bg" @click="close()" v-show="isShow == index"> </div>
                </li>
            </ul>
            <div class="entrance">
                入口
            </div>

            <!-- <img src="https://wx4.sinaimg.cn/mw690/abb4a10aly1frx9y7y21kj20i20n7afj.jpg" v-show="isShow"> -->
        </div>
    </body>
</template>

<script>
// import pic_floor from '../assets/floor.png';
import Park from "./park";
export default Park;
</script>

<style scoped>
@import "../style/park.css";
</style>
