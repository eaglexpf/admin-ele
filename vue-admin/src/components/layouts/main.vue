<template>
    <el-main>
        <breadcrumb></breadcrumb>
        <router-view></router-view>
    </el-main>
</template>

<script>
    import Breadcrumb from "./breadcrumb";

    export default {
        components: {Breadcrumb},
        name: "xmain"
    }
</script>

<style scoped>

</style>
