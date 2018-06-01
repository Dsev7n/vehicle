<template>
   <div class="bg-main">
        <div class="bg-block">
            <i class="bg-img"></i>
            <h2>{{floor}} &nbsp;&nbsp;{{seat}}车位</h2>
            <h5>{{time}}</h5>
            <input class="bg-button" type="button" value="缴费离开" />
        </div>
        <div class="bg-fixBox">
            <div class="bg-block">
                <span class="bg-left">缴费</span>
                <span class="bg-right">取消</span>
            </div>
            <div class="bg-line">
                <span class="bg-left">车牌：</span>
                <span>{{plate}}</span>
            </div>
            <div class="bg-line">
                <span class="bg-left">价格：</span>
                <span class="bg-right">￥ {{price}}</span>
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