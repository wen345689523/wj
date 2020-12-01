<template>
  <div id="app">
    <div v-if="$route.name === 'Login' || !$route.name">
      <router-view></router-view>
    </div>
    <div class="wjj-content" v-else>
      <el-container>
        <el-aside width="200px">
          <Nav />
        </el-aside>
        <el-container>
          <el-header :height="'80px'">
            <Header ref="changeHeader" />
          </el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
// import { getList } from './api/home'
export default {
  data () {
    return {
    }
  },
  watch: {
    $route (to, from) {
      if (from.name === 'Login') {
        this.$refs.changeHeader.userInfo()
      }
    }
  },
  components: {
  },
  mounted () {
    // this.getList()
  },
  methods: {
    // async getList () {
    //   const req = await getList()
    //   console.log(req)
    // }
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: absolute;
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .wjj-content {
    width: 100%;
    height: 100%;
    margin: auto;
  }

  .el-container {
    height: 100%;
    .el-header {
      background-color: #ffffff;
    }

    .el-aside {
      background-color: #3b4248;
      color: #333;
    }

    .el-main {
      background-color: #f4f7f7;
      color: #333;
      padding: 0 20px;
    }
  }
}
</style>
