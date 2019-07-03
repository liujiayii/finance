<template>
  <div>
    <el-dialog :visible.sync="dialogFormVisible" @closed="closeDialog" append-to-body>
      <el-dialog :visible.sync="dialogFormVisible2" @closed="formData2={}" :modal="false">
        <el-form :model="formData2" :rules="rules" ref="ruleForm2" :inline="true" label-width="120px">
          <el-form-item label="项目名称" prop="name">
            <el-input v-model="formData2.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="金额" prop="money">
            <el-input type="number" v-model="formData2.money" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="摘要">
            <el-input type="textarea" v-model="formData2.message" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submitTable2('ruleForm2')">确 定</el-button>
        </div>
      </el-dialog>
      <el-button type="primary" @click="dialogFormVisible2=true" size="mini">添加</el-button>
      <el-table :data="tableData2" style="width: 100%" size="mini">
        <el-table-column prop="name" label="项目名称"></el-table-column>
        <el-table-column prop="message" label="摘要"></el-table-column>
        <el-table-column prop="money" label="金额"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleDelete2(scope.row,scope.$index)" type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-form :model="formData" :rules="rules" ref="ruleForm" :inline="true" label-width="120px" style="margin-top: 20px">
        <el-form-item label="类型" prop="type">
          <el-select v-model="formData.type" :disabled="Boolean(formData.id)">
            <el-option label="收入" :value="1"></el-option>
            <el-option label="支出" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="报销人姓名" prop="name">
          <el-input v-model="formData.name" autocomplete="off" :disabled="Boolean(formData.id)"></el-input>
        </el-form-item>
        <el-form-item label="分公司" prop="branchCompanyId">
          <el-select v-model="formData.branchCompanyId">
            <el-option v-for="item of companyList" :label="item.companyName" :value="item.id"
                       :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="formData.remark" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <el-upload
        action="/insertImg"
        list-type="picture-card"
        :file-list="fileList"
        :on-success="handleSuccess"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogImageVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      <div slot="footer" class="dialog-footer">
        <p>当前总计：{{totalMoney}}元</p>
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
    <div class="top">
      <el-form :inline="true" :model="searchForm" size="small">
        <el-form-item label="分类">
          <el-select v-model="searchForm.type" clearable>
            <el-option label="收入" :value="1"></el-option>
            <el-option label="支出" :value="2"></el-option>
          </el-select>
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
      <el-button type="primary" size="small" round @click="dialogFormVisible=true">新建收支单</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%" :loading="loading">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="companyId" label="分公司"></el-table-column>
      <el-table-column prop="name" label="报销人姓名"></el-table-column>
      <el-table-column prop="money" label="总金额"></el-table-column>
      <el-table-column prop="type" label="类型">
        <template slot-scope="scope"><span>{{ scope.row.type===1?'收入':'支出'}}</span></template>
      </el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
      <el-table-column prop="printNumber" label="已打印次数"></el-table-column>
      <el-table-column prop="time" label="创建时间" :formatter="formatter"></el-table-column>
      <el-table-column prop="establishName" label="创建人"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="handleEdit(scope.row)">编辑</el-button>
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
  import {formatDate} from '../../config/utils'

  export default {
    name: "financeList",
    data() {
      return {
        tableData: [],
        pagination: {},
        searchForm: {},
        loading: false,
        dialogFormVisible: false,
        formData: {},
        companyList: [],
        tableData2: [],
        dialogFormVisible2: false,
        formData2: {},
        dialogImageUrl: '',
        dialogImageVisible: false,
        fileList: [],
        rules: {
          type: [{required: true, message: '请输入内容', trigger: 'blur'}],
          name: [{required: true, message: '请输入内容', trigger: 'blur'}],
          branchCompanyId: [{required: true, message: '请输入内容', trigger: 'blur'}],
          money: [{required: true, message: '请输入内容', trigger: 'blur'}]
        },
      };
    },
    methods: {
      reset() {
        this.searchForm = {}
        this.fetch()
      },
      closeDialog() {
        this.formData = {}
        this.fileList = []
        this.tableData2 = []
      },
      getCompany() {
        this.$ajax.post('/t_branch_company/selectt_branch_company', {page: 1, limit: 100})
          .then((res) => {
            if (res.data.code === 1) {
              this.companyList = res.data.data
            }
          })
      },
      formatter(row, column, cellValue, index) {
        return formatDate(new Date(cellValue), 'yyyy-MM-dd')
      },
      handleEdit(row) {
        this.$ajax.post('/getIncomeAndExpensesProject', {id: row.id}).then((res) => {
          if (res.data.code === 1) {
            this.tableData2 = res.data.data
          }
        })
        let cacheFile = []
        for (let i = 0; i < row.imgUrl.split(',').length; i++) {
          if (row.imgUrl.split(',')[i] !== '') cacheFile.push({name: i, url: row.imgUrl.split(',')[i]})
        }
        this.fileList = cacheFile
        this.formData = JSON.parse(JSON.stringify({...row, branchCompanyId: row.companyName}))
        this.dialogFormVisible = true
      },
      selectTime(e) {
        this.searchForm.startTime = formatDate(e[0], 'yyyy-MM-dd')
        this.searchForm.endTime = formatDate(e[1], 'yyyy-MM-dd')
      },
      submit(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            delete this.formData.time
            let img = ''
            for (let i = 0; i < this.fileList.length; i++) {
              img += (i === 0 ? '' : ',') + (this.fileList[i].response || this.fileList[i].url)
            }
            this.formData.imgUrl = img
            this.$ajax.post(this.formData.id ? '/updateIncomeAndExpenses' : '/insertIncomeAndExpenses', {
              ...this.formData,
              state: 1,
              money: this.totalMoney,
              i: JSON.stringify(this.tableData2)
            }).then((res) => {
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
        this.$ajax.post('/listIncomeAndExpenses', {limit: 10, page: page || 1, ...this.searchForm, state: 1})
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
          this.$ajax.post('/deleteIncomeAndExpenses', row)
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
      submitTable2(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.tableData2 = [this.formData2, ...this.tableData2]
            this.dialogFormVisible2 = false
            return false;
          }
        });
      },
      handleDelete2(row, index) {
        this.tableData2.splice(index, 1)
      },
      handleRemove(file, fileList) {
        this.fileList = fileList
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogImageVisible = true;
      },
      handleSuccess(response, file, fileList) {
        this.fileList = fileList
      }
    },
    computed: {
      totalMoney() {
        let total = 0
        for (let i = 0; i < this.tableData2.length; i++) {
          total += this.tableData2[i].money * 1
        }
        return total
      }
    },
    mounted() {
      this.fetch()
      this.getCompany()
    }
  }
</script>

<style scoped>

</style>
