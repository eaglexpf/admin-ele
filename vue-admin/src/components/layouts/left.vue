<template xmlns="http://www.w3.org/1999/html">
    <el-aside v-bind:width="collapse?'50px':'220px'" v-bind:class="collapse?'sidebar_collapse':''">
        <el-header height="50px" @click.native="goHome">{{collapse?'APP':'系统管理'}}</el-header>
        <el-main>
            <div class="user-panel">
                <div class="pull-left">
                    <img src="http://jssdk.cloud-cy.com/xunbao/new/assets/adminlte/img/user2-160x160.jpg" class="img-circle"/>
                </div>
                <div class="pull-left info">
                    <p class="admin_username">admin</p>
                    <a href="javascript:"><i class="fa fa-circle text-success"></i></a>
                </div>
            </div>
            <ul class="sidebar-menu">
                <li class="header">MENU</li>
                <li :class="{active:item.id==active_id,treeview:true}" v-for="item in menu" @mouseenter="mouseenter" @mouseleave="mouseleave">
                    <a :href="item.url?'#'+item.url:'javascript:'" @click="itemClick(item.id)">
                        <i :class="item.icon?item.icon:'fa fa-circle-o'"></i>
                        <span>{{item.name}}</span>
                        <span class="pull-right-container" v-if="item.children">
                        	<i :class="[item.id==active_id?'el-icon-arrow-down':'el-icon-arrow-left','pull-right']"></i>
                        </span>
                    </a>
                    <ul class="treeview-menu" v-if="item.children">
                        <li v-for="children_item in item.children" :class="{active:children_item.id==active_children_id}">
                            <a :href="children_item.url?'#'+children_item.url:'javascript:'" @click="itemChildrenClick(children_item.id,item.id)">
                                <i :class="children_item.icon?children_item.icon:'fa fa-circle-o'"></i> {{children_item.name}}
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </el-main>
    </el-aside>
</template>

<script>

    export default {
        name: "xleft",
        data(){
            return {
                active_id:0,
                active_children_id:0,
                menu:[
                    {id:1,name:"博客管理",icon:"",url:"",children:[
                            {id:10,name:"网站管理",icon:"",url:"/admin/blog"},
                            {id:11,name:"文章管理",icon:"",url:"/admin/blog/article"},
                            {id:12,name:"分类管理",icon:"",url:"/admin/blog/role"},
                            {id:13,name:"页面管理",icon:"",url:"/admin/powers/menu"},
                            {id:14,name:"素材管理",icon:"",url:"/admin/powers/router"},
                            {id:15,name:"菜单管理",icon:"",url:"/admin/powers/router"}
                        ]},
                    {id:3,name:"权限管理",icon:"",url:"",children:[
                            {id:31,name:"用户管理",icon:"",url:"/admin/system/user"},
                            {id:32,name:"角色管理",icon:"",url:"/admin/system/role"},
                            {id:33,name:"菜单管理",icon:"",url:"/admin/system/menu"},
                            {id:34,name:"路由管理",icon:"",url:"/admin/system/router"}
                        ]},
                    {id:2,name:"系统管理",icon:"",url:"",children:[
                            {id:21,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:22,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:23,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:24,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:25,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:22,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:23,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:24,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:25,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:22,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:23,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:24,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:25,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:22,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:23,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:24,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:25,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:22,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:23,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:24,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:25,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:22,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:23,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:24,name:"用户管理",icon:"",url:"/admin/auth/user"},
                            {id:25,name:"用户管理",icon:"",url:"/admin/auth/user"}
                        ]}
                ]
            }
        },
        create(){

        },
        computed:{
            collapse:function(){
                return this.$store.getters['layout/getLeftCollapse'];
            }
        },
        methods:{
            goHome:function(){
                console.log('this is go-home')
                this.$router.push('/');
            },
            itemClick:function(id){
                this.active_id = id;
            },
            itemChildrenClick:function(id,parent_id){
                this.active_id = parent_id;
                this.active_children_id = id;
            },
            mouseenter:function () {
                var h = document.documentElement.scrollHeight || document.body.scrollHeight;
                if (h!==this.$store.getters['layout/getBodyHeight']){
                    this.$store.commit('layout/changeBodyHeight',h+50)
                }
            },
            mouseleave:function () {
                var height = document.documentElement.clientHeight || document.body.clientHeight;
                if (height!==this.$store.getters['layout/getBodyHeight']){
                    this.$store.commit('layout/changeBodyHeight',height)
                }
            }
        }
    }
