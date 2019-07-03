<template>
  <div>
    <el-dialog :visible.sync="dialogFormVisible" @closed="closeDialog" :modal-append-to-body="false">
      <div>
        <el-form :model="formData" :inline="true" label-width="120px">
          <el-form-item label="报销单类型">
            <el-select v-model="formData.expenseAccountType" disabled>
              <el-option label="新标续贷报销单" :value="1"></el-option>
              <el-option label="本息报销单" :value="2"></el-option>
            </el-select>
          </el-form-item>
          <template v-if="formData.expenseAccountType===2">
            <el-form-item label="还款期数">
              <el-input type="number" v-model="formData.allottedTime" autocomplete="off" readonly><span
                slot="suffix">个月</span>
              </el-input>
            </el-form-item>
            <el-form-item label="类别">
              <el-select v-model="formData.interestType" disabled>
                <el-option label="续贷还平台" :value="1"></el-option>
                <el-option label="到期还平台" :value="2"></el-option>
                <el-option label="提前还平台" :value="3"></el-option>
                <el-option label="逾期还平台" :value="4"></el-option>
              </el-select>
            </el-form-item>
          </template>
          <el-form-item label="所属公司">
            <el-select v-model="formData.companyName" disabled>
              <el-option v-for="(item,index) of companyList" :label="item" :value="item" :key="index"></el-option>
            </el-select>
          </el-form-item>
          <template v-if="formData.expenseAccountType===1">
            <el-form-item v-if="formData['平台服务费+利息']" label="平台服务费+利息">
              <el-input v-model="formData['平台服务费+利息']" autocomplete="off" readonly><span slot="suffix">元</span>
              </el-input>
            </el-form-item>
            <el-form-item v-if="formData['点位费']" label="点位费">
              <el-input v-model="formData['点位费']" autocomplete="off" readonly><span slot="suffix">元</span></el-input>
            </el-form-item>
            <el-form-item v-if="formData['房产']" label="房产">
              <el-input v-model="formData['房产']" autocomplete="off" readonly><span slot="suffix">元</span></el-input>
            </el-form-item>
            <el-form-item v-if="formData['档案管理']" label="档案管理">
              <el-input v-model="formData['档案管理']" autocomplete="off" readonly><span slot="suffix">元</span></el-input>
            </el-form-item>
            <el-form-item v-if="formData['垫资费']" label="垫资费">
              <el-input v-model="formData['垫资费']" autocomplete="off" readonly><span slot="suffix">元</span></el-input>
            </el-form-item>
            <el-form-item v-if="formData['过账费']" label="过账费">
              <el-input v-model="formData['过账费']" autocomplete="off" readonly><span slot="suffix">元</span></el-input>
            </el-form-item>
            <el-form-item v-if="formData['实地费']" label="实地费">
              <el-input v-model="formData['实地费']" autocomplete="off" readonly><span slot="suffix">元</span></el-input>
            </el-form-item>
            <el-form-item v-if="formData['GPS安装']" label="GPS安装">
              <el-input v-model="formData['GPS安装']" autocomplete="off" readonly><span slot="suffix">元</span></el-input>
            </el-form-item>
            <el-form-item v-if="formData['停车费']" label="停车费">
              <el-input v-model="formData['停车费']" autocomplete="off" readonly><span slot="suffix">元</span></el-input>
            </el-form-item>
            <el-form-item v-if="formData['进抵费']" label="进抵费">
              <el-input v-model="formData['进抵费']" autocomplete="off" readonly><span slot="suffix">元</span></el-input>
            </el-form-item>
            <el-form-item v-if="formData['查档费']" label="查档费">
              <el-input v-model="formData['查档费']" autocomplete="off" readonly><span slot="suffix">元</span></el-input>
            </el-form-item>
            <el-form-item v-if="formData['他项费']" label="他项费">
              <el-input v-model="formData['他项费']" autocomplete="off" readonly><span slot="suffix">元</span></el-input>
            </el-form-item>
          </template>
          <template v-if="formData.expenseAccountType===2">
            <el-form-item v-if="formData['本金']" label="本金">
              <el-input v-model="formData['本金']" autocomplete="off" readonly><span
                slot="suffix">元</span></el-input>
            </el-form-item>
            <el-form-item v-if="formData['利息']" label="利息">
              <el-input v-model="formData['利息']" autocomplete="off" readonly><span
                slot="suffix">元</span></el-input>
            </el-form-item>
            <el-form-item v-if="formData['违约金']" label="违约金">
              <el-input v-model="formData['违约金']" autocomplete="off" readonly><span
                slot="suffix">元</span></el-input>
            </el-form-item>
          </template>
          <el-form-item label="备注">
            <el-input type="textarea" v-model="formData.remark" autocomplete="off" readonly></el-input>
          </el-form-item>
        </el-form>
      </div>
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
      <el-dialog :visible.sync="dialogImageVisible" append-to-body :modal="false">
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
          <div class="rptype">收：</div>
          <div>
            <div style="width: 100%; height: 37px;margin-bottom: 74px">
              <div class="number">
                N<u>o</u><span id="one">{{printData.id}}</span>
              </div>
              <div class="receipt-title">
                <h1>收据</h1>
                <hr width="100%" color="#000000"/>
                <hr width="100%" color="#000000"/>
              </div>
            </div>
            <div class="receipt-nav">
              <div class="left">
                交款单位：<b>{{printData.companyName}}</b>
              </div>
              <div class="right receipt-date">
                <!--时间：{{printData.companyName}}-->
              </div>
            </div>
            <table class="receipt-table" cellpadding="0" cellspacing="0" width="890px;" border="1">
              <tr>
                <td width="125px">客户姓名</td>
                <td><b>{{printData.name}}</b></td>
                <template v-if="printData.oldBid">
                  <td>新标号</td>
                  <td><b>{{printData.newBid}}</b></td>
                  <td>旧标号</td>
                  <td><b>{{printData.oldBid}}</b></td>
                </template>
                <template v-else>
                  <td>标号</td>
                  <td colspan="3"><b>{{printData.newBid}}</b></td>
                </template>
                <td>金额</td>
                <td><b>{{printData.money}}元</b></td>
                <td>期限</td>
                <td><b>{{printData.lengthOfMaturity}}个月</b></td>
              </tr>
              <tr v-for="item of printData.list" :key="item.id">
                <td>{{item.name}}</td>
                <td colspan="9" id="text1" onkeyup="jisuan();">{{item.money}}元</td>
              </tr>
              <tr>
                <td>
                  <div class="total left">
                    <div class="alignment">合计</div>
                    <div class="alignment1">人民币</div>
                  </div>
                  <div class="vertical left">︵大写︶</div>
                </td>
                <td colspan="7">
                  <b class="ls4">{{printData.expenseAccountMoneys}}</b>
                </td>
                <td colspan="2" style="font-weight: bold;">
                  ￥<u id="text4">{{printData.expenseAccountMoney}}</u>
                </td>
              </tr>
            </table>
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
          <div class="RightVertical">
            白联&nbsp;&nbsp;存根&nbsp;&nbsp;&nbsp;红联&nbsp;&nbsp;记账&nbsp;&nbsp;&nbsp;黄联&nbsp;&nbsp;票据
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="doPrint">打 印</el-button>
      </div>
    </el-dialog>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="报销单ID"></el-table-column>
      <el-table-column prop="expenseAccountType" label="报销单类型">
        <template slot-scope="scope"><span>{{ scope.row.expenseAccountType===1?'新标续贷报销单':'本息报销单'}}</span></template>
      </el-table-column>
      <el-table-column prop="expenseAccountState" label="报销单状态">
        <template slot-scope="scope"><span>{{ scope.row.expenseAccountState===1?'草稿':scope.row.expenseAccountState===2?'未审核': scope.row.expenseAccountState===3?'已审核':'已驳回'}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="expenseAccountMoney" label="报销总金额"></el-table-column>
      <el-table-column prop="dateCreated" label="创建日期" :formatter="formatter"></el-table-column>
      <el-table-column prop="allottedTime" label="还款期数"></el-table-column>
      <el-table-column prop="printNumber" label="已打印次数"></el-table-column>
      <el-table-column prop="remark" label="备注"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <template v-if="scope.row.expenseAccountState===2">
            <el-button type="text" @click="submit(scope.row,'3')">通过</el-button>
            <el-button type="text" @click="submit(scope.row,'4')">拒绝</el-button>
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
  import {formatDate} from '../../config/utils'

  export default {
    name: "targetCheck",
    data() {
      return {
        tableData: [],
        pagination: {},
        loading: false,
        topDetail: {},
        dialogFormVisible: false,
        formData: {},
        companyList: [],
        dialogImageUrl: '',
        dialogImageVisible: false,
        dialogFormVisible3: false,
        fileList: [],
        printData: {}
      }
    },
    methods: {
      doPrint() {
        this.$print(this.$refs.print) // 使用
      },
      showPrint(row) {
        this.$ajax.post('printcont', {id: row.id}).then((res) => {
          if (res.data.code === 1) {
            this.printData = res.data.data
            this.dialogFormVisible3 = true
          }
        })
      },
      closeDialog() {
        this.formData = {}
        this.fileList = []
      },
      formatter(row, column, cellValue, index) {
        return formatDate(new Date(cellValue), 'yyyy-MM-dd')
      },
      handleClick(row) {
        this.dialogFormVisible = true
        this.$ajax.post('/listByExpenseAccountId', {id: row.id})
          .then((res) => {
            if (res.data.code === 1) {
              let cacheObj = {}
              for (let i = 0; i < res.data.data.length; i++) {
                cacheObj[res.data.data[i].name] = res.data.data[i].money
              }
              let cacheFile = []
              for (let i = 0; i < row.imageUrl.split(',').length; i++) {
                if (row.imageUrl.split(',')[i] !== '') cacheFile.push({name: i, url: row.imageUrl.split(',')[i]})
              }
              this.fileList = cacheFile
              this.formData = JSON.parse(JSON.stringify({...row, ...cacheObj}))
            }
          })
      },
      handleDelete(row) {
        this.$confirm('是否删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          inputPattern: /\S/,
          inputErrorMessage: '请输入内容'
        }).then(() => {
          this.$ajax.post('/deleteExpenseAccount', row)
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
      submit(row, expenseAccountState) {
        if (expenseAccountState === '3') {
          this.$confirm('是否通过?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$ajax.post('/updateExpenseAccountState', {id: row.id, expenseAccountState})
              .then((res) => {
                if (res.data.code === 1) {
                  this.$message.success(res.data.msg);
                  this.fetch(this.pagination.current)
                }
              })
          }).catch(() => {
            this.$message.info('已取消');
          });
        } else if (expenseAccountState === '4') {
          this.$prompt('请输入拒绝理由', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            inputPattern: /\S/,
            inputErrorMessage: '请输入内容'
          }).then(({value}) => {
            this.$ajax.post('/updateExpenseAccountState', {id: row.id, expenseAccountState, cause: value})
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
      getCompany() {
        this.$ajax.post('/t_branch_company/selectCompanyName')
          .then((res) => {
            if (res.data.code === 1) {
              this.companyList = res.data.data
            }
          })
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
        this.$ajax.post('/list', {limit: 10, page: page || 1, expenseAccountState: 2})
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
    },
    mounted() {
      this.fetch()
      this.getCompany()
    },
    computed: {
      totalMoney() {
        let total = 0
        for (let i in this.formData) {
          if (!(/^[a-zA-Z]*$/.test(i))) {
            total = Math.floor(this.formData[i] * 100 + total * 100) / 100
          }
        }
        return total
      }
    }
  }
</script>

<style scoped>
  .print-main >>> .el-dialog__body {
    word-break: normal !important;
  }

  .left {
    float: left !important;
  }

  .right {
    float: right !important;
  }


  .ls4 {
    letter-spacing: 4px;
    font-size: 18px;
  }

  .tdh25 td {
    height: 25px !important;
  }

  .RightVertical {
    width: 13px;
    font-size: 12px;
    word-wrap: break-word;
    position: absolute;
    right: 0;
    top: 140px;
  }

  .rptype {
    position: absolute;
    left: 0;
    top: 0;
  }

  .table-frame {
    position: relative;
    width: 925px;
    height: auto;
    margin: 0 auto 60px;
    box-sizing: border-box;
  }

  /*风控*/
  .Printing td {
    height: 30px;
    text-align: center;
    font-size: 14px;
  }

  caption {
    font-size: 18px;
    font-weight: bold;
    text-align: right;
  }

  .Printing input {
    width: 140px;
    height: 35px;
    border: 0;
    outline: none;
    margin-left: 5px;
    font-weight: bold;
  }

  /*收据CSS*/
  .receipt-title {
    width: 340px;
    height: 37px;
    float: right;
    margin-right: 230px;
  }

  .receipt-title h1 {
    font-size: 25px;
    text-align: justify;
    height: 30px;
  }

  .receipt-title h1:after {
    display: inline-block;
    width: 100%;
    content: '';
  }

  .receipt-title hr {
    margin: 2px 0;
  }

  .number {
    float: right;
    font-weight: bold;
    margin-top: 10px;
  }

  .number span {
    margin-left: 5px;
  }

  .receipt-nav {
    width: 100%;
    height: 20px;
    margin: 10px 0;
    font-size: 14px;
    clear: both;
  }

  .receipt-date {
    text-align: center;
    font-weight: bold;
  }

  .receipt-table td {
    height: 30px;
    text-align: center;
    font-size: 14px;
  }

  .total {
    height: 35px;
    font-size: 12px;
    margin-left: 38px;
    margin-top: 15px;
    font-weight: bold;
  }

  .alignment {
    display: inline-block;
    width: 35px;
    text-align: justify;
    height: 15px;
    overflow: hidden;
  }

  .alignment:after {
    display: inline-block;
    width: 100%;
    content: '';
  }

  .alignment1 {
    width: 100%;
  }

  div.vertical {
    width: 15px;
    font-size: 12px;
    word-wrap: break-word;
    letter-spacing: 20px;
    height: 62px;
  }

  span.vertical {
    display: inline-block;
    width: 16px;
    height: 60px;
    font-size: 14px;
    margin: 10px 30px;
    line-height: 14px;
    float: left;
    word-wrap: break-word;
  }

  .reimbursement-table td {
    height: 25px;
    text-align: center;
    font-size: 14px;
  }

</style>
