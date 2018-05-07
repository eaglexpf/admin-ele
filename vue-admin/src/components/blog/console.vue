<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane label="基础设置">
                <el-form ref="form" :model="form" label-width="100px">
                    <el-form-item label="网站名称">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="网站描述">
                        <el-input type="textarea" v-model="form.desc"></el-input>
                    </el-form-item>
                    <el-form-item label="备案号">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="网站创建时间">
                        <el-date-picker
                            v-model="form.initTime"
                            type="year"
                            placeholder="选择年">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">立即创建</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="配置管理">高级设置</el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>

    export default {
        name: "console",
        data(){
            return {
                form: {
                    name: '',
                    region: '',
                    initTime:'2015',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods:{
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style scoped>
    .el-form{
        max-width: 500px;
    }
</style>
