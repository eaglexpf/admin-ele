<template>
    <div class="loginPage">
        <div class="loginForm">
            <div class="login_logo">系统<b>登录</b></div>
            <el-form ref="loginForm" :model="form" :rules="login_rule" label-position="left" label-width="0px">
                <el-form-item prop="name">
                    <el-input v-model="form.name" placeholder="用户名/邮箱" suffix-icon="el-icon-message"></el-input>
                </el-form-item>
                <el-form-item prop="pass">
                    <el-input v-model="form.pass" placeholder="密码" type="password" suffix-icon="el-icon-setting"></el-input>
                </el-form-item>
                <el-form-item class="form_submit">
                    <el-button type="primary" @click="loginSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>

    import ElFormItem from "element-ui/packages/form/src/form-item";
    import ElInput from "element-ui/packages/input/src/input";
    import ElButton from "element-ui/packages/button/src/button";

    export default {
        components: {
            ElButton,
            ElInput,
            ElFormItem},
        name: "login",
        data(){
            var validateName = (rule,value,callback)=>{
                if(value===''){
                    callback(new Error('请输入用户名/邮箱'))
                }else if(value.length<3||value.length>18){
                    callback(new Error('账号长度为3-12位'))
                }else{
                    // this.$store.commit("rbac/changeErrorAccount","");
                    callback();
                }
            }
            var validatePass = (rule,value,callback)=>{
                if(value===''){
                    callback(new Error('请输入密码'))
                }else if(value.length<6||value.length>18){
                    callback(new Error('密码长度为6-18位'))
                }else{
                    // this.$store.commit("rbac/changeErrorPass","");
                    callback();
                }
            }
            return{
                form:{
                    name:'',
                    pass:''
                },
                login_rule:{
                    name:[
                        {validator:validateName,trigger:'blur'}
                    ],
                    pass:[
                        {validator:validatePass,trigger:'blur'}
                    ]
                }

            }
        },
        methods:{
            loginSubmit:function () {
                this.$refs['loginForm'].validate(function (valid) {
                    if (valid){
                        console.log('success')
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .loginPage{
        position: fixed;
        width: 100%;
        height: 100%;
        text-align: center;
    }
    .loginForm{
        position: relative;
        width: 360px;
        background-color: #FFFFFF;
        margin: 10% auto;
        padding: 20px;
    }
    .login_logo{
        font-size: 35px;
        font-weight: 300;
        margin-bottom: 25px;
    }
    .form_submit{
        text-align: right;
    }
</style>
