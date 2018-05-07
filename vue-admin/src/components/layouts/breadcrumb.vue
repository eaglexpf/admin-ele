<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/admin' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>博客管理</el-breadcrumb-item>
        <el-breadcrumb-item>网站管理</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
    export default {
        name: "breadcrumb"
    }
</script>

<style scoped>
    .el-breadcrumb{
        padding-bottom: 20px;
    }
</style>
