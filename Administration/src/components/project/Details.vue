<!-- 详情组件 -->
<template>
  <div>
    <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="详情 附件" name="1">
          <div class="Detail">
            <div class="left">
              <p>项目编号：454545</p>
              <p>项目名称：45454</p>
              <p>客户名称：54545</p>
              <p>项目监理：454545</p>
              <div class="content">
                <span>项目内容：</span>爱傻傻的骄傲
              </div>
            </div>
            <div class="right">
              <p>
                1. <a href="12121">大叔大婶多</a>
              </p>
            </div>
          </div>
        </el-collapse-item>
      </el-collapse>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeNames: [1]
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss" scoped>
.Detail {
  display: flex;
  width: 100%;
  .left, .right {
    padding: 10px;
    border: 1px solid #ebedeb;
    border-left: none;
  }
  .left {
    flex: 7;
    p {
      display: inline-block;
      width: 50%;
    }
    .content {
      margin-top: 5px;
      span {
        font-weight: bold;
      }
    }
  }
  .right {
    flex: 3;
    border-right: none;
    a {
      color: #333;
    }
  }
}
</style>
