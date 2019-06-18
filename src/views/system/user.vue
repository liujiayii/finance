<template>
  <div>
    <div class="top">
      <el-form :inline="true" :model="searchForm" size="small">
        <el-form-item label="姓名">
          <el-input v-model="searchForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="searchForm.name">
            <el-option label="一" value="shanghai"></el-option>
            <el-option label="二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分公司">
          <el-select v-model="searchForm.name">
            <el-option label="一" value="shanghai"></el-option>
            <el-option label="二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-button type="primary" size="small" round @click="dialogFormVisible=true">添加用户</el-button>
    </div>
    <el-dialog :modal-append-to-body="false" :visible.sync="dialogFormVisible">
      <el-form :model="dialogForm" :inline="true" label-width="120px">
        <el-form-item label="登录账户">
          <el-input v-model="dialogForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="dialogForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="dialogForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="dialogForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio v-model="dialogForm.name" label="1">男</el-radio>
          <el-radio v-model="dialogForm.name" label="2">女</el-radio>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="dialogForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker v-model="dialogForm.name" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="所属公司">
          <el-select v-model="dialogForm.name">
            <el-option label="一" value="shanghai"></el-option>
            <el-option label="二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="dialogForm.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">提 交</el-button>
      </div>
    </el-dialog>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="ID"></el-table-column>
      <el-table-column prop="name" label="账户名称"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="name" label="电话"></el-table-column>
      <el-table-column prop="name" label="性别"></el-table-column>
      <el-table-column prop="name" label="年龄"></el-table-column>
      <el-table-column prop="name" label="生日"></el-table-column>
      <el-table-column prop="name" label="创建时间"></el-table-column>
      <el-table-column prop="name" label="所属分公司"></el-table-column>
      <el-table-column prop="name" label="备注"></el-table-column>
      <el-table-column label="账户状态">
        <template slot-scope="scope">
          <el-switch active-text="锁定" inactive-text="正常"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="handleCurrentChange"
      layout="prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: "user",
    data() {
      return {
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
        pagination: {},
        searchForm: {},
        dialogFormVisible: false,
        dialogForm: {}
      }
    },
    methods: {
      handleClick(row) {
        this.dialogFormVisible = true
        console.log(row)
      },
      handleCurrentChange(page) {
        console.log(page)
      },
      onSubmit() {

      },
      handleDelete(row) {
        console.log(row)
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>

<style scoped>

</style>
