<template>
    <el-container class="adminPage" v-bind:style="{'min-height': body_height+'px'}">
        <!--左侧-->
        <xleft></xleft>
        <!--右侧-->
        <el-container>
            <!--顶部-->
            <xheader></xheader>
            <!--主体-->
            <xmain></xmain>
            <!--尾部-->
            <!--<xfooter></xfooter>-->
            <el-footer height="50px">Footer</el-footer>
        </el-container>
    </el-container>
</template>

<script>
    import xleft from "@/components/layouts/left"
    import xheader from "@/components/layouts/header"
    import xmain from "@/components/layouts/main"
    import xfooter from "@/components/layouts/footer"
    export default {
        name: "admin",
        components:{xleft,xheader,xmain,xfooter},
        data(){
            return {
            }
        },
        computed:{
            body_height:function(){
                return this.$store.getters['layout/getBodyHeight'];
            }
        },
        watch:{
            // user(val){
            //     if(!val){
            //         this.$router.push("/")
            //     }
            // }
        },
        created(){
            //网页高度自适应
            let self = this;
            window.onresize = function () {
                var height = document.documentElement.clientHeight || document.body.clientHeight;
                self.$store.commit('layout/changeBodyHeight',height)
            }
        }
    }
</script>
<style>
    @import "../assets/css/style.css";
</style>
<style scoped>
    .adminPage{
        /*position: fixed;*/
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    }
    .el-footer{
        background: #fff;
        color: #444;
        border-top: 1px solid #d2d6de;
        padding: 15px 20px;
    }
</style>
