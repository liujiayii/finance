(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ea80322"],{"268f":function(t,e,a){t.exports=a("fde4")},"32a6":function(t,e,a){var n=a("241e"),o=a("c3a1");a("ce7e")("keys",function(){return function(t){return o(n(t))}})},3512:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"top"},[a("el-button",{attrs:{type:"primary",size:"small",round:""},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("添加分公司信息")])],1),a("el-dialog",{attrs:{"modal-append-to-body":!1,visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e},closed:function(e){t.formData={}}}},[a("el-form",{ref:"ruleForm",attrs:{model:t.formData,rules:t.rules,inline:!0,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"分公司名称",prop:"companyName"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.companyName,callback:function(e){t.$set(t.formData,"companyName",e)},expression:"formData.companyName"}})],1),a("el-form-item",{attrs:{label:"所属地区",prop:"areaCode"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:t.formData.areaCode,callback:function(e){t.$set(t.formData,"areaCode",e)},expression:"formData.areaCode"}})],1),a("el-form-item",{attrs:{label:"备注"}},[a("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:t.formData.remark,callback:function(e){t.$set(t.formData,"remark",e)},expression:"formData.remark"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.formData=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.submit("ruleForm")}}},[t._v("保 存")])],1)],1),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,loading:t.loading}},[a("el-table-column",{attrs:{prop:"areaCode",label:"地区"}}),a("el-table-column",{attrs:{prop:"companyName",label:"公司名称"}}),a("el-table-column",{attrs:{prop:"remark",label:"备注"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleClick(e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),a("el-pagination",{attrs:{"current-page":t.pagination.current,layout:"total, prev, pager, next, jumper",total:t.pagination.total},on:{"current-change":t.fetch}})],1)},o=[],r=a("cebc"),i={name:"company",data:function(){return{tableData:[],pagination:{},loading:!1,dialogFormVisible:!1,formData:{},rules:{companyName:[{required:!0,message:"请输入内容",trigger:"blur"}],areaCode:[{required:!0,message:"请输入内容",trigger:"blur"}]}}},methods:{handleClick:function(t){this.dialogFormVisible=!0,this.formData=JSON.parse(JSON.stringify(t))},submit:function(t){var e=this;this.$refs[t].validate(function(t){if(t)return delete e.formData.createTime,e.$ajax.post(e.formData.id?"/t_branch_company/upt_branch_company":"t_branch_company/addt_branch_company",e.formData).then(function(t){1===t.data.code&&(e.dialogFormVisible=!1,e.$message.success(t.data.msg),e.fetch(e.pagination.current))}),!1})},fetch:function(t){var e=this;this.loading=!0,this.$ajax.post("/t_branch_company/selectt_branch_company",{limit:10,page:t||1}).then(function(a){if(1===a.data.code){var n=Object(r["a"])({},e.pagination);n.total=a.data.count,n.current=t,e.loading=!1,e.tableData=a.data.data,e.pagination=n}})},handleDelete:function(t){var e=this;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){e.$ajax.post("/t_branch_company/delt_branch_company",t).then(function(t){1===t.data.code&&(e.$message.success(t.data.msg),e.fetch(e.pagination.current))})}).catch(function(){e.$message.info("已取消")})}},mounted:function(){this.fetch()}},c=i,l=a("2877"),u=Object(l["a"])(c,n,o,!1,null,"5906546d",null);e["default"]=u.exports},"454f":function(t,e,a){a("46a7");var n=a("584a").Object;t.exports=function(t,e,a){return n.defineProperty(t,e,a)}},"46a7":function(t,e,a){var n=a("63b6");n(n.S+n.F*!a("8e60"),"Object",{defineProperty:a("d9f6").f})},"85f2":function(t,e,a){t.exports=a("454f")},"8aae":function(t,e,a){a("32a6"),t.exports=a("584a").Object.keys},a4bb:function(t,e,a){t.exports=a("8aae")},bf90:function(t,e,a){var n=a("36c3"),o=a("bf0b").f;a("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return o(n(t),e)}})},ce7e:function(t,e,a){var n=a("63b6"),o=a("584a"),r=a("294c");t.exports=function(t,e){var a=(o.Object||{})[t]||Object[t],i={};i[t]=e(a),n(n.S+n.F*r(function(){a(1)}),"Object",i)}},cebc:function(t,e,a){"use strict";var n=a("268f"),o=a.n(n),r=a("e265"),i=a.n(r),c=a("a4bb"),l=a.n(c),u=a("85f2"),f=a.n(u);function s(t,e,a){return e in t?f()(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function m(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},n=l()(a);"function"===typeof i.a&&(n=n.concat(i()(a).filter(function(t){return o()(a,t).enumerable}))),n.forEach(function(e){s(t,e,a[e])})}return t}a.d(e,"a",function(){return m})},e265:function(t,e,a){t.exports=a("ed33")},ed33:function(t,e,a){a("014b"),t.exports=a("584a").Object.getOwnPropertySymbols},fde4:function(t,e,a){a("bf90");var n=a("584a").Object;t.exports=function(t,e){return n.getOwnPropertyDescriptor(t,e)}}}]);