<!-- 积分管理 -->
<template>
  <div class="need">
    <Title :title="'积分管理'"></Title>
    <Tab6 :tableData="tableData"></Tab6>
    <Ue :defaultMsg='content' :config='config' ref="ue"></Ue>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
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
      ],
      content: '请编辑相关内容',
      config: {
        initialFrameWidth: null,
        initialFrameHeight: 350
      }
    }
  },
  methods: {
    baocun () {
      console.log(this.$refs.ue.getUEContent())
    }
  }
}
</script>
