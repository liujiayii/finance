<template>
  <div>
    <el-dialog :modal-append-to-body="false" :visible.sync="dialogFormVisible" @closed="formData={}">
      <el-form :model="formData" :rules="rules" ref="ruleForm" :inline="true" label-width="120px">
        <el-form-item label="新标标号" prop="newBid">
          <el-input type="text" v-model="formData.newBid" autocomplete="off"
                    :disabled="Boolean(formData.id)"></el-input>
        </el-form-item>
        <el-form-item label="续贷标号" v-if="formData.bidState===2">
          <el-input type="text" v-model="formData.oldBid" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="标类型" prop="bidState">
          <el-select v-model="formData.bidState">
            <el-option label="新标" :value="1"></el-option>
            <el-option label="续贷" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="业务类型" prop="businessType">
          <el-select v-model="formData.businessType">
            <el-option label="惠车贷" :value="1"></el-option>
            <el-option label="惠房贷" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="投标人姓名" prop="name">
          <el-input v-model="formData.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="投标金额" prop="money">
          <el-input type="number" v-model="formData.money" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="贷款期限" prop="lengthOfMaturity">
          <el-input type="number" v-model="formData.lengthOfMaturity" autocomplete="off">
            <span slot="suffix">个月</span>
          </el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="formData.remark" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
    <div class="top">
      <el-form :inline="true" :model="searchForm" size="small">
        <el-form-item label="标类型">
          <el-select v-model="searchForm.bidState">
            <el-option label="新标" :value="1"></el-option>
            <el-option label="续贷" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="业务类型">
          <el-select v-model="searchForm.businessType">
            <el-option label="惠车贷" :value="1"></el-option>
            <el-option label="惠房贷" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="贷款期限">
          <el-input type="number" v-model="searchForm.lengthOfMaturity"><span slot="suffix">个月</span></el-input>
        </el-form-item>
        <el-form-item label="起始时间">
          <el-date-picker
            v-model="searchForm.time"
            type="daterange"
            @change="selectTime"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="fetch()">查询</el-button>
          <el-button type="primary" @click="reset()">重置</el-button>
        </el-form-item>
      </el-form>
      <el-button type="primary" size="small" round @click="dialogFormVisible=true">新建</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" :loading="loading">
      <el-table-column prop="id" label="上标id"></el-table-column>
      <el-table-column prop="newBid" label="新标标号"></el-table-column>
      <el-table-column prop="bidState" label="标类型">
        <template slot-scope="scope"><span>{{ scope.row.bidState===1?'新标':'续贷' }}</span></template>
      </el-table-column>
      <el-table-column prop="businessType" label="业务类型">
        <template slot-scope="scope"><span>{{ scope.row.businessType===1?'惠车贷':'惠房贷' }}</span></template>
      </el-table-column>
      <el-table-column prop="oldBid" label="续贷标号"></el-table-column>
      <el-table-column prop="name" label="投标人"></el-table-column>
      <el-table-column prop="money" label="投标金额"></el-table-column>
      <el-table-column prop="lengthOfMaturity" label="贷款期限"></el-table-column>
      <el-table-column prop="dateCreated" label="创建时间" :formatter="formatter"></el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <template v-if="!(roles==='风控专员')">
            <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
            <el-button @click="handleDelete(scope.row)" type="text" size="small">删除</el-button>
          </template>
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
  import {formatDate} from '../../config/utils'

  export default {
    name: "targetList",
    data() {
      return {
        tableData: [],
        pagination: {},
        loading: false,
        searchForm: {},
        dialogFormVisible: false,
        formData: {},
        rules: {
          newBid: [{required: true, message: '请输入内容', trigger: 'blur'}],
          bidState: [{required: true, message: '请输入内容', trigger: 'blur'}],
          businessType: [{required: true, message: '请输入内容', trigger: 'blur'}],
          name: [{required: true, message: '请输入内容', trigger: 'blur'}],
          lengthOfMaturity: [{required: true, message: '请输入内容', trigger: 'blur'}],
          money: [{required: true, message: '请输入内容', trigger: 'blur'}]
        },
        roles: ''
      }
    },
    methods: {
      reset() {
        this.searchForm = {}
        this.fetch()
      },
      formatter(row, column, cellValue, index) {
        return formatDate(new Date(cellValue), 'yyyy-MM-dd')
      },
      handleClick(row) {
        this.$router.push({path: "/Target/TargetListDetail", query: {id: row.id}})
      },
      handleEdit(row) {
        this.formData = JSON.parse(JSON.stringify(row))
        this.dialogFormVisible = true
      },
      selectTime(e) {
        this.searchForm.startTime = formatDate(e[0], 'yyyy-MM-dd')
        this.searchForm.endTime = formatDate(e[1], 'yyyy-MM-dd')
      },
      submit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            delete this.formData.dateCreated
            delete this.formData.bidEndTime
            this.$ajax.post(this.formData.id ? '/updateSuperscript' : '/insertSuperscript', this.formData)
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
        this.$ajax.post('/listSuperscript', {limit: 10, page: page || 1, ...this.searchForm})
          .then((res) => {
            if (res.data.code === 1) {
              const pagination = {...this.pagination};
              pagination.total = res.data.count
              pagination.current = page;
              this.loading = false;
              this.tableData = res.data.data;
              this.pagination = pagination;
              this.roles = res.data.roleName
            }
          })
      },
      handleDelete(row) {
        this.$confirm('是否删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$ajax.post('/deleteSuperscript', row)
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
