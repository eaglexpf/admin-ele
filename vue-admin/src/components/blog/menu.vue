<template>
    <el-row class="page_menu">
        <el-col :span="8">
            <el-collapse accordion>
                <el-collapse-item title="文章" name="1">
                    <el-checkbox-group v-model="checkbox" class="checkbox_group">
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                    </el-checkbox-group>
                    <div class="checkbox_submit">
                        <el-button type="primary" @click="onSubmit">添加到菜单</el-button>
                    </div>

                </el-collapse-item>
                <el-collapse-item title="自定义链接" name="2">
                    <el-form label-position="left" label-width="80px" :model="formLabelAlign">
                        <el-form-item label="URL">
                            <el-input v-model="formLabelAlign.name"></el-input>
                        </el-form-item>
                        <el-form-item label="连接文本">
                            <el-input v-model="formLabelAlign.region"></el-input>
                        </el-form-item>
                        <el-form-item style="text-align: right">
                            <el-button type="primary" @click="onSubmit">添加到菜单</el-button>
                        </el-form-item>
                    </el-form>
                </el-collapse-item>
                <el-collapse-item title="分类目录" name="3">
                    <el-checkbox-group v-model="checkbox" class="checkbox_group">
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                        <el-checkbox label="复选框 A"></el-checkbox>
                        <el-checkbox label="复选框 B"></el-checkbox>
                        <el-checkbox label="复选框 C"></el-checkbox>
                    </el-checkbox-group>
                    <div class="checkbox_submit">
                        <el-button type="primary" @click="onSubmit">添加到菜单</el-button>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </el-col>
        <el-col :span="16" class="right_content">
            <div style="background-color: #fff;padding: 10px">
                <el-table
                    :data="tableData5"
                    style="width: 100%">
                    <el-table-column type="expand">
                        <template slot-scope="props">
                            <el-form label-position="left" label-width="80px">
                                <el-form-item label="URL">
                                    <el-input v-model="props.row.name"></el-input>
                                </el-form-item>
                                <el-form-item label="连接文本">
                                    <el-input v-model="props.row.name"></el-input>
                                </el-form-item>
                                <el-form-item style="text-align: right">
                                    <el-button type="primary" @click="onSubmit">移动到上一位</el-button>
                                    <el-button type="primary" @click="onSubmit">移动到下一位</el-button>
                                    <el-button type="danger" @click="onSubmit">移除</el-button>
                                </el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="导航标签"
                        prop="id">
                    </el-table-column>
                    <el-table-column
                        label="类型"
                        prop="name">
                    </el-table-column>
                </el-table>
                <div class="checkbox_submit">
                    <el-button type="primary" @click="onSubmit">保存菜单</el-button>
                </div>
            </div>

        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "blog_menu",
        data() {
            return {
                activeName: '1',
                formLabelAlign: {
                    name: '',
                    region: '',
                    type: ''
                },
                checkbox:[],
                tableData5: [{
                    id: '12987122',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987123',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987125',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987126',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }]
            };
        },
        methods:{
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>
<style>
    .page_menu .el-collapse-item__header{
        padding: 0px 15px;
    }
    .page_menu .el-collapse .is-active{
        background: #f5f5f5;
    }
    .page_menu .el-collapse-item__content{
        padding: 15px;
    }
    .page_menu .el-checkbox{
        display: block;
        margin-left: 30px;
    }
    .page_menu .demo-table-expand {
        font-size: 0;
    }
    .page_menu .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }
    .page_menu .demo-table-expand .el-form-item {
        margin-right: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>
<style scoped>
    .page_menu{
        padding-top: 30px;
    }
    .right_content{
        padding-left: 50px;
    }
    .el-collapse-item__header{
        padding: 10px;
    }
    .checkbox_group{
        max-height: 200px;overflow:auto;border: 1px solid #ddd;background-color: #fdfdfd;
    }
    .checkbox_submit{
        padding-top: 15px;text-align: right
    }
</style>
