<!-- 组织管理 -->
<template>
  <div class="organization">
    <Title :title="'组织管理'"></Title>
    <div class="modular">
      <div class="item-modular" @click="acitive = 1">部门管理</div>
      <div class="item-modular" @click="acitive = 2">人员管理</div>
    </div>
    <div v-show="acitive === 1">
      <Branch :title="'公司部门'"></Branch>
      <Vocation :title="'职位'"></Vocation>
      <User-list :title="'角色'"></User-list>
    </div>
    <div v-show="acitive === 2">
      <User-list :title="'所有人员'"></User-list>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      acitive: 1
    }
  },
  computed: {},
  watch: {},
  methods: {
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
