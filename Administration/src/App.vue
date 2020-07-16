<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <Nav />
      </el-aside>
      <el-container>
        <el-header :height="'80px'">
          <Header />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import Home from './views/Home.vue'
export default {
  components: {
    // Home
  }
}
</script>

<style lang="scss" scoped>
#app {
  position: absolute;
  width: 70%;
  height: 100%;
  left: 0;
  right: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: auto;

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
