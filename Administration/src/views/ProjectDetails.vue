<!-- 项目详情 -->
<template>
  <div class="DetailWrap">
    <Title :title="'项目详情'"></Title>
    <Pstate></Pstate>
    <Details></Details>
    <ProjectUser></ProjectUser>
    <ProjectrEcord></ProjectrEcord>
    <ProjectrTask></ProjectrTask>
    <ProjectrBug></ProjectrBug>
    <ProjectrEdition></ProjectrEdition>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeNames: [1, '1']
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss">
.DetailWrap {
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: #f4f7f7;
  .el-collapse-item__header {
    padding: 0 20px;
  }
  .wjj-bt {
    display: inline-block;
    cursor: pointer;
    margin-right: 10px;
    color: #00b79c;
  }
}
</style>