</script>

<style scoped>
    .el-aside{
        background-color: #222d32;
        overflow: hidden;
    }
    .el-header{
        text-align: center;
        color: #ffffff;
        background-color: #367fa9;
        font-size: 20px;
        line-height: 50px;
        cursor: pointer;
    }
    .el-main{
        padding: 0px;
        overflow: visible;
    }
    .user-panel{
        white-space: nowrap;
        overflow: hidden;
        padding: 10px;
    }
    .user-panel img{
        width: 100%;
        max-width: 45px;
        height: auto;
        border: 0;
        vertical-align: middle;
    }
    .user-panel .info{
        padding: 5px 5px 5px 15px;
        line-height: 1;
        left: 55px;
        color: #ffffff;
    }
    .admin_username{
        font-weight: 500;
        margin-bottom: 3px;
    }
    .info a{
        text-decoration: none;
        padding-right: 5px;
        margin-top: 3px;
        font-size: 11px;
        background-color: transparent;
    }
    .text-success {
        color: #3c763d;
    }
    a{color:#ffffff} /*设置默认颜色*/
    a:link {color:#ffffff;} /*未访问颜色*/
    a:visited {color:#ffffff;} /*已访问颜色*/
    a:hover {color:#ffffff;} /*悬浮（鼠标经过）时颜色*/
    a:active {color:#ffffff;} /*点击时的颜色*/

    ul .header{
        color: #4b646f;
        background-color: #1a2226;
        overflow: hidden;
        text-overflow: clip;
        font-size: 12px;
        padding: 10px 25px 10px 15px;
    }
    .sidebar-menu{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .sidebar-menu li>a{
        color: #b8c7ce;
        border-left: 3px solid transparent;
        padding: 12px 5px 12px 15px;
        display: block;
        background-color: transparent;
    }
    .sidebar-menu li>a>i{
        width: 20px;
    }
    .sidebar-menu li>a>.pull-right-container>i{
        margin-top: 3px;
        width: auto;
        height: auto;
        padding: 0;
        margin-right: 10px;
    }
    .sidebar-menu>li>a:hover{
        color: #ffffff;
        background-color: #1e282c;
        border-left: 3px solid #3c8dbc;
    }
    .sidebar-menu li>.treeview-menu{
        margin: 0 1px;
        background-color: #2c3b41;
        list-style: none;
        padding: 0 0 0 5px;
        display: none;
    }
    .sidebar-menu>li.active>a{
        color: #ffffff;
        background-color: #1e282c;
        border-left: 3px solid #3c8dbc;
    }
    .sidebar-menu li.active>.treeview-menu{
        display: block;
    }
    .treeview-menu a:hover{
        color: #ffffff;
    }
    .treeview-menu li.active>a{
        color: #FFFFFF;
    }

    /*collapse*/
    .sidebar_collapse .el-header{
        padding: 0;
    }
    .sidebar_collapse .info,.sidebar_collapse .header,.sidebar_collapse .sidebar-menu>li>a>span,.sidebar_collapse .sidebar-menu>li>.treeview-menu{
        display: none;
    }
    .sidebar_collapse .sidebar-menu>li:hover>a>span{
        display: block;
        position: absolute;
        z-index: 10;
        width: 160px;
        left: 50px;
        padding: 12px 5px 12px 20px;
        color: #ffffff;
        background-color: #1e282c;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        margin-top: -31px;
    }
    .sidebar_collapse .sidebar-menu>.treeview:hover>a>span{
        border-bottom-right-radius: 0px;
    }
    .sidebar_collapse .sidebar-menu>li:hover>a>.pull-right-container{
        width: auto;
        left: 185px;
    }
    .sidebar_collapse .sidebar-menu>li:hover>.treeview-menu{
        display: block;
        position: absolute;
        z-index: 10;
        width: 182px;
        left: 47px;
        color: #ffffff;
        border-bottom-right-radius: 4px;
    }
</style>
