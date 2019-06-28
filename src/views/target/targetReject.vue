<template>
  <div>
    <el-dialog :modal-append-to-body="false" :visible.sync="dialogFormVisible" @closed="closeDialog" fullscreen>
      <el-form :model="formData" :inline="true" label-width="120px">
        <el-form-item label="报销单类型">
          <el-select v-model="formData.expenseAccountType">
            <el-option label="新标续贷报销单" :value="1"></el-option>
            <el-option label="本息报销单" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <template v-if="formData.expenseAccountType===2">
          <el-form-item label="还款期数">
            <el-input v-model="formData.allottedTime" autocomplete="off"><span slot="suffix">个月</span></el-input>
          </el-form-item>
          <el-form-item label="类别">
            <el-select v-model="formData.interestType">
              <el-option label="续贷还平台" :value="1"></el-option>
              <el-option label="到期还平台" :value="2"></el-option>
              <el-option label="提前还平台" :value="3"></el-option>
              <el-option label="逾期还平台" :value="4"></el-option>
            </el-select>
          </el-form-item>
        </template>
        <el-form-item label="所属公司">
          <el-select v-model="formData.companyName">
            <el-option v-for="(item,index) of companyList" :label="item" :value="item" :key="index"></el-option>
          </el-select>
        </el-form-item>
        <template v-if="formData.expenseAccountType===1">
          <el-form-item  v-if="formData['平台服务费+利息']" label="平台服务费+利息">
            <el-input v-model="formData['平台服务费+利息']" autocomplete="off"><span slot="suffix">元</span></el-input>
          </el-form-item>
          <el-form-item v-if="formData['点位费']" label="点位费">
            <el-input v-model="formData['点位费']" autocomplete="off"><span slot="suffix">元</span></el-input>
          </el-form-item>
          <el-form-item v-if="formData['房产']" label="房产">
            <el-input v-model="formData['房产']" autocomplete="off"><span slot="suffix">元</span></el-input>
          </el-form-item>
          <el-form-item v-if="formData['档案管理']" label="档案管理">
            <el-input v-model="formData['档案管理']" autocomplete="off"><span slot="suffix">元</span></el-input>
          </el-form-item>
          <el-form-item v-if="formData['垫资费']" label="垫资费">
            <el-input v-model="formData['垫资费']" autocomplete="off"><span slot="suffix">元</span></el-input>
          </el-form-item>
          <el-form-item v-if="formData['过账费']" label="过账费">
            <el-input v-model="formData['过账费']" autocomplete="off"><span slot="suffix">元</span></el-input>
          </el-form-item>
          <el-form-item v-if="formData['实地费']" label="实地费">
            <el-input v-model="formData['实地费']" autocomplete="off"><span slot="suffix">元</span></el-input>
          </el-form-item>
          <el-form-item v-if="formData['GPS安装']" label="GPS安装">
            <el-input v-model="formData['GPS安装']" autocomplete="off"><span slot="suffix">元</span></el-input>
          </el-form-item>
          <el-form-item v-if="formData['停车费']" label="停车费">
            <el-input v-model="formData['停车费']" autocomplete="off"><span slot="suffix">元</span></el-input>
          </el-form-item>
          <el-form-item v-if="formData['进抵费']" label="进抵费">
            <el-input v-model="formData['进抵费']" autocomplete="off"><span slot="suffix">元</span></el-input>
          </el-form-item>
          <el-form-item v-if="formData['查档费']" label="查档费">
            <el-input v-model="formData['查档费']" autocomplete="off"><span slot="suffix">元</span></el-input>
          </el-form-item>
          <el-form-item v-if="formData['他项费']" label="他项费">
            <el-input v-model="formData['他项费']" autocomplete="off"><span slot="suffix">元</span></el-input>
          </el-form-item>
        </template>
        <template v-if="formData.expenseAccountType===2">
          <el-form-item v-if="formData['本金']" label="本金">
            <el-input v-model="formData['本金']" autocomplete="off"><span
              slot="suffix">元</span></el-input>
          </el-form-item>
          <el-form-item v-if="formData['利息']" label="利息">
            <el-input v-model="formData['利息']" autocomplete="off"><span
              slot="suffix">元</span></el-input>
          </el-form-item>
          <el-form-item v-if="formData['违约金']" label="违约金">
            <el-input v-model="formData['违约金']" autocomplete="off"><span
              slot="suffix">元</span></el-input>
          </el-form-item>
        </template>
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
        <el-button type="primary" @click="submit('1')">保 存</el-button>
        <el-button type="primary" @click="submit('2')">提 交</el-button>
      </div>
    </el-dialog>
    <el-dialog :modal-append-to-body="false" :visible.sync="dialogFormVisible2" @closed="closeDialog">
      <el-table :data="tableData2" style="width: 100%">
        <el-table-column prop="cause" label="驳回原因"></el-table-column>
        <el-table-column prop="time" label="驳回的时间" :formatter="formatter"></el-table-column>
        <el-table-column prop="messageState" label="消息状态">
          <template slot-scope="scope"><span>{{ scope.row.messageState===1?'未读':'已读'}}</span></template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
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
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
          <el-button @click="handleClick2(scope.row)" type="text" size="small">查看</el-button>
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
    name: "targetDraft",
    data() {
      return {
        tableData: [],
        tableData2: [],
        pagination: {},
        loading: false,
        topDetail: {},
        dialogFormVisible: false,
        dialogFormVisible2: false,
        formData: {},
        companyList: [],
        dialogImageUrl: '',
        dialogImageVisible: false,
        fileList: []
      }
    },
    methods: {
      handleClick2(row) {
        this.dialogFormVisible2 = true
        this.$ajax.post('/getRejectExpenseAccountMessage', {id: row.id})
          .then((res) => {
            if (res.data.code === 1) {
              this.tableData2 = res.data.data
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
          type: 'warning'
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
      submit(expenseAccountState) {
        delete this.formData.dateCreated
        delete this.formData.lastModifiedTime
        let newArr = []
        for (let i in this.formData) {
          if (!(/^[a-zA-Z]*$/.test(i))) {
            newArr.push({name: i, money: this.formData[i]})
            delete this.formData[i]
          }
        }
        let img = ''
        for (let i = 0; i < this.fileList.length; i++) {
          img += (i === 0 ? '' : ',') + (this.fileList[i].response || this.fileList[i].url)
        }
        this.formData.imageUrl = img
        console.log(newArr)
        this.$ajax.post(this.formData.id ? '/updateExpenseAccount' : '/insertExpenseAccount', {
          superscriptId: this.$route.query.id,
          ...this.formData,
          expenseAccountState,
          ExpenseProjectParticulars: JSON.stringify(newArr)
        }).then((res) => {
          if (res.data.code === 1) {
            this.dialogFormVisible = false
            this.$message.success(res.data.msg);
            this.fetch(this.pagination.current)
          }
        })
      },
      getTopDetail() {
        this.$ajax.post('/getSuperscript', {id: this.$route.query.id})
          .then((res) => {
            if (res.data.code === 1) {
              this.topDetail = res.data.data
            }
          })
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
        this.$ajax.post('/listExpenseAccountXX', {limit: 10, page: page || 1, expenseAccountState: 4})
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
            total += this.formData[i] * 1
          }
        }
        return total
      }
    }
  }
</script>
