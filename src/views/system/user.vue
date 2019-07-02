<template>
  <div>
    <div class="top">
      <el-form :inline="true" :model="searchForm" size="small">
        <el-form-item label="姓名">
          <el-input v-model="searchForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="searchForm.state">
            <el-option label="正常" :value="1"></el-option>
            <el-option label="锁定" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分公司">
          <el-select v-model="searchForm.companyId">
            <el-option v-for="item of companyList" :label="item.companyName" :key="item.id"
                       :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="fetch()">查询</el-button>
          <el-button type="primary" @click="reset()">重置</el-button>
        </el-form-item>
      </el-form>
      <el-button type="primary" size="small" round @click="dialogFormVisible=true">添加用户</el-button>
    </div>
    <el-dialog :modal-append-to-body="false" :visible.sync="dialogFormVisible" @closed="formData={}">
      <el-form :model="formData" :rules="rules" ref="ruleForm" :inline="true" label-width="120px">
        <el-form-item label="登录账户" prop="username">
          <el-input v-model="formData.username" autocomplete="off" :disabled="Boolean(formData.id)"></el-input>
        </el-form-item>
        <el-form-item label="密码" v-if="!formData.id" prop="password">
          <el-input v-model="formData.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="账号状态" prop="state">
          <el-select v-model="formData.state">
            <el-option label="正常" :value="1"></el-option>
            <el-option label="锁定" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="角色" prop="role_id">
          <el-select v-model="formData.role_id">
            <el-option v-for="item of roleList" :label="item.name" :value="item.id" :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="姓名" prop="name">
          <el-input v-model="formData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="formData.phone" autocomplete="off" :maxlength="11"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model="formData.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="formData.sex">
            <el-option label="女" :value="0"></el-option>
            <el-option label="男" :value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="所属公司" prop="companyId">
          <el-select v-model="formData.companyId">
            <el-option v-for="item of companyList" :label="item.companyName" :key="item.id"
                       :value="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="formData.remark" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit('ruleForm')">提 交</el-button>
      </div>
    </el-dialog>
    <el-dialog :modal-append-to-body="false" :visible.sync="dialogFormVisible2" @closed="formData2={}">
      <el-form :model="formData2" :rules="rules" ref="ruleForm2" :inline="true" label-width="120px">
        <el-form-item label="登录账户" prop="username">
          <el-input v-model="formData2.username" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="旧密码" prop="password">
          <el-input v-model="formData2.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newpassword">
          <el-input v-model="formData2.newpassword" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit2('ruleForm2')">提 交</el-button>
      </div>
    </el-dialog>
    <el-table :data="tableData" style="width: 100%" :loading="loading">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="phone" label="电话"></el-table-column>
      <el-table-column prop="username" label="账号"></el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
      <el-table-column label="账户状态">
        <template slot-scope="scope">
          <el-switch :value="scope.row.state===1" active-text="锁定" inactive-text="正常"
                     @change="updateState(scope.row)"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="handlePassword(scope.row)" type="text" size="small">密码</el-button>
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
    name: "user",
    data() {
      return {
        tableData: [],
        pagination: {},
        loading: false,
        searchForm: {},
        dialogFormVisible: false,
        dialogFormVisible2: false,
        formData: {},
        formData2: {},
        companyList: [],
        roleList: [],
        rules: {
          username: [{required: true, message: '请输入内容', trigger: 'blur'}],
          password: [{required: true, message: '请输入内容', trigger: 'blur'}],
          newpassword: [{required: true, message: '请输入内容', trigger: 'blur'}],
          state: [{required: true, message: '请输入内容', trigger: 'blur'}],
          role_id: [{required: true, message: '请输入内容', trigger: 'blur'}],
          name: [{required: true, message: '请输入内容', trigger: 'blur'}],
          phone: [{required: true, message: '请输入内容', trigger: 'blur'}],
          age: [{required: true, message: '请输入内容', trigger: 'blur'}],
          sex: [{required: true, message: '请输入内容', trigger: 'blur'}],
          companyId: [{required: true, message: '请输入内容', trigger: 'blur'}]
        },
      }
    },
    methods: {
      reset() {
        this.searchForm = {}
        this.fetch()
      },
      handleClick(row) {
        this.dialogFormVisible = true
        this.formData = JSON.parse(JSON.stringify(row))
      },
      handlePassword(row) {
        this.dialogFormVisible2 = true
        this.formData2 = JSON.parse(JSON.stringify({username: row.username, id: row.id}))
      },
      submit2(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (this.formData.id) delete this.formData.password
            this.$ajax.post('/uatepassword', this.formData2)
              .then((res) => {
                if (res.data.code === 1) {
                  this.dialogFormVisible2 = false
                  this.$message.success(res.data.msg);
                }
              })
            return false;
          }
        });
      },
      submit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            delete this.formData.createTime
            delete this.formData.birthday
            if (this.formData.id) delete this.formData.password
            this.$ajax.post(this.formData.id ? '/updateusersert' : '/adduser', this.formData)
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
        this.$ajax.post('/selectuserserlist', {limit: 10, page: page || 1, ...this.searchForm})
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
          this.$ajax.post('/delectuser', row)
            .then((res) => {
              if (res.data.code === 1) {
                this.$message.success(res.data.msg);
                this.fetch(this.pagination.current)
              }
            })
        }).catch(() => {
          this.$message.info('已取消');
        });
      },
      updateState(row) {
        this.$ajax.post('/updateuserserts', {id: row.id, state: row.state === 1 ? 2 : 1})
          .then((res) => {
            if (res.data.code === 1) {
              this.$message.success(res.data.msg)
              this.fetch(this.pagination.current)
            }
          })
      },
      getCompany() {
        this.$ajax.post('/t_branch_company/selectt_branch_company', {page: 1, limit: 100})
          .then((res) => {
            if (res.data.code === 1) {
              this.companyList = res.data.data
            }
          })
      },
      getAllRole() {
        this.$ajax.post('/listRole', {page: 1, limit: 100})
          .then((res) => {
            if (res.data.code === 1) {
              this.roleList = res.data.data
            }
          })
      }
    },
    mounted() {
      this.fetch()
      this.getCompany()
      this.getAllRole()
    }
  }
</script>

<style scoped>

</style>
