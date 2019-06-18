<template>
  <div>
    <el-dialog :modal-append-to-body="false" :visible.sync="dialogFormVisible">
      <el-form :model="dialogForm" :inline="true" label-width="120px">
        <el-form-item label="新标标号">
          <el-input v-model="dialogForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新标类型">
          <el-select v-model="dialogForm.region">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="业务类型">
          <el-select v-model="dialogForm.region">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="投标人姓名">
          <el-input v-model="dialogForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="投标金额">
          <el-input v-model="dialogForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="贷款期限">
          <el-select v-model="dialogForm.region">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="投标金额">
          <el-input type="textarea" v-model="dialogForm.name" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <div class="top">
      <el-form :inline="true" :model="searchForm" size="small">
        <el-form-item label="标类型">
          <el-select v-model="searchForm.name">
            <el-option label="一" value="shanghai"></el-option>
            <el-option label="二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="标状态值">
          <el-select v-model="searchForm.name">
            <el-option label="一" value="shanghai"></el-option>
            <el-option label="二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="业务类型">
          <el-select v-model="searchForm.name">
            <el-option label="一" value="shanghai"></el-option>
            <el-option label="二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="贷款期限">
          <el-select v-model="searchForm.name">
            <el-option label="一" value="shanghai"></el-option>
            <el-option label="二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="起始时间">
          <el-date-picker
            v-model="searchForm.name"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
      <el-button type="primary" size="small" round @click="dialogFormVisible=true">新建</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="信标标号"></el-table-column>
      <el-table-column prop="name" label="业务员姓名"></el-table-column>
      <el-table-column prop="name" label="标类型"></el-table-column>
      <el-table-column prop="name" label="业务类型"></el-table-column>
      <el-table-column prop="name" label="续贷标号"></el-table-column>
      <el-table-column prop="name" label="投标人"></el-table-column>
      <el-table-column prop="name" label="投标金额"></el-table-column>
      <el-table-column prop="name" label="贷款期限"></el-table-column>
      <el-table-column prop="name" label="创建时间"></el-table-column>
      <el-table-column prop="address" label="备注"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small" @click="dialogFormVisible=true">编辑</el-button>
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
    name: "targetList",
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
        console.log(row)
      },
      handleCurrentChange(page) {
        console.log(page)
      },
      onSubmit() {

      },
      handleDelete(row){
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
