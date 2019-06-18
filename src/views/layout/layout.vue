<template>
  <el-container>
    <el-aside width="auto">
      <div class="logo">LOGO</div>
      <el-menu class="el-menu-vertical-demo" :default-active="$route.path" :default-openeds="[$route.meta.title]" router
               unique-opened
               background-color="#545c64" text-color="#fff"
               active-text-color="#ffd04b" :collapse="collapse">
        <template v-for="item of menu">
          <el-submenu :index="item.name" v-if="item.name" :key="item.name">
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{$t(`routerName.${item.name}`) }}</span>
            </template>
            <el-menu-item v-for="item_c of item.children" :index="`/${item.name}/${item_c.name}`"
                          :key="`/${item.name}/${item_c.name}`">
              {{$t(`routerName.${item_c.name}`) }}
            </el-menu-item>
          </el-submenu>
          <el-menu-item v-else :index="`/${item.children[0].name}`" :key="item.children[0].name">
            <i :class="item.icon"></i>
            <span slot="title">{{$t(`routerName.${item.children[0].name}`) }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <div class="point" @click="collapse=!collapse">
          <i :class="collapse?'el-icon-s-unfold':'el-icon-s-fold'"></i>
        </div>
        <div>
          <div class="point">
            <i class="el-icon-full-screen" @click="fullScreen"></i>
          </div>
          <div class="point">
            <el-link href="https://liujiayii.github.io" target="_blank" :underline="false"><i
              class="el-icon-question"></i></el-link>
          </div>
          <el-dropdown @command="lang">
            <span class="el-dropdown-link">{{ $t(`header.HeadMenu.lang`) }}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="zh_CN">简体中文</el-dropdown-item>
              <el-dropdown-item command="en_US">English</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown @command="loginOut">
          <span class="el-dropdown-link">
            {{ $t(`header.HeadMenu.${getTimes()}`) }},{{userName}}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="loginOut">退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
      <el-main>
        <el-breadcrumb separator="/" style="margin-bottom: 20px">
          <el-breadcrumb-item>{{ $t(`routerName.Home`) }}</el-breadcrumb-item>
          <template v-if="$route.meta.title">
            <el-breadcrumb-item>{{ $t(`routerName.${$route.meta.title}`) }}</el-breadcrumb-item>
            <el-breadcrumb-item>{{ $t(`routerName.${$route.name}`) }}</el-breadcrumb-item>
          </template>
        </el-breadcrumb>
        <transition name="main" mode="out-in" enter-active-class="animated bounceIn"
                    leave-active-class="animated bounceOut" :duration="200">
          <router-view/>
        </transition>
      </el-main>
      <el-footer>Copyright © 2019 LiuJiaYi</el-footer>
    </el-container>
  </el-container>
</template>

<script>
  import screenfull from 'screenfull'
  export default {
    name: "Layout",
    data() {
      return {
        collapse: false,
        userName: window.sessionStorage.getItem("userName"),
        isFullscreen: false,
        menu: JSON.parse(window.sessionStorage.getItem('menu'))
      };
    },
    mounted() {
      this.getTimes();
    },
    methods: {
      lang(key) {
        this.$i18n.locale = key
      },
      loginOut(key) {
        if (key === 'loginOut') {
          this.$confirm('真的要注销登录吗 ?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            sessionStorage.clear();
            this.$router.push({path: "/login"});
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消'
            });
          });
        }
      },
      getTimes() {
        const time = new Date();
        const hour = time.getHours();
        return hour < 9 ? "a" : hour <= 11 ? "b" : hour <= 13 ? "c" : hour < 20 ? "d" : "e";
      },
      fullScreen() {
        if (!screenfull.enabled) { // 如果不允许进入全屏，发出不允许提示
          this.$message.error('不支持全屏')
          return false
        }
        screenfull.toggle()
        this.$message.success('切换全屏成功！')
      }
    }
  };
</script>

<style lang="scss" scoped>
  .el-header, .el-footer {
    background-color: #f2f2f2;
    color: #666;
    line-height: 60px;
  }

  .el-header {
    display: flex;
    justify-content: space-between;
    padding-left: 0;

    .point {
      display: inline-block;
      cursor: pointer;
      padding: 0 10px;

      i {
        font-size: 20px;
      }

      &:first-child {
        padding: 0 20px;
      }

      &:hover {
        background: #ddd;
      }
    }

    .el-dropdown {
      cursor: pointer;
      margin: 0 10px;
    }
  }

  .el-footer {
    color: #999;
    font-size: 12px;
  }

  .el-aside {
    background-color: #545c64;

    .logo {
      height: 40px;
      margin: 10px;
      background: #ddd;
      color: #666;
      font-size: 20px;
      line-height: 40px;
      text-align: center;
    }

    .el-menu {
      border-right: none;
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 200px;
      min-height: 400px;
    }
  }

  .el-main {
    height: calc(100vh - 120px);
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }
</style>
