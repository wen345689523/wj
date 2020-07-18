<!-- 任务信息 -->
<template>
  <div class="task-information">
    <Title :title="'任务信息'"></Title>
    <div class="modular">
      <div class="item-modular" @click="$router.push('/Project')">项目个数</div>
      <div class="item-modular" @click="$router.push('/Need')">需求个数</div>
      <div class="item-modular" @click="$router.push('/Bug')">Bug个数</div>
    </div>
    <Tab1 :tableData="tableData"></Tab1>
    <Tab2 :tableData="tableData"></Tab2>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.task-information {
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
