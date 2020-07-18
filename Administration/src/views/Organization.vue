<!-- 组织管理 -->
<template>
  <div class="organization">
    <Title :title="'组织管理'"></Title>
    <div class="modular">
      <div class="item-modular">部门管理</div>
      <div class="item-modular">人员管理</div>
    </div>
    <Upxlsx @getResult="getMyExcelData"></Upxlsx>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  watch: {},
  methods: {
    getMyExcelData (data) {
      // console.log(data)
      // data 为读取的excel数据，在这里进行处理该数据
    }
  }
}
</script>

<style lang="scss">
.organization {
  position: relative;
  .modular {
    display: flex;
    justify-content: space-around;
    .item-modular {
      width: 200px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      color: #ffffff;
      font-size: 20px;
      border-radius: 10px;
      cursor: pointer;
      background: #409eff;
    }
  }
}
</style>
