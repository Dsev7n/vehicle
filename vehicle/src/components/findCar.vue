<template>
    <div class="bg-main">
        <p>请输入完整车牌号码</p>
        <select name="area" id="area"  v-model="selected">
            <option>粤</option>
            <option>京</option>
            <option>津</option>
            <option>沪</option>
            <option>渝</option>
            <option>冀</option>
            <option>豫</option>
            <option>云</option>
            <option>辽</option>
            <option>黑</option>
            <option>湘</option>
            <option>皖</option>
            <option>鲁</option>
            <option>新</option>
            <option>苏</option>
            <option>浙</option>
            <option>赣</option>
            <option>鄂</option>
            <option>桂</option>
            <option>甘</option>
            <option>晋</option>
            <option>蒙</option>
            <option>陕</option>
            <option>吉</option>
            <option>闽</option>
            <option>贵</option>
            <option>青</option>
            <option>藏</option>
            <option>川</option>
            <option>宁</option>
            <option>琼</option>

        </select>
        <input type="text" v-model="verticle">
        <!-- <router-link to="/area">下一步</router-link> to="/area"> -->
        <input type="button" value="下一步" class="bg-button" v-on:click="onSearchTap">
        <i class="bg-img"></i>
    </div>
</template>

<script>
import FindCar from "./findCar";
export default FindCar;
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../style/findCar.css";
</style>
