<template>
   <div class="bg-main">
       <i class="bg-icon is-car"></i>
       <h2>您的爱车位于{{floor}}层 {{seat}}车位</h2>
       <h5>停车时长： {{time}}</h5>
       <input type="button" value="缴费离开" />
   </div>
</template>

<script>
import Area from "./area";
export default Area;
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import "../style/area.css"; */
</style>