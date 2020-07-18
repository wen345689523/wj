<!-- 头部组件 -->
<template>
  <div class="title">
    <h1>{{ title }} <slot></slot></h1>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
h1 {
  position: relative;
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  padding-left: 10px;
  font-weight: bold;
  &:before {
    position: absolute;
    top: 20px;
    left: 0px;
    width: 4px;
    height: 22px;
    content: "";
    border-radius: 2px;
    background: #000;
  }
}
</style>
