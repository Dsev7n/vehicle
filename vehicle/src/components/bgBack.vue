<template>
    <header class="bg-header">
        <i class="bg-icon" @click="goBack()"></i>
        <span @click="goBack()">返回</span>
    </header>
</template>

<script>
import bgBack from "./bgBack";
export default bgBack;
</script>

<style scoped>
@import "../style/bgBack.css";
</style>
