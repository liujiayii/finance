(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5815def0"],{"268f":function(t,e,a){t.exports=a("fde4")},"32a6":function(t,e,a){var o=a("241e"),n=a("c3a1");a("ce7e")("keys",function(){return function(t){return n(o(t))}})},"454f":function(t,e,a){a("46a7");var o=a("584a").Object;t.exports=function(t,e,a){return o.defineProperty(t,e,a)}},"46a7":function(t,e,a){var o=a("63b6");o(o.S+o.F*!a("8e60"),"Object",{defineProperty:a("d9f6").f})},"85f2":function(t,e,a){t.exports=a("454f")},"8a44":function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-dialog",{attrs:{visible:t.dialogFormVisible,"append-to-body":""},on:{"update:visible":function(e){t.dialogFormVisible=e},closed:t.closeDialog}},[a("el-dialog",{attrs:{visible:t.dialogFormVisible2,modal:!1},on:{"update:visible":function(e){t.dialogFormVisible2=e},closed:function(e){t.formData2={}}}},[a("el-form",{ref:"ruleForm2",attrs:{model:t.formData2,rules:t.rules,inline:!0,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"项目名称",prop:"name"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData2.name,callback:function(e){t.$set(t.formData2,"name",e)},expression:"formData2.name"}})],1),a("el-form-item",{attrs:{label:"金额",prop:"money"}},[a("el-input",{attrs:{type:"number",autocomplete:"off"},model:{value:t.formData2.money,callback:function(e){t.$set(t.formData2,"money",e)},expression:"formData2.money"}})],1),a("el-form-item",{attrs:{label:"摘要"}},[a("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:t.formData2.message,callback:function(e){t.$set(t.formData2,"message",e)},expression:"formData2.message"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submitTable2("ruleForm2")}}},[t._v("确 定")])],1)],1),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){t.dialogFormVisible2=!0}}},[t._v("添加")]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData2,size:"mini"}},[a("el-table-column",{attrs:{prop:"name",label:"项目名称"}}),a("el-table-column",{attrs:{prop:"message",label:"摘要"}}),a("el-table-column",{attrs:{prop:"money",label:"金额"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleDelete2(e.row,e.$index)}}},[t._v("删除")])]}}])})],1),a("el-form",{ref:"ruleForm",staticStyle:{"margin-top":"20px"},attrs:{model:t.formData,rules:t.rules,inline:!0,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-select",{attrs:{disabled:Boolean(t.formData.id)},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},[a("el-option",{attrs:{label:"收入",value:1}}),a("el-option",{attrs:{label:"支出",value:2}})],1)],1),a("el-form-item",{attrs:{label:"报销人姓名",prop:"name"}},[a("el-input",{attrs:{autocomplete:"off",disabled:Boolean(t.formData.id)},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("el-form-item",{attrs:{label:"分公司",prop:"branchCompanyId"}},[a("el-select",{model:{value:t.formData.branchCompanyId,callback:function(e){t.$set(t.formData,"branchCompanyId",e)},expression:"formData.branchCompanyId"}},t._l(t.companyList,function(t){return a("el-option",{key:t.id,attrs:{label:t.companyName,value:t.id}})}),1)],1),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:t.formData.remark,callback:function(e){t.$set(t.formData,"remark",e)},expression:"formData.remark"}})],1)],1),a("el-upload",{attrs:{action:"/insertImg","list-type":"picture-card","file-list":t.fileList,"on-success":t.handleSuccess,"on-preview":t.handlePictureCardPreview,"on-remove":t.handleRemove}},[a("i",{staticClass:"el-icon-plus"})]),a("el-dialog",{attrs:{visible:t.dialogImageVisible},on:{"update:visible":function(e){t.dialogImageVisible=e}}},[a("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})]),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("p",[t._v("当前总计："+t._s(t.totalMoney)+"元")]),a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submit("ruleForm")}}},[t._v("确 定")])],1)],1),a("div",{staticClass:"top"},[a("el-form",{attrs:{inline:!0,model:t.searchForm,size:"small"}},[a("el-form-item",{attrs:{label:"分类"}},[a("el-select",{attrs:{clearable:""},model:{value:t.searchForm.type,callback:function(e){t.$set(t.searchForm,"type",e)},expression:"searchForm.type"}},[a("el-option",{attrs:{label:"收入",value:1}}),a("el-option",{attrs:{label:"支出",value:2}})],1)],1),a("el-form-item",{attrs:{label:"起始时间"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:t.selectTime},model:{value:t.searchForm.time,callback:function(e){t.$set(t.searchForm,"time",e)},expression:"searchForm.time"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.fetch()}}},[t._v("查询")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.reset()}}},[t._v("重置")])],1)],1),a("el-button",{attrs:{type:"primary",size:"small",round:""},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("新建收支单")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,loading:t.loading}},[a("el-table-column",{attrs:{prop:"id",label:"ID"}}),a("el-table-column",{attrs:{prop:"companyId",label:"分公司"}}),a("el-table-column",{attrs:{prop:"name",label:"报销人姓名"}}),a("el-table-column",{attrs:{prop:"money",label:"总金额"}}),a("el-table-column",{attrs:{prop:"type",label:"类型"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(1===e.row.type?"收入":"支出"))])]}}])}),a("el-table-column",{attrs:{prop:"remark",label:"备注"}}),a("el-table-column",{attrs:{prop:"printNumber",label:"已打印次数"}}),a("el-table-column",{attrs:{prop:"time",label:"创建时间",formatter:t.formatter}}),a("el-table-column",{attrs:{prop:"establishName",label:"创建人"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleEdit(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),a("el-pagination",{attrs:{"current-page":t.pagination.current,layout:"total, prev, pager, next, jumper",total:t.pagination.total},on:{"current-change":t.fetch}})],1)},n=[],r=a("75fc"),l=a("cebc"),i=(a("28a5"),a("f4e6")),s={name:"financeList",data:function(){return{tableData:[],pagination:{},searchForm:{},loading:!1,dialogFormVisible:!1,formData:{},companyList:[],tableData2:[],dialogFormVisible2:!1,formData2:{},dialogImageUrl:"",dialogImageVisible:!1,fileList:[],rules:{type:[{required:!0,message:"请输入内容",trigger:"blur"}],name:[{required:!0,message:"请输入内容",trigger:"blur"}],branchCompanyId:[{required:!0,message:"请输入内容",trigger:"blur"}],money:[{required:!0,message:"请输入内容",trigger:"blur"}]}}},methods:{reset:function(){this.searchForm={},this.fetch()},closeDialog:function(){this.formData={},this.fileList=[],this.tableData2=[]},getCompany:function(){var t=this;this.$ajax.post("/t_branch_company/selectt_branch_company",{page:1,limit:100}).then(function(e){1===e.data.code&&(t.companyList=e.data.data)})},formatter:function(t,e,a,o){return Object(i["a"])(new Date(a),"yyyy-MM-dd")},handleEdit:function(t){var e=this;this.$ajax.post("/getIncomeAndExpensesProject",{id:t.id}).then(function(t){1===t.data.code&&(e.tableData2=t.data.data)});for(var a=[],o=0;o<t.imgUrl.split(",").length;o++)""!==t.imgUrl.split(",")[o]&&a.push({name:o,url:t.imgUrl.split(",")[o]});this.fileList=a,this.formData=JSON.parse(JSON.stringify(Object(l["a"])({},t,{branchCompanyId:t.companyName}))),this.dialogFormVisible=!0},selectTime:function(t){this.searchForm.startTime=Object(i["a"])(t[0],"yyyy-MM-dd"),this.searchForm.endTime=Object(i["a"])(t[1],"yyyy-MM-dd")},submit:function(t){var e=this;this.$refs[t].validate(function(t){if(t){delete e.formData.time;for(var a="",o=0;o<e.fileList.length;o++)a+=(0===o?"":",")+(e.fileList[o].response||e.fileList[o].url);return e.formData.imgUrl=a,e.$ajax.post(e.formData.id?"/updateIncomeAndExpenses":"/insertIncomeAndExpenses",Object(l["a"])({},e.formData,{state:1,money:e.totalMoney,i:JSON.stringify(e.tableData2)})).then(function(t){1===t.data.code&&(e.dialogFormVisible=!1,e.$message.success(t.data.msg),e.fetch(e.pagination.current))}),!1}})},fetch:function(t){var e=this;this.loading=!0,this.$ajax.post("/listIncomeAndExpenses",Object(l["a"])({limit:10,page:t||1},this.searchForm,{state:1})).then(function(a){if(1===a.data.code){var o=Object(l["a"])({},e.pagination);o.total=a.data.count,o.current=t,e.loading=!1,e.tableData=a.data.data,e.pagination=o}})},handleDelete:function(t){var e=this;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$ajax.post("/deleteIncomeAndExpenses",t).then(function(t){1===t.data.code&&(e.$message.success(t.data.msg),e.fetch(e.pagination.current))})}).catch(function(){e.$message.info("已取消")})},submitTable2:function(t){var e=this;this.$refs[t].validate(function(t){if(t)return e.tableData2=[e.formData2].concat(Object(r["a"])(e.tableData2)),e.dialogFormVisible2=!1,!1})},handleDelete2:function(t,e){this.tableData2.splice(e,1)},handleRemove:function(t,e){this.fileList=e},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogImageVisible=!0},handleSuccess:function(t,e,a){this.fileList=a}},computed:{totalMoney:function(){for(var t=0,e=0;e<this.tableData2.length;e++)t+=1*this.tableData2[e].money;return t}},mounted:function(){this.fetch(),this.getCompany()}},c=s,m=a("2877"),u=Object(m["a"])(c,o,n,!1,null,"3c5d87a8",null);e["default"]=u.exports},"8aae":function(t,e,a){a("32a6"),t.exports=a("584a").Object.keys},a4bb:function(t,e,a){t.exports=a("8aae")},bf90:function(t,e,a){var o=a("36c3"),n=a("bf0b").f;a("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return n(o(t),e)}})},ce7e:function(t,e,a){var o=a("63b6"),n=a("584a"),r=a("294c");t.exports=function(t,e){var a=(n.Object||{})[t]||Object[t],l={};l[t]=e(a),o(o.S+o.F*r(function(){a(1)}),"Object",l)}},cebc:function(t,e,a){"use strict";var o=a("268f"),n=a.n(o),r=a("e265"),l=a.n(r),i=a("a4bb"),s=a.n(i),c=a("85f2"),m=a.n(c);function u(t,e,a){return e in t?m()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},o=s()(a);"function"===typeof l.a&&(o=o.concat(l()(a).filter(function(t){return n()(a,t).enumerable}))),o.forEach(function(e){u(t,e,a[e])})}return t}a.d(e,"a",function(){return f})},e265:function(t,e,a){t.exports=a("ed33")},ed33:function(t,e,a){a("014b"),t.exports=a("584a").Object.getOwnPropertySymbols},fde4:function(t,e,a){a("bf90");var o=a("584a").Object;t.exports=function(t,e){return o.getOwnPropertyDescriptor(t,e)}}}]);