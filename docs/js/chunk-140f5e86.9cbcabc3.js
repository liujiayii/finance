(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-140f5e86"],{"046e":function(t,a,e){},"268f":function(t,a,e){t.exports=e("fde4")},"32a6":function(t,a,e){var i=e("241e"),n=e("c3a1");e("ce7e")("keys",function(){return function(t){return n(i(t))}})},3551:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-dialog",{attrs:{visible:t.dialogFormVisible,"append-to-body":""},on:{"update:visible":function(a){t.dialogFormVisible=a},closed:t.closeDialog}},[e("el-dialog",{attrs:{visible:t.dialogFormVisible2,modal:!1},on:{"update:visible":function(a){t.dialogFormVisible2=a},closed:function(a){t.formData2={}}}},[e("el-form",{attrs:{model:t.formData2,inline:!0,"label-width":"120px"}},[e("el-form-item",{attrs:{label:"项目名称"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData2.name,callback:function(a){t.$set(t.formData2,"name",a)},expression:"formData2.name"}})],1),e("el-form-item",{attrs:{label:"金额"}},[e("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData2.money,callback:function(a){t.$set(t.formData2,"money",a)},expression:"formData2.money"}})],1),e("el-form-item",{attrs:{label:"摘要"}},[e("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:t.formData2.message,callback:function(a){t.$set(t.formData2,"message",a)},expression:"formData2.message"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:t.submitTable2}},[t._v("确 定")])],1)],1),e("el-form",{attrs:{model:t.formData,inline:!0,"label-width":"120px"}},[e("el-form-item",{attrs:{label:"分公司"}},[e("el-select",{attrs:{disabled:""},model:{value:t.formData.branchCompanyId,callback:function(a){t.$set(t.formData,"branchCompanyId",a)},expression:"formData.branchCompanyId"}},t._l(t.companyList,function(t){return e("el-option",{key:t.id,attrs:{label:t.companyName,value:t.id}})}),1)],1),e("el-form-item",{attrs:{label:"报销时间"}},[e("el-date-picker",{attrs:{disabled:"",type:"date",placeholder:"选择日期"},model:{value:t.formData.time,callback:function(a){t.$set(t.formData,"time",a)},expression:"formData.time"}})],1)],1),e("el-table",{staticStyle:{width:"100%",margin:"20px 0"},attrs:{data:t.tableData2,size:"mini",border:""}},[e("el-table-column",{attrs:{prop:"name",label:"项目名称"}}),e("el-table-column",{attrs:{prop:"message",label:"摘要"}}),e("el-table-column",{attrs:{prop:"money",label:"金额"}})],1),e("el-form",{attrs:{model:t.formData,inline:!0,"label-width":"120px"}},[e("el-form-item",{attrs:{label:"类型"}},[e("el-select",{attrs:{disabled:""},model:{value:t.formData.type,callback:function(a){t.$set(t.formData,"type",a)},expression:"formData.type"}},[e("el-option",{attrs:{label:"收入",value:1}}),e("el-option",{attrs:{label:"支出",value:2}})],1)],1),e("el-form-item",{attrs:{label:"报销人姓名"}},[e("el-input",{attrs:{autocomplete:"off",readonly:""},model:{value:t.formData.name,callback:function(a){t.$set(t.formData,"name",a)},expression:"formData.name"}})],1),e("el-form-item",{attrs:{label:"审核人"}},[e("el-input",{attrs:{autocomplete:"off",readonly:""},model:{value:t.formData.auditName,callback:function(a){t.$set(t.formData,"auditName",a)},expression:"formData.auditName"}})],1),e("el-form-item",{attrs:{label:"总金额"}},[e("el-input",{attrs:{autocomplete:"off",readonly:""},model:{value:t.formData.money,callback:function(a){t.$set(t.formData,"money",a)},expression:"formData.money"}})],1),e("el-form-item",{attrs:{label:"备注"}},[e("el-input",{attrs:{type:"textarea",autocomplete:"off",readonly:""},model:{value:t.formData.remark,callback:function(a){t.$set(t.formData,"remark",a)},expression:"formData.remark"}})],1)],1),e("el-upload",{attrs:{disabled:"",action:"/insertImg","list-type":"picture-card","file-list":t.fileList,"on-success":t.handleSuccess,"on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove}},[e("i",{staticClass:"el-icon-plus"})]),e("el-dialog",{attrs:{visible:t.dialogImageVisible},on:{"update:visible":function(a){t.dialogImageVisible=a}}},[e("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})]),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("p",[t._v("当前总计："+t._s(t.totalMoney)+"元")]),e("el-button",{on:{click:function(a){t.dialogFormVisible=!1}}},[t._v("关 闭")])],1)],1),e("el-dialog",{staticClass:"print-main",attrs:{visible:t.dialogFormVisible3,"modal-append-to-body":!1,width:"1200px"},on:{"update:visible":function(a){t.dialogFormVisible3=a}}},[e("div",{ref:"print"},[e("div",{staticClass:"table-frame"},[e("div",{staticClass:"rptype"},[t._v("付：")]),e("div",[e("div",{staticStyle:{width:"100%",height:"37px","margin-bottom":"74px"}},[e("div",{staticClass:"receipt-title",staticStyle:{"margin-right":"325px"}},[e("h1",[t._v("费用报销单")]),e("hr",{attrs:{width:"100%",color:"#000000"}}),e("hr",{attrs:{width:"100%",color:"#000000"}})])]),e("div",{staticClass:"receipt-nav"},[e("div",{staticClass:"left"},[t._v("交款单位："),e("b",[t._v(t._s(t.printData.companyName))])]),e("div",{staticClass:"right receipt-date"},[t._v(t._s(t.formatDate(new Date(t.printData.time),"yyyy-MM-dd")))])]),e("table",{staticClass:"reimbursement-table",attrs:{cellpadding:"0",cellspacing:"0",width:"890px;",border:"1"}},[e("tr",[e("td",[t._v("摘要")]),e("td",{attrs:{colspan:"3"}},[e("b",[t._v("金额")])])]),t._l(t.printData.list,function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.name))]),e("td",{attrs:{colspan:"3"}},[t._v(t._s(a.money))])])}),e("tr",[e("td",[e("div",{staticClass:"total left"},[e("div",{staticClass:"alignment"},[t._v("合计")]),e("div",{staticClass:"alignment1"},[t._v("人民币")])]),e("div",{staticClass:"vertical left"},[t._v("︵大写︶")]),e("div",{staticClass:"total",staticStyle:{"font-size":"18px"}},[t._v("\n                  "+t._s(t.printData.moneys)+"\n                ")])]),e("td",{staticStyle:{"font-weight":"bold"},attrs:{colspan:"3"}},[t._v("\n                ￥"),e("u",[t._v(t._s(t.printData.money))])])])],2),e("p",[t._v("备注："+t._s(t.printData.remark))]),e("span",{staticClass:"vertical"},[t._v("单位负责人")]),e("div",{staticClass:"right"},[e("span",{staticClass:"vertical"},[t._v("财务主管")]),e("span",{staticClass:"vertical"},[t._v(t._s(t.printData.auditName))]),e("span",{staticClass:"vertical"},[t._v("记    账")]),e("span",{staticClass:"vertical"},[t._v(t._s(t.printData.auditName))]),e("span",{staticClass:"vertical"},[t._v("出    纳")]),e("span",{staticClass:"vertical"},[t._v("审    核")]),e("span",{staticClass:"vertical"},[t._v("经    办")]),e("span",{staticClass:"vertical"},[t._v(t._s(t.printData.establishName))])])]),e("div",{staticClass:"RightVertical right"},[t._v("\n          白联 存根   红联 记账   黄联 票据\n        ")])])]),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:t.doPrint}},[t._v("打 印")])],1)]),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,loading:t.loading}},[e("el-table-column",{attrs:{prop:"id",label:"ID"}}),e("el-table-column",{attrs:{prop:"companyId",label:"分公司"}}),e("el-table-column",{attrs:{prop:"name",label:"报销人姓名"}}),e("el-table-column",{attrs:{prop:"money",label:"总金额"}}),e("el-table-column",{attrs:{prop:"type",label:"类型"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(1===a.row.type?"收入":"支出"))])]}}])}),e("el-table-column",{attrs:{prop:"remark",label:"备注"}}),e("el-table-column",{attrs:{prop:"printNumber",label:"已打印次数"}}),e("el-table-column",{attrs:{prop:"time",label:"创建时间",formatter:t.formatter}}),e("el-table-column",{attrs:{prop:"establishName",label:"创建人"}}),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleEdit(a.row)}}},[t._v("查看")]),1===a.row.state?[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleDelete(a.row,"2")}}},[t._v("通过")]),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleDelete(a.row,"3")}}},[t._v("拒绝")])]:[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.showPrint(a.row)}}},[t._v("打印")])]]}}])})],1),e("el-pagination",{attrs:{"current-page":t.pagination.current,layout:"total, prev, pager, next, jumper",total:t.pagination.total},on:{"current-change":t.fetch}})],1)},n=[],o=e("75fc"),l=e("cebc"),s=(e("28a5"),e("3b2b"),e("a481"),{name:"financeCheck",data:function(){return{tableData:[],pagination:{},loading:!1,dialogFormVisible:!1,formData:{},companyList:[],tableData2:[],dialogFormVisible2:!1,formData2:{},dialogImageUrl:"",dialogImageVisible:!1,fileList:[],dialogFormVisible3:!1,printData:{}}},methods:{formatDate:function(t,a){var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),S:t.getMilliseconds()};for(var i in/(y+)/.test(a)&&(a=a.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length))),e)new RegExp("("+i+")").test(a)&&(a=a.replace(RegExp.$1,1===RegExp.$1.length?e[i]:("00"+e[i]).substr((""+e[i]).length)));return a},showPrint:function(t){var a=this;this.$ajax.post(1===t.type?"/printconrevenue":"/printcontexpenditure",{id:t.id}).then(function(t){1===t.data.code&&(a.printData=t.data.data,a.dialogFormVisible3=!0)})},doPrint:function(){this.$print(this.$refs.print)},closeDialog:function(){this.formData={},this.fileList=[]},getCompany:function(){var t=this;this.$ajax.post("/t_branch_company/selectt_branch_company",{page:1,limit:100}).then(function(a){1===a.data.code&&(t.companyList=a.data.data)})},formatter:function(t,a,e,i){return this.formatDate(new Date(e),"yyyy-MM-dd")},handleEdit:function(t){var a=this;this.$ajax.post("/getIncomeAndExpensesProject",{id:t.id}).then(function(t){1===t.data.code&&(a.tableData2=t.data.data)});for(var e=[],i=0;i<t.imgUrl.split(",").length;i++)""!==t.imgUrl.split(",")[i]&&e.push({name:i,url:t.imgUrl.split(",")[i]});this.fileList=e,this.formData=JSON.parse(JSON.stringify(Object(l["a"])({},t,{branchCompanyId:t.companyName}))),this.dialogFormVisible=!0},selectTime:function(t){this.searchForm.startTime=this.formatDate(t[0],"yyyy-MM-dd"),this.searchForm.endTime=this.formatDate(t[1],"yyyy-MM-dd")},submit:function(){var t=this;delete this.formData.time;for(var a="",e=0;e<this.fileList.length;e++)a+=(0===e?"":",")+(this.fileList[e].response||this.fileList[e].url);this.formData.imgUrl=a,this.$ajax.post(this.formData.id?"/updateIncomeAndExpenses":"/insertIncomeAndExpenses",Object(l["a"])({},this.formData,{state:1,money:this.totalMoney,i:JSON.stringify(this.tableData2)})).then(function(a){1===a.data.code&&(t.dialogFormVisible=!1,t.$message.success(a.data.msg),t.fetch(t.pagination.current))})},handleDelete:function(t,a){var e=this;"2"===a?this.$confirm("是否通过?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$ajax.post("/updateIncomeAndExpensesState",{id:t.id,state:a}).then(function(t){1===t.data.code&&(e.$message.success(t.data.msg),e.fetch(e.pagination.current))})}).catch(function(){e.$message.info("已取消")}):"3"===a&&this.$prompt("请输入拒绝理由","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"请输入内容"}).then(function(i){var n=i.value;e.$ajax.post("/updateIncomeAndExpensesState",{id:t.id,state:a,cause:n}).then(function(t){1===t.data.code&&(e.$message.success(t.data.msg),e.fetch(e.pagination.current))})}).catch(function(){e.$message.info("已取消")})},submitTable2:function(){this.tableData2=[this.formData2].concat(Object(o["a"])(this.tableData2)),this.dialogFormVisible2=!1},handleDelete2:function(t,a){this.tableData2.splice(a,1)},handleRemove:function(t,a){this.fileList=a,console.log(t,a)},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogImageVisible=!0},handleSuccess:function(t,a,e){console.log(e),this.fileList=e},fetch:function(t){var a=this;this.loading=!0,this.$ajax.post("/listAllIncomeAndExpenses",{limit:10,page:t||1}).then(function(e){if(1===e.data.code){var i=Object(l["a"])({},a.pagination);i.total=e.data.count,i.current=t,a.loading=!1,a.tableData=e.data.data,a.pagination=i}})}},computed:{totalMoney:function(){for(var t=0,a=0;a<this.tableData2.length;a++)t+=1*this.tableData2[a].money;return t}},mounted:function(){this.fetch(),this.getCompany()}}),r=s,c=(e("796c"),e("2877")),m=Object(c["a"])(r,i,n,!1,null,"b7f36224",null);a["default"]=m.exports},"454f":function(t,a,e){e("46a7");var i=e("584a").Object;t.exports=function(t,a,e){return i.defineProperty(t,a,e)}},"46a7":function(t,a,e){var i=e("63b6");i(i.S+i.F*!e("8e60"),"Object",{defineProperty:e("d9f6").f})},"796c":function(t,a,e){"use strict";var i=e("046e"),n=e.n(i);n.a},"85f2":function(t,a,e){t.exports=e("454f")},"8aae":function(t,a,e){e("32a6"),t.exports=e("584a").Object.keys},a4bb:function(t,a,e){t.exports=e("8aae")},bf90:function(t,a,e){var i=e("36c3"),n=e("bf0b").f;e("ce7e")("getOwnPropertyDescriptor",function(){return function(t,a){return n(i(t),a)}})},ce7e:function(t,a,e){var i=e("63b6"),n=e("584a"),o=e("294c");t.exports=function(t,a){var e=(n.Object||{})[t]||Object[t],l={};l[t]=a(e),i(i.S+i.F*o(function(){e(1)}),"Object",l)}},cebc:function(t,a,e){"use strict";var i=e("268f"),n=e.n(i),o=e("e265"),l=e.n(o),s=e("a4bb"),r=e.n(s),c=e("85f2"),m=e.n(c);function f(t,a,e){return a in t?m()(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function u(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{},i=r()(e);"function"===typeof l.a&&(i=i.concat(l()(e).filter(function(t){return n()(e,t).enumerable}))),i.forEach(function(a){f(t,a,e[a])})}return t}e.d(a,"a",function(){return u})},e265:function(t,a,e){t.exports=e("ed33")},ed33:function(t,a,e){e("014b"),t.exports=e("584a").Object.getOwnPropertySymbols},fde4:function(t,a,e){e("bf90");var i=e("584a").Object;t.exports=function(t,a){return i.getOwnPropertyDescriptor(t,a)}}}]);