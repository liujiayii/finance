(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-acca7c3c"],{"22a3":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("el-dialog",{attrs:{visible:t.dialogFormVisible,"modal-append-to-body":!1},on:{"update:visible":function(a){t.dialogFormVisible=a},closed:t.closeDialog}},[e("div",[e("el-form",{attrs:{model:t.formData,inline:!0,"label-width":"120px"}},[e("el-form-item",{attrs:{label:"报销单类型"}},[e("el-select",{attrs:{disabled:""},model:{value:t.formData.expenseAccountType,callback:function(a){t.$set(t.formData,"expenseAccountType",a)},expression:"formData.expenseAccountType"}},[e("el-option",{attrs:{label:"新标续贷报销单",value:1}}),e("el-option",{attrs:{label:"本息报销单",value:2}})],1)],1),2===t.formData.expenseAccountType?[e("el-form-item",{attrs:{label:"还款期数"}},[e("el-input",{attrs:{type:"number",autocomplete:"off",readonly:""},model:{value:t.formData.allottedTime,callback:function(a){t.$set(t.formData,"allottedTime",a)},expression:"formData.allottedTime"}},[e("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("个月")])])],1),e("el-form-item",{attrs:{label:"类别"}},[e("el-select",{attrs:{disabled:""},model:{value:t.formData.interestType,callback:function(a){t.$set(t.formData,"interestType",a)},expression:"formData.interestType"}},[e("el-option",{attrs:{label:"续贷还平台",value:1}}),e("el-option",{attrs:{label:"到期还平台",value:2}}),e("el-option",{attrs:{label:"提前还平台",value:3}}),e("el-option",{attrs:{label:"逾期还平台",value:4}})],1)],1)]:t._e(),e("el-form-item",{attrs:{label:"所属公司"}},[e("el-select",{attrs:{disabled:""},model:{value:t.formData.companyName,callback:function(a){t.$set(t.formData,"companyName",a)},expression:"formData.companyName"}},t._l(t.companyList,function(t,a){return e("el-option",{key:a,attrs:{label:t,value:t}})}),1)],1),1===t.formData.expenseAccountType?[t.formData["平台服务费+利息"]?e("el-form-item",{attrs:{label:"平台服务费+利息"}},[e("el-input",{attrs:{autocomplete:"off",readonly:""},model:{value:t.formData["平台服务费+利息"],callback:function(a){t.$set(t.formData,"平台服务费+利息",a)},expression:"formData['平台服务费+利息']"}},[e("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("元")])])],1):t._e(),t.formData["点位费"]?e("el-form-item",{attrs:{label:"点位费"}},[e("el-input",{attrs:{autocomplete:"off",readonly:""},model:{value:t.formData["点位费"],callback:function(a){t.$set(t.formData,"点位费",a)},expression:"formData['点位费']"}},[e("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("元")])])],1):t._e(),t.formData["房产"]?e("el-form-item",{attrs:{label:"房产"}},[e("el-input",{attrs:{autocomplete:"off",readonly:""},model:{value:t.formData["房产"],callback:function(a){t.$set(t.formData,"房产",a)},expression:"formData['房产']"}},[e("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("元")])])],1):t._e(),t.formData["档案管理"]?e("el-form-item",{attrs:{label:"档案管理"}},[e("el-input",{attrs:{autocomplete:"off",readonly:""},model:{value:t.formData["档案管理"],callback:function(a){t.$set(t.formData,"档案管理",a)},expression:"formData['档案管理']"}},[e("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("元")])])],1):t._e(),t.formData["垫资费"]?e("el-form-item",{attrs:{label:"垫资费"}},[e("el-input",{attrs:{autocomplete:"off",readonly:""},model:{value:t.formData["垫资费"],callback:function(a){t.$set(t.formData,"垫资费",a)},expression:"formData['垫资费']"}},[e("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("元")])])],1):t._e(),t.formData["过账费"]?e("el-form-item",{attrs:{label:"过账费"}},[e("el-input",{attrs:{autocomplete:"off",readonly:""},model:{value:t.formData["过账费"],callback:function(a){t.$set(t.formData,"过账费",a)},expression:"formData['过账费']"}},[e("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("元")])])],1):t._e(),t.formData["实地费"]?e("el-form-item",{attrs:{label:"实地费"}},[e("el-input",{attrs:{autocomplete:"off",readonly:""},model:{value:t.formData["实地费"],callback:function(a){t.$set(t.formData,"实地费",a)},expression:"formData['实地费']"}},[e("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("元")])])],1):t._e(),t.formData["GPS安装"]?e("el-form-item",{attrs:{label:"GPS安装"}},[e("el-input",{attrs:{autocomplete:"off",readonly:""},model:{value:t.formData["GPS安装"],callback:function(a){t.$set(t.formData,"GPS安装",a)},expression:"formData['GPS安装']"}},[e("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("元")])])],1):t._e(),t.formData["停车费"]?e("el-form-item",{attrs:{label:"停车费"}},[e("el-input",{attrs:{autocomplete:"off",readonly:""},model:{value:t.formData["停车费"],callback:function(a){t.$set(t.formData,"停车费",a)},expression:"formData['停车费']"}},[e("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("元")])])],1):t._e(),t.formData["进抵费"]?e("el-form-item",{attrs:{label:"进抵费"}},[e("el-input",{attrs:{autocomplete:"off",readonly:""},model:{value:t.formData["进抵费"],callback:function(a){t.$set(t.formData,"进抵费",a)},expression:"formData['进抵费']"}},[e("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("元")])])],1):t._e(),t.formData["查档费"]?e("el-form-item",{attrs:{label:"查档费"}},[e("el-input",{attrs:{autocomplete:"off",readonly:""},model:{value:t.formData["查档费"],callback:function(a){t.$set(t.formData,"查档费",a)},expression:"formData['查档费']"}},[e("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("元")])])],1):t._e(),t.formData["他项费"]?e("el-form-item",{attrs:{label:"他项费"}},[e("el-input",{attrs:{autocomplete:"off",readonly:""},model:{value:t.formData["他项费"],callback:function(a){t.$set(t.formData,"他项费",a)},expression:"formData['他项费']"}},[e("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("元")])])],1):t._e()]:t._e(),2===t.formData.expenseAccountType?[t.formData["本金"]?e("el-form-item",{attrs:{label:"本金"}},[e("el-input",{attrs:{autocomplete:"off",readonly:""},model:{value:t.formData["本金"],callback:function(a){t.$set(t.formData,"本金",a)},expression:"formData['本金']"}},[e("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("元")])])],1):t._e(),t.formData["利息"]?e("el-form-item",{attrs:{label:"利息"}},[e("el-input",{attrs:{autocomplete:"off",readonly:""},model:{value:t.formData["利息"],callback:function(a){t.$set(t.formData,"利息",a)},expression:"formData['利息']"}},[e("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("元")])])],1):t._e(),t.formData["违约金"]?e("el-form-item",{attrs:{label:"违约金"}},[e("el-input",{attrs:{autocomplete:"off",readonly:""},model:{value:t.formData["违约金"],callback:function(a){t.$set(t.formData,"违约金",a)},expression:"formData['违约金']"}},[e("span",{attrs:{slot:"suffix"},slot:"suffix"},[t._v("元")])])],1):t._e()]:t._e(),e("el-form-item",{attrs:{label:"备注"}},[e("el-input",{attrs:{type:"textarea",autocomplete:"off",readonly:""},model:{value:t.formData.remark,callback:function(a){t.$set(t.formData,"remark",a)},expression:"formData.remark"}})],1)],2)],1),e("el-upload",{attrs:{disabled:"",action:"/insertImg","list-type":"picture-card","file-list":t.fileList,"on-success":t.handleSuccess,"on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove}},[e("i",{staticClass:"el-icon-plus"})]),e("el-dialog",{attrs:{visible:t.dialogImageVisible,"append-to-body":"",modal:!1},on:{"update:visible":function(a){t.dialogImageVisible=a}}},[e("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})]),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("p",[t._v("当前总计："+t._s(t.totalMoney)+"元")]),e("el-button",{on:{click:function(a){t.dialogFormVisible=!1}}},[t._v("关 闭")])],1)],1),e("el-dialog",{staticClass:"print-main",attrs:{visible:t.dialogFormVisible3,"modal-append-to-body":!1,width:"1200px"},on:{"update:visible":function(a){t.dialogFormVisible3=a}}},[e("div",{ref:"print"},[e("div",{staticClass:"table-frame"},[e("div",{staticClass:"rptype"},[t._v("收：")]),e("div",[e("div",{staticStyle:{width:"100%",height:"37px","margin-bottom":"74px"}},[e("div",{staticClass:"number"},[t._v("\n              N"),e("u",[t._v("o")]),e("span",{attrs:{id:"one"}},[t._v(t._s(t.printData.id))])]),e("div",{staticClass:"receipt-title"},[e("h1",[t._v("收据")]),e("hr",{attrs:{width:"100%",color:"#000000"}}),e("hr",{attrs:{width:"100%",color:"#000000"}})])]),e("div",{staticClass:"receipt-nav"},[e("div",{staticClass:"left"},[t._v("\n              交款单位："),e("b",[t._v(t._s(t.printData.companyName))])]),e("div",{staticClass:"right receipt-date"})]),e("table",{staticClass:"receipt-table",attrs:{cellpadding:"0",cellspacing:"0",width:"890px;",border:"1"}},[e("tr",[e("td",{attrs:{width:"125px"}},[t._v("客户姓名")]),e("td",[e("b",[t._v(t._s(t.printData.name))])]),t.printData.oldBid?[e("td",[t._v("新标号")]),e("td",[e("b",[t._v(t._s(t.printData.newBid))])]),e("td",[t._v("旧标号")]),e("td",[e("b",[t._v(t._s(t.printData.oldBid))])])]:[e("td",[t._v("标号")]),e("td",{attrs:{colspan:"3"}},[e("b",[t._v(t._s(t.printData.newBid))])])],e("td",[t._v("金额")]),e("td",[e("b",[t._v(t._s(t.printData.money)+"元")])]),e("td",[t._v("期限")]),e("td",[e("b",[t._v(t._s(t.printData.lengthOfMaturity)+"个月")])])],2),t._l(t.printData.list,function(a){return e("tr",{key:a.id},[e("td",[t._v(t._s(a.name))]),e("td",{attrs:{colspan:"9",id:"text1",onkeyup:"jisuan();"}},[t._v(t._s(a.money)+"元")])])}),e("tr",[e("td",[e("div",{staticClass:"total left"},[e("div",{staticClass:"alignment"},[t._v("合计")]),e("div",{staticClass:"alignment1"},[t._v("人民币")])]),e("div",{staticClass:"vertical left"},[t._v("︵大写︶")])]),e("td",{attrs:{colspan:"7"}},[e("b",{staticClass:"ls4"},[t._v(t._s(t.printData.expenseAccountMoneys))])]),e("td",{staticStyle:{"font-weight":"bold"},attrs:{colspan:"2"}},[t._v("\n                ￥"),e("u",{attrs:{id:"text4"}},[t._v(t._s(t.printData.expenseAccountMoney))])])])],2),e("span",{staticClass:"vertical"},[t._v("单位负责人")]),e("div",{staticClass:"right"},[e("span",{staticClass:"vertical"},[t._v("财务主管")]),e("span",{staticClass:"vertical"},[t._v(t._s(t.printData.auditName))]),e("span",{staticClass:"vertical"},[t._v("记    账")]),e("span",{staticClass:"vertical"},[t._v(t._s(t.printData.auditName))]),e("span",{staticClass:"vertical"},[t._v("出    纳")]),e("span",{staticClass:"vertical"},[t._v("审    核")]),e("span",{staticClass:"vertical"},[t._v("经    办")]),e("span",{staticClass:"vertical"},[t._v(t._s(t.printData.establishName))])])]),e("div",{staticClass:"RightVertical"},[t._v("\n          白联  存根   红联  记账   黄联  票据\n        ")])])]),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{attrs:{type:"primary"},on:{click:t.doPrint}},[t._v("打 印")])],1)]),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData}},[e("el-table-column",{attrs:{prop:"id",label:"报销单ID"}}),e("el-table-column",{attrs:{prop:"expenseAccountType",label:"报销单类型"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(1===a.row.expenseAccountType?"新标续贷报销单":"本息报销单"))])]}}])}),e("el-table-column",{attrs:{prop:"expenseAccountState",label:"报销单状态"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("span",[t._v(t._s(1===a.row.expenseAccountState?"草稿":2===a.row.expenseAccountState?"未审核":3===a.row.expenseAccountState?"已审核":"已驳回"))])]}}])}),e("el-table-column",{attrs:{prop:"expenseAccountMoney",label:"报销总金额"}}),e("el-table-column",{attrs:{prop:"dateCreated",label:"创建日期",formatter:t.formatter}}),e("el-table-column",{attrs:{prop:"allottedTime",label:"还款期数"}}),e("el-table-column",{attrs:{prop:"printNumber",label:"已打印次数"}}),e("el-table-column",{attrs:{prop:"remark",label:"备注"}}),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleClick(a.row)}}},[t._v("查看")]),2===a.row.expenseAccountState?[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.submit(a.row,"3")}}},[t._v("通过")]),e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.submit(a.row,"4")}}},[t._v("拒绝")])]:[e("el-button",{attrs:{type:"text"},on:{click:function(e){return t.showPrint(a.row)}}},[t._v("打印")])]]}}])})],1),e("el-pagination",{attrs:{"current-page":t.pagination.current,layout:"total, prev, pager, next, jumper",total:t.pagination.total},on:{"current-change":t.fetch}})],1)},n=[],s=e("cebc"),l=(e("28a5"),e("7f7f"),e("f4e6")),i={name:"targetCheck",data:function(){return{tableData:[],pagination:{},loading:!1,topDetail:{},dialogFormVisible:!1,formData:{},companyList:[],dialogImageUrl:"",dialogImageVisible:!1,dialogFormVisible3:!1,fileList:[],printData:{}}},methods:{doPrint:function(){this.$print(this.$refs.print)},showPrint:function(t){var a=this;this.$ajax.post("printcont",{id:t.id}).then(function(t){1===t.data.code&&(a.printData=t.data.data,a.dialogFormVisible3=!0)})},closeDialog:function(){this.formData={},this.fileList=[]},formatter:function(t,a,e,o){return Object(l["a"])(new Date(e),"yyyy-MM-dd")},handleClick:function(t){var a=this;this.dialogFormVisible=!0,this.$ajax.post("/listByExpenseAccountId",{id:t.id}).then(function(e){if(1===e.data.code){for(var o={},n=0;n<e.data.data.length;n++)o[e.data.data[n].name]=e.data.data[n].money;for(var l=[],i=0;i<t.imageUrl.split(",").length;i++)""!==t.imageUrl.split(",")[i]&&l.push({name:i,url:t.imageUrl.split(",")[i]});a.fileList=l,a.formData=JSON.parse(JSON.stringify(Object(s["a"])({},t,o)))}})},handleDelete:function(t){var a=this;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning",inputPattern:/\S/,inputErrorMessage:"请输入内容"}).then(function(){a.$ajax.post("/deleteExpenseAccount",t).then(function(t){1===t.data.code&&(a.$message.success(t.data.msg),a.fetch(a.pagination.current))})}).catch(function(){a.$message.info("已取消")})},submit:function(t,a){var e=this;"3"===a?this.$confirm("是否通过?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$ajax.post("/updateExpenseAccountState",{id:t.id,expenseAccountState:a}).then(function(t){1===t.data.code&&(e.$message.success(t.data.msg),e.fetch(e.pagination.current))})}).catch(function(){e.$message.info("已取消")}):"4"===a&&this.$prompt("请输入拒绝理由","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/\S/,inputErrorMessage:"请输入内容"}).then(function(o){var n=o.value;e.$ajax.post("/updateExpenseAccountState",{id:t.id,expenseAccountState:a,cause:n}).then(function(t){1===t.data.code&&(e.$message.success(t.data.msg),e.fetch(e.pagination.current))})}).catch(function(){e.$message.info("已取消")})},getCompany:function(){var t=this;this.$ajax.post("/t_branch_company/selectCompanyName").then(function(a){1===a.data.code&&(t.companyList=a.data.data)})},handleRemove:function(t,a){this.fileList=a,console.log(t,a)},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogImageVisible=!0},handleSuccess:function(t,a,e){console.log(e),this.fileList=e},fetch:function(t){var a=this;this.loading=!0,this.$ajax.post("/list",{limit:10,page:t||1,expenseAccountState:2}).then(function(e){if(1===e.data.code){var o=Object(s["a"])({},a.pagination);o.total=e.data.count,o.current=t,a.loading=!1,a.tableData=e.data.data,a.pagination=o}})}},mounted:function(){this.fetch(),this.getCompany()},computed:{totalMoney:function(){var t=0;for(var a in this.formData)/^[a-zA-Z]*$/.test(a)||(t=Math.floor(100*this.formData[a]+100*t)/100);return t}}},r=i,c=(e("9dcb"),e("2877")),f=Object(c["a"])(r,o,n,!1,null,"54c53afa",null);a["default"]=f.exports},"268f":function(t,a,e){t.exports=e("fde4")},"32a6":function(t,a,e){var o=e("241e"),n=e("c3a1");e("ce7e")("keys",function(){return function(t){return n(o(t))}})},"454f":function(t,a,e){e("46a7");var o=e("584a").Object;t.exports=function(t,a,e){return o.defineProperty(t,a,e)}},"46a7":function(t,a,e){var o=e("63b6");o(o.S+o.F*!e("8e60"),"Object",{defineProperty:e("d9f6").f})},"85f2":function(t,a,e){t.exports=e("454f")},"8aae":function(t,a,e){e("32a6"),t.exports=e("584a").Object.keys},"9dcb":function(t,a,e){"use strict";var o=e("e0d7"),n=e.n(o);n.a},a4bb:function(t,a,e){t.exports=e("8aae")},bf90:function(t,a,e){var o=e("36c3"),n=e("bf0b").f;e("ce7e")("getOwnPropertyDescriptor",function(){return function(t,a){return n(o(t),a)}})},ce7e:function(t,a,e){var o=e("63b6"),n=e("584a"),s=e("294c");t.exports=function(t,a){var e=(n.Object||{})[t]||Object[t],l={};l[t]=a(e),o(o.S+o.F*s(function(){e(1)}),"Object",l)}},cebc:function(t,a,e){"use strict";var o=e("268f"),n=e.n(o),s=e("e265"),l=e.n(s),i=e("a4bb"),r=e.n(i),c=e("85f2"),f=e.n(c);function u(t,a,e){return a in t?f()(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function p(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{},o=r()(e);"function"===typeof l.a&&(o=o.concat(l()(e).filter(function(t){return n()(e,t).enumerable}))),o.forEach(function(a){u(t,a,e[a])})}return t}e.d(a,"a",function(){return p})},e0d7:function(t,a,e){},e265:function(t,a,e){t.exports=e("ed33")},ed33:function(t,a,e){e("014b"),t.exports=e("584a").Object.getOwnPropertySymbols},fde4:function(t,a,e){e("bf90");var o=e("584a").Object;t.exports=function(t,a){return o.getOwnPropertyDescriptor(t,a)}}}]);