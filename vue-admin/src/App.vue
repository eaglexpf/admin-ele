<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: 'App',
        created(){
            var uuid = this.$store.getters['layout/getUUID'];
            console.log(uuid)
        }
    }
</script>

<style>
    *{
        margin: 0;
        padding: 0;
    }
    body{
        background: #ecf0f5;
        font-size: 14px;
    }
    a {
        text-decoration: none;
    }

</style>
