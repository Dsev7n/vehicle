<template>
<div class="bg-body">
        <bg-back> </bg-back>
    <div class="bg-main" v-on:focus="hidePrice()" tabindex="1">
        <div class="bg" @click="close()" v-show="isShow"> </div>
        <div class="bg-box">
            <i class="bg-img"></i>
            <h2>{{floor}}区</h2>
            <h5>{{time}}</h5>
            <input class="bg-button" type="button" value="缴费离开" v-on:click="showPrice()" />
        </div>
        <div class="bg-fixBox" v-show="isShow" v-on:blur="hidePrice()" tabindex="0" :class="{'ishide':!isShow}">
            <div class="bg-block">
                <span class="bg-left" v-on:click="onPayTap()">缴费</span>
                <span class="bg-right" v-on:click="hidePrice()">取消</span>
            </div>
            <div class="bg-line">
                <span class="bg-left">车牌：</span>
                <span class="bg-right">{{plate}}</span>
            </div>
            <div class="bg-line">
                <span class="bg-left">价格：</span>
                <span class="bg-right">￥ {{price}}</span>
            </div>
        </div>
    </div>
</div>

</template>
<script>
import Area from "./area";

export default Area;
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../style/area.css";
</style>