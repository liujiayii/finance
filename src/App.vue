<template>
  <div id="app" class="animated lightSpeedIn">
    <transition name="fade" mode="out-in" enter-active-class="animated bounceIn" leave-active-class="animated hinge">
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
  html, body, #app {
    height: 100%;
    width: 100%;
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
  }

  .page-login .el-input__inner {
    background-color: transparent;
  }

  .el-form .el-input__inner, .el-form .el-textarea__inner {
    width: 202px;
  }

  input[type=number]::-webkit-outer-spin-button,
  input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  /*打印*/
  .print-main {
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
      width: 40px;
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
  }

  .print-main .el-dialog__body {
    word-break: normal !important;
  }


</style>
