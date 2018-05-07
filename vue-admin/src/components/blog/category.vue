<template>
    <el-row class="page_category">
        <el-col :span="8">
            <el-form ref="form" :model="form" label-position="top">
                <el-form-item label="名称">
                    <el-input v-model="form.name"></el-input>
                    <p class="desc_input">这将是它在站点上显示的名字。</p>
                </el-form-item>
                <el-form-item label="别名">
                    <el-input v-model="form.name"></el-input>
                    <p class="desc_input">“别名”是在URL中使用的别称，它可以令URL更美观。通常使用小写，只能包含字母，数字和连字符（-）。</p>
                </el-form-item>
                <el-form-item label="父级分类目录">
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                        </el-option>
                    </el-select>
                    <p class="desc_input">分类目录和标签不同，它可以有层级关系。您可以有一个“音乐”分类目录，在这个目录下可以有叫做“流行”和“古典”的子目录。</p>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">添加新分类目录</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="16" class="right_content">
            <el-table
                :data="tableData5"
                style="width: 100%">
                <el-table-column
                    label="名称"
                    prop="name"
                    width="180">
                </el-table-column>
                <el-table-column
                    label="别名"
                    width="180">
                </el-table-column>
                <el-table-column
                    label="总数"
                    width="180">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "category",
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
                },
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
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
            }
        },
        methods:{
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>
<style>
    .page_category .el-form-item__label{
        line-height: 12px;
        color: #23282d;
        font-size: 12px;
    }
    .page_category .el-form--label-top .el-form-item__label {
        padding: 0 0 5px;
    }
    .page_category .el-button--primary{
        background: #0085ba;
    }
    .page_category .el-select {
        width: 100%;
    }
</style>
<style scoped>

    .page_category{
        padding-top: 30px;
    }
    .right_content{
        padding-left: 50px;
    }
    .desc_input{
        margin-top: 5px;
        line-height: 14px;
        color: #606266;
    }
</style>
