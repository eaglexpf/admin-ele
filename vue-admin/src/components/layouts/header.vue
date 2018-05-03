<template>
    <el-header height="50px">
        <a href="javascript:" @click="changeCollapse" class="sidebar-toggle" data-toggle="offcanvas" role="button">
            <i class="el-icon-menu"></i>
        </a>
        <el-dropdown trigger="click">
            <div class="user-panel el-dropdown-link">
                <div class="pull-left">
                    <img src="http://jssdk.cloud-cy.com/xunbao/new/assets/adminlte/img/user2-160x160.jpg" class="img-circle" alt="User Image">
                </div>
                <div class="pull-left info">
                    <p class="admin_username">cust</p>
                </div>
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="layout">退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

    </el-header>
</template>

<script>

    export default {
        name: "xheader",
        methods:{
            changeCollapse:function(){
                this.$store.commit("layout/changeLeftCollapse");
            },
            layout:function(){
                this.$store.dispatch('system/user/layout',{
                    uuid:this.$store.getters["common/getUUID"],
                    token:this.$store.getters['system/user/getUser']['token']
                });
            }
        }
    }
</script>

<style scoped>
    .el-header{
        color: #ffffff;
        background-color: #3c8dbc;
        font-size: 14px;
        line-height: 50px;
        padding: 0px;
    }
    .sidebar-toggle{
        padding: 0 15px;
        color: #ffffff;
        background-color: transparent;
        float: left;
    }
    .sidebar-toggle:hover,.user-panel:hover{
        background-color: #367fa9;
    }
    .el-dropdown{
        float: right;
        color: #FFFFFF;
        cursor: pointer;
    }
    .user-panel{
        float: right;
        padding: 0 20px;

    }
    .user-panel img{
        width: 100%;
        max-width: 25px;
        height: auto;
        border: 0;
        vertical-align: middle;
    }
    .info{
        padding-left: 8px;
    }
</style>
