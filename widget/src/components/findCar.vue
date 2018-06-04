<template>
    <div class="bg-main">
        <p>请输入完整车牌号码</p>
        <select name="area" id="area">
            <option value="num1">粤</option>
            <option value="num1">粤</option>
            <option value="num1">粤</option>
            <option value="num1">粤</option>
            <option value="num1">粤</option>
            <option value="num1">粤</option>
        </select>
        <input type="text">
        <!-- <router-link to="/area">下一步</router-link> to="/area"> -->
        <input type="button" value="下一步" class="bg-button">
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
