<template>
  <div>
    <div class="top">
      <el-button type="primary" size="small" round @click="dialogFormVisible=true">添加</el-button>
    </div>
    <el-dialog :modal-append-to-body="false" :visible.sync="dialogFormVisible" @closed="formData={}">
      <el-form :model="formData" :rules="rules" ref="ruleForm" :inline="true" label-width="120px">
        <el-form-item label="名称" prop="name">
          <el-input v-model="formData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="formData.remark" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit('ruleForm')">保 存</el-button>
      </div>
    </el-dialog>
    <el-dialog :modal-append-to-body="false" :visible.sync="dialogAccess">
      <div v-for="item of accessList" :key="item.id">
        <el-divider content-position="left">
          <el-checkbox-group v-model="checkList.permissionId">
            <el-checkbox :label="item.id">{{item.name}}</el-checkbox>
          </el-checkbox-group>
        </el-divider>
        <el-checkbox-group v-model="checkList.permissionId">
          <el-checkbox v-for="item_c of item.permissions" :key="item_c.id" :label="item_c.id">{{item_c.name}}
          </el-checkbox>
        </el-checkbox-group>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAccess = false">取 消</el-button>
        <el-button type="primary" @click="submitAccess">保 存</el-button>
      </div>
    </el-dialog>
    <el-table :data="tableData" style="width: 100%" :loading="loading">
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="handleAccess(scope.row)" type="text" size="small">权限</el-button>
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
    name: "role",
    data() {
      return {
        tableData: [],
        pagination: {},
        loading: false,
        dialogFormVisible: false,
        formData: {},
        dialogAccess: false,
        checkList: {},
        accessList: [],
        rules: {
          name: [{required: true, message: '请输入内容', trigger: 'blur'}]
        },
      }
    },
    methods: {
      handleClick(row) {
        this.dialogFormVisible = true
        this.formData = JSON.parse(JSON.stringify(row))
      },
      handleAccess(row) {
        if (this.accessList.length === 0) {
          this.getAllAccess()
        }
        this.$ajax.post('/seleuser', {id: row.id})
          .then((res) => {
            if (res.data.code === 1) {
              this.checkList = {roleId: row.id, permissionId: res.data.data}
            }
          })
        this.dialogAccess = true
      },
      submit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$ajax.post(this.formData.id ? '/updateRole' : '/addRole', this.formData)
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
      submitAccess() {
        this.checkList.permissionId = this.checkList.permissionId.join(',')
        this.$ajax.post('/addRolePermissionRelationship', this.checkList)
          .then((res) => {
            if (res.data.code === 1) {
              this.dialogAccess = false
              this.$message.success(res.data.msg)
            }
          })
      },
      fetch(page) {
        this.loading = true
        this.$ajax.post('/listRole', {limit: 10, page: page || 1})
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
          this.$ajax.post('/delRole', {roleId: row.id})
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
      getAllAccess() {
        this.$ajax.post('/selePermission', {page: 1, limit: 100})
          .then((res) => {
            if (res.data.code === 1) {
              this.accessList = res.data.data
            }
          })
      }
    },
    mounted() {
      this.fetch()
    }
  }
</script>

<style scoped>

</style>
