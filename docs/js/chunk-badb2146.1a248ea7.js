(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-badb2146"],{"21fe":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-dialog",{attrs:{"modal-append-to-body":!1,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t},closed:function(t){e.formData={}}}},[a("el-form",{ref:"ruleForm",attrs:{model:e.formData,rules:e.rules,inline:!0,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"新标标号",prop:"newBid"}},[a("el-input",{attrs:{type:"text",autocomplete:"off",disabled:Boolean(e.formData.id)},model:{value:e.formData.newBid,callback:function(t){e.$set(e.formData,"newBid",t)},expression:"formData.newBid"}})],1),2===e.formData.bidState?a("el-form-item",{attrs:{label:"续贷标号"}},[a("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.formData.oldBid,callback:function(t){e.$set(e.formData,"oldBid",t)},expression:"formData.oldBid"}})],1):e._e(),a("el-form-item",{attrs:{label:"标类型",prop:"bidState"}},[a("el-select",{model:{value:e.formData.bidState,callback:function(t){e.$set(e.formData,"bidState",t)},expression:"formData.bidState"}},[a("el-option",{attrs:{label:"新标",value:1}}),a("el-option",{attrs:{label:"续贷",value:2}})],1)],1),a("el-form-item",{attrs:{label:"业务类型",prop:"businessType"}},[a("el-select",{model:{value:e.formData.businessType,callback:function(t){e.$set(e.formData,"businessType",t)},expression:"formData.businessType"}},[a("el-option",{attrs:{label:"惠车贷",value:1}}),a("el-option",{attrs:{label:"惠房贷",value:2}})],1)],1),a("el-form-item",{attrs:{label:"投标人姓名",prop:"name"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),a("el-form-item",{attrs:{label:"投标金额",prop:"money"}},[a("el-input",{attrs:{type:"number",autocomplete:"off"},model:{value:e.formData.money,callback:function(t){e.$set(e.formData,"money",t)},expression:"formData.money"}})],1),a("el-form-item",{attrs:{label:"贷款期限",prop:"lengthOfMaturity"}},[a("el-input",{attrs:{type:"number",autocomplete:"off"},model:{value:e.formData.lengthOfMaturity,callback:function(t){e.$set(e.formData,"lengthOfMaturity",t)},expression:"formData.lengthOfMaturity"}},[a("span",{attrs:{slot:"suffix"},slot:"suffix"},[e._v("个月")])])],1),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark",t)},expression:"formData.remark"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submit("ruleForm")}}},[e._v("确 定")])],1)],1),a("div",{staticClass:"top"},[a("el-form",{attrs:{inline:!0,model:e.searchForm,size:"small"}},[a("el-form-item",{attrs:{label:"标类型"}},[a("el-select",{model:{value:e.searchForm.bidState,callback:function(t){e.$set(e.searchForm,"bidState",t)},expression:"searchForm.bidState"}},[a("el-option",{attrs:{label:"新标",value:1}}),a("el-option",{attrs:{label:"续贷",value:2}})],1)],1),a("el-form-item",{attrs:{label:"业务类型"}},[a("el-select",{model:{value:e.searchForm.businessType,callback:function(t){e.$set(e.searchForm,"businessType",t)},expression:"searchForm.businessType"}},[a("el-option",{attrs:{label:"惠车贷",value:1}}),a("el-option",{attrs:{label:"惠房贷",value:2}})],1)],1),a("el-form-item",{attrs:{label:"贷款期限"}},[a("el-input",{attrs:{type:"number"},model:{value:e.searchForm.lengthOfMaturity,callback:function(t){e.$set(e.searchForm,"lengthOfMaturity",t)},expression:"searchForm.lengthOfMaturity"}},[a("span",{attrs:{slot:"suffix"},slot:"suffix"},[e._v("个月")])])],1),a("el-form-item",{attrs:{label:"起始时间"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:e.selectTime},model:{value:e.searchForm.time,callback:function(t){e.$set(e.searchForm,"time",t)},expression:"searchForm.time"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.fetch()}}},[e._v("查询")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.reset()}}},[e._v("重置")])],1)],1),a("el-button",{attrs:{type:"primary",size:"small",round:""},on:{click:function(t){e.dialogFormVisible=!0}}},[e._v("新建")])],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,loading:e.loading}},[a("el-table-column",{attrs:{prop:"id",label:"上标id"}}),a("el-table-column",{attrs:{prop:"newBid",label:"新标标号"}}),a("el-table-column",{attrs:{prop:"bidState",label:"标类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(1===t.row.bidState?"新标":"续贷"))])]}}])}),a("el-table-column",{attrs:{prop:"businessType",label:"业务类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(1===t.row.businessType?"惠车贷":"惠房贷"))])]}}])}),a("el-table-column",{attrs:{prop:"oldBid",label:"续贷标号"}}),a("el-table-column",{attrs:{prop:"name",label:"投标人"}}),a("el-table-column",{attrs:{prop:"money",label:"投标金额"}}),a("el-table-column",{attrs:{prop:"lengthOfMaturity",label:"贷款期限"}}),a("el-table-column",{attrs:{prop:"dateCreated",label:"创建时间",formatter:e.formatter}}),a("el-table-column",{attrs:{prop:"remark",label:"备注"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleClick(t.row)}}},[e._v("查看")]),"风控专员"!==e.roles?[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleEdit(t.row)}}},[e._v("编辑")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]:e._e()]}}])})],1),a("el-pagination",{attrs:{"current-page":e.pagination.current,layout:"total, prev, pager, next, jumper",total:e.pagination.total},on:{"current-change":e.fetch}})],1)},o=[],n=a("cebc"),l=a("f4e6"),i={name:"targetList",data:function(){return{tableData:[],pagination:{},loading:!1,searchForm:{},dialogFormVisible:!1,formData:{},rules:{newBid:[{required:!0,message:"请输入内容",trigger:"blur"}],bidState:[{required:!0,message:"请输入内容",trigger:"blur"}],businessType:[{required:!0,message:"请输入内容",trigger:"blur"}],name:[{required:!0,message:"请输入内容",trigger:"blur"}],lengthOfMaturity:[{required:!0,message:"请输入内容",trigger:"blur"}],money:[{required:!0,message:"请输入内容",trigger:"blur"}]},roles:""}},methods:{reset:function(){this.searchForm={},this.fetch()},formatter:function(e,t,a,r){return Object(l["a"])(new Date(a),"yyyy-MM-dd")},handleClick:function(e){this.$router.push({path:"/Target/TargetListDetail",query:{id:e.id}})},handleEdit:function(e){this.formData=JSON.parse(JSON.stringify(e)),this.dialogFormVisible=!0},selectTime:function(e){this.searchForm.startTime=Object(l["a"])(e[0],"yyyy-MM-dd"),this.searchForm.endTime=Object(l["a"])(e[1],"yyyy-MM-dd")},submit:function(e){var t=this;this.$refs[e].validate(function(e){if(e)return delete t.formData.dateCreated,delete t.formData.bidEndTime,t.$ajax.post(t.formData.id?"/updateSuperscript":"/insertSuperscript",t.formData).then(function(e){1===e.data.code&&(t.dialogFormVisible=!1,t.$message.success(e.data.msg),t.fetch(t.pagination.current))}),!1})},fetch:function(e){var t=this;this.loading=!0,this.$ajax.post("/listSuperscript",Object(n["a"])({limit:10,page:e||1},this.searchForm)).then(function(a){if(1===a.data.code){var r=Object(n["a"])({},t.pagination);r.total=a.data.count,r.current=e,t.loading=!1,t.tableData=a.data.data,t.pagination=r,t.roles=a.data.roleName}})},handleDelete:function(e){var t=this;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$ajax.post("/deleteSuperscript",e).then(function(e){1===e.data.code&&(t.$message.success(e.data.msg),t.fetch(t.pagination.current))})}).catch(function(){t.$message.info("已取消")})}},mounted:function(){this.fetch()}},s=i,c=a("2877"),u=Object(c["a"])(s,r,o,!1,null,"55ccf75c",null);t["default"]=u.exports},"268f":function(e,t,a){e.exports=a("fde4")},"32a6":function(e,t,a){var r=a("241e"),o=a("c3a1");a("ce7e")("keys",function(){return function(e){return o(r(e))}})},"454f":function(e,t,a){a("46a7");var r=a("584a").Object;e.exports=function(e,t,a){return r.defineProperty(e,t,a)}},"46a7":function(e,t,a){var r=a("63b6");r(r.S+r.F*!a("8e60"),"Object",{defineProperty:a("d9f6").f})},"85f2":function(e,t,a){e.exports=a("454f")},"8aae":function(e,t,a){a("32a6"),e.exports=a("584a").Object.keys},a4bb:function(e,t,a){e.exports=a("8aae")},bf90:function(e,t,a){var r=a("36c3"),o=a("bf0b").f;a("ce7e")("getOwnPropertyDescriptor",function(){return function(e,t){return o(r(e),t)}})},ce7e:function(e,t,a){var r=a("63b6"),o=a("584a"),n=a("294c");e.exports=function(e,t){var a=(o.Object||{})[e]||Object[e],l={};l[e]=t(a),r(r.S+r.F*n(function(){a(1)}),"Object",l)}},cebc:function(e,t,a){"use strict";var r=a("268f"),o=a.n(r),n=a("e265"),l=a.n(n),i=a("a4bb"),s=a.n(i),c=a("85f2"),u=a.n(c);function f(e,t,a){return t in e?u()(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},r=s()(a);"function"===typeof l.a&&(r=r.concat(l()(a).filter(function(e){return o()(a,e).enumerable}))),r.forEach(function(t){f(e,t,a[t])})}return e}a.d(t,"a",function(){return m})},e265:function(e,t,a){e.exports=a("ed33")},ed33:function(e,t,a){a("014b"),e.exports=a("584a").Object.getOwnPropertySymbols},fde4:function(e,t,a){a("bf90");var r=a("584a").Object;e.exports=function(e,t){return r.getOwnPropertyDescriptor(e,t)}}}]);