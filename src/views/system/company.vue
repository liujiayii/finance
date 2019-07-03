<template>
  <div>
    <div class="top">
      <el-button type="primary" size="small" round @click="dialogFormVisible=true">添加分公司信息</el-button>
    </div>
    <el-dialog :modal-append-to-body="false" :visible.sync="dialogFormVisible" @closed="formData={}">
      <el-form :model="formData" :rules="rules" ref="ruleForm" :inline="true" label-width="120px">
        <el-form-item label="分公司名称" prop="companyName">
          <el-input v-model="formData.companyName" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="所属地区" prop="areaCode">
          <el-input v-model="formData.areaCode" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="formData.remark" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="formData = false">取 消</el-button>
        <el-button type="primary" @click="submit('ruleForm')">保 存</el-button>
      </div>
    </el-dialog>
    <el-table :data="tableData" style="width: 100%" :loading="loading">
      <el-table-column prop="areaCode" label="地区"></el-table-column>
      <el-table-column prop="companyName" label="公司名称"></el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @current-change="fetch"
      :current-page="pagination.current"
      layout="total, prev, pager, next, jumper"
      :total="pagination.total">
    </el-pagination>
  </div>
</template>

<script>
  export default {
    name: "company",
    data() {
      return {
        tableData: [],
        pagination: {},
        loading: false,
        dialogFormVisible: false,
        formData: {},
        rules: {
          companyName: [{required: true, message: '请输入内容', trigger: 'blur'}],
          areaCode: [{required: true, message: '请输入内容', trigger: 'blur'}]
        },
      }
    },
    methods: {
      handleClick(row) {
        this.dialogFormVisible = true
        this.formData = JSON.parse(JSON.stringify(row))
      },
      submit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            delete this.formData.createTime
            this.$ajax.post(this.formData.id ? '/t_branch_company/upt_branch_company' : 't_branch_company/addt_branch_company', this.formData)
              .then((res) => {
                if (res.data.code === 1) {
                  this.dialogFormVisible = false
                  this.$message.success(res.data.msg);
                  this.fetch(this.pagination.current)
                }
              })
            return false;
          }
        });
      },
      fetch(page) {
        this.loading = true
        this.$ajax.post('/t_branch_company/selectt_branch_company', {limit: 10, page: page || 1})
          .then((res) => {
            if (res.data.code === 1) {
              const pagination = {...this.pagination};
              pagination.total = res.data.count
              pagination.current = page;
              this.loading = false;
              this.tableData = res.data.data;
              this.pagination = pagination;
            }
          })
      },
      handleDelete(row) {
        this.$confirm('是否删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$ajax.post('/t_branch_company/delt_branch_company', row)
            .then((res) => {
              if (res.data.code === 1) {
                this.$message.success(res.data.msg);
                this.fetch(this.pagination.current)
              }
            })
        }).catch(() => {
          this.$message.info('已取消');
        });
      }
    },
    mounted() {
      this.fetch()
    }
  }
</script>

<style scoped>

</style>
