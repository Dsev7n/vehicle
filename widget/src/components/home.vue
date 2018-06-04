<template>
    <div class="bg-main">
        <div class="bg-middle">
            <div class="bg-img"></div>
            <p class="bg-text">欢迎使用<em>BG</em>停车系统</p>
        </div>
        
        <div class="bg-footer">
            <router-link to="/findCar"  class="bg-block">
        <div>
                <i class="bg-icon is-find"></i>
                <p>寻车</p>
            </div>
        </router-link>
            
            <div class="bg-block">
                <i class="bg-icon is-park"></i>
                <p>停车</p>
            </div>
        </div>
    </div>
</template>

<script>
import Home from "./home";
export default Home;
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../style/Home.css";
</style>