<template>
  <div>
    <el-dialog :visible.sync="dialogFormVisible" @closed="closeDialog" append-to-body>
      <el-dialog :visible.sync="dialogFormVisible2" @closed="formData2={}" :modal="false">
        <el-form :model="formData2" :inline="true" label-width="120px">
          <el-form-item label="项目名称">
            <el-input v-model="formData2.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="金额">
            <el-input v-model="formData2.money" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="摘要">
            <el-input type="textarea" v-model="formData2.message" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="submitTable2">确 定</el-button>
        </div>
      </el-dialog>
      <el-form :model="formData" :inline="true" label-width="120px">
        <el-form-item label="分公司">
          <el-select v-model="formData.branchCompanyId" disabled>
            <el-option v-for="item of companyList" :label="item.companyName" :value="item.id"
                       :key="item.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="报销时间">
          <el-date-picker disabled v-model="formData.time" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
      </el-form>
      <el-table :data="tableData2" style="width: 100%;margin: 20px 0" size="mini" border>
        <el-table-column prop="name" label="项目名称"></el-table-column>
        <el-table-column prop="message" label="摘要"></el-table-column>
        <el-table-column prop="money" label="金额"></el-table-column>
      </el-table>
      <el-form :model="formData" :inline="true" label-width="120px">
        <el-form-item label="类型">
          <el-select v-model="formData.type" disabled>
            <el-option label="收入" :value="1"></el-option>
            <el-option label="支出" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="报销人姓名">
          <el-input v-model="formData.name" autocomplete="off" readonly></el-input>
        </el-form-item>
        <el-form-item label="审核人">
          <el-input v-model="formData.auditName" autocomplete="off" readonly></el-input>
        </el-form-item>
        <el-form-item label="总金额">
          <el-input v-model="formData.money" autocomplete="off" readonly></el-input>
        </el-form-item>
        <el-form-item label="备注">
          <el-input type="textarea" v-model="formData.remark" autocomplete="off" readonly></el-input>
        </el-form-item>
      </el-form>
      <el-upload
        disabled
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
        <el-button @click="dialogFormVisible = false">关 闭</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible.sync="dialogFormVisible3" :modal-append-to-body="false" width="1200px" class="print-main">
      <div ref="print">
        <div class="table-frame">
          <div class="rptype">付：</div>
          <div>
            <div style="width: 100%; height: 37px;margin-bottom: 74px">
              <div class="receipt-title" style="margin-right: 325px;">
                <h1>费用报销单</h1>
                <hr width="100%" color="#000000"/>
                <hr width="100%" color="#000000"/>
              </div>
            </div>
            <div class="receipt-nav">
              <div class="left">交款单位：<b>{{printData.companyName}}</b></div>
              <div class="right receipt-date">{{formatDate(new Date(printData.time),'yyyy-MM-dd')}}</div>
            </div>
            <table class="reimbursement-table" cellpadding="0" cellspacing="0" width="890px;" border="1">
              <tr>
                <td>报销项目</td>
                <td colspan="4">摘要</td>
                <td colspan="3"><b>金额</b></td>
              </tr>
              <tr v-for="item of printData.list" :key="item.id">
                <td>{{item.name}}</td>
                <td colspan="4">{{item.message}}</td>
                <td colspan="3">{{item.money}}</td>
              </tr>
              <tr>
                <td>
                  <div class="total left">
                    <div class="alignment">合计</div>
                    <div class="alignment1">人民币</div>
                  </div>
                  <div class="vertical left">︵大写︶</div>
                  <div class="total left">
                    {{printData.moneys}}
                  </div>
                </td>
                <td colspan="4">
                  <b class="ls4"></b>
                </td>
                <td colspan="3" style="font-weight: bold;">
                  ￥<u>{{printData.money}}</u>
                </td>
              </tr>
            </table>
            <p>备注：{{printData.remark}}</p>
            <span class="vertical">单位负责人</span>
            <div class="right">
              <span class="vertical">财务主管</span>
              <span class="vertical">{{printData.auditName}}</span>
              <span class="vertical">记&nbsp;&nbsp;&nbsp;&nbsp;账</span>
              <span class="vertical">{{printData.auditName}}</span>
              <span class="vertical">出&nbsp;&nbsp;&nbsp;&nbsp;纳</span>
              <span class="vertical">审&nbsp;&nbsp;&nbsp;&nbsp;核</span>
              <span class="vertical">经&nbsp;&nbsp;&nbsp;&nbsp;办</span>
              <span class="vertical">{{printData.establishName}}</span>
            </div>
          </div>
          <div class="RightVertical right">
            白联&nbsp;存根&nbsp;&nbsp;&nbsp;红联&nbsp;记账&nbsp;&nbsp;&nbsp;黄联&nbsp;票据
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="doPrint">打 印</el-button>
      </div>
    </el-dialog>
    <el-table :data="tableData" style="width: 100%" :loading="loading">
      <el-table-column prop="id" label="上标id"></el-table-column>
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
          <el-button type="text" size="small" @click="handleEdit(scope.row)">查看</el-button>
          <template v-if="scope.row.state===1">
            <el-button @click="handleDelete(scope.row,'2')" type="text" size="small">通过</el-button>
            <el-button @click="handleDelete(scope.row,'3')" type="text" size="small">拒绝</el-button>
          </template>
          <template v-else>
            <el-button type="text" @click="showPrint(scope.row)">打印</el-button>
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
  export default {
    name: "financeCheck",
    data() {
      return {
        tableData: [],
        pagination: {},
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
        dialogFormVisible3: false,
        printData: {}
      }
    },
    methods: {
      formatDate(date, fmt) {
        let o = {
          'M+': date.getMonth() + 1, // 月份
          'd+': date.getDate(), // 日
          'h+': date.getHours(), // 小时
          'm+': date.getMinutes(), // 分
          's+': date.getSeconds(), // 秒
          'S': date.getMilliseconds() // 毫秒
        }
        if (/(y+)/.test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
        }
        for (let k in o) {
          if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
          }
        }
        return fmt
      },
      showPrint(row) {
        this.$ajax.post(row.type === 1 ? '/printconrevenue' : '/printcontexpenditure', {id: row.id}).then((res) => {
          if (res.data.code === 1) {
            this.printData = res.data.data
            this.dialogFormVisible3 = true
          }
        })
      },
      doPrint() {
        this.$print(this.$refs.print) // 使用
      },
      closeDialog() {
        this.formData = {}
        this.fileList = []
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
        return this.formatDate(new Date(cellValue), 'yyyy-MM-dd')
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
        this.searchForm.startTime = this.formatDate(e[0], 'yyyy-MM-dd')
        this.searchForm.endTime = this.formatDate(e[1], 'yyyy-MM-dd')
      },
      submit() {
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
      },
      handleDelete(row, state) {
        if (state === '2') {
          this.$confirm('是否通过?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$ajax.post('/updateIncomeAndExpensesState', {id: row.id, state})
              .then((res) => {
                if (res.data.code === 1) {
                  this.$message.success(res.data.msg);
                  this.fetch(this.pagination.current)
                }
              })
          }).catch(() => {
            this.$message.info('已取消');
          });
        } else if (state === '3') {
          this.$prompt('请输入拒绝理由', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern: /\S/,
            inputErrorMessage: '请输入内容'
          }).then(({value}) => {
            this.$ajax.post('/updateIncomeAndExpensesState', {id: row.id, state, cause: value})
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
      submitTable2() {
        this.tableData2 = [this.formData2, ...this.tableData2]
        this.dialogFormVisible2 = false
      },
      handleDelete2(row, index) {
        this.tableData2.splice(index, 1)
      },
      handleRemove(file, fileList) {
        this.fileList = fileList
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogImageVisible = true;
      },
      handleSuccess(response, file, fileList) {
        console.log(fileList)
        this.fileList = fileList
      },
      fetch(page) {
        this.loading = true
        this.$ajax.post('/listAllIncomeAndExpenses', {limit: 10, page: page || 1})
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
