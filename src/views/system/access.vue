<template>
  <div>
    <el-alert title="不要轻举妄动，错误的设置项可能会导致系统崩溃" type="warning" show-icon>
    </el-alert>
    <div class="top">
      <el-button type="primary" size="small" round @click="dialogFormVisible=true">添加</el-button>
    </div>
    <el-dialog :modal-append-to-body="false" :visible.sync="dialogFormVisible" @closed="formData={}">
      <el-form :model="formData" :inline="true" label-width="120px">
        <el-form-item label="权限名称">
          <el-input v-model="formData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="父级ID">
          <el-input v-model="formData.parentId" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="排序">
          <el-input v-model="formData.sorting" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="前端标识">
          <el-input v-model="formData.url" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图标">
          <el-input v-model="formData.icons" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">保 存</el-button>
      </div>
    </el-dialog>
    <el-table :data="tableData" style="width: 100%" :loading="loading">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table :data="props.row.permissions" style="width: 100%" size="small" border>
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="name" label="权限名称"></el-table-column>
            <el-table-column prop="url" label="前端标识"></el-table-column>
            <el-table-column prop="sorting" label="排序"></el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
                <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="name" label="权限名称"></el-table-column>
      <el-table-column prop="url" label="前端标识"></el-table-column>
      <el-table-column prop="icons" label="图标"></el-table-column>
      <el-table-column prop="sorting" label="排序"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "access",
    data() {
      return {
        tableData: [],
        pagination: {},
        loading: false,
        dialogFormVisible: false,
        formData: {},
      }
    },
    methods: {
      handleClick(row) {
        this.dialogFormVisible = true
        this.formData = JSON.parse(JSON.stringify(row))
      },
      submit() {
        this.$ajax.post(this.formData.id ? '/upPermission' : '/addPermission', this.formData)
          .then((res) => {
            if (res.data.code === 1) {
              this.dialogFormVisible = false
              this.$message.success(res.data.msg);
              this.fetch(this.pagination.current)
            }
          })
      },
      fetch(page) {
        this.loading = true
        this.$ajax.post('/selePermission', {limit: 10, page: page || 1})
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
          this.$ajax.post('/delPermission', row)
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
