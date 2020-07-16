<!-- 进度条组件 -->
<template>
  <div class="number">
    <span :style="`width: ${number}%`" />
    <i>{{ number }}%</i>
  </div>
</template>
<script>
export default {
  props: {
    number: Number
  }
}
</script>

<style lang="scss" scoped>
.number {
  position: relative;
  width: 100%;
  height: 26px;
  border-radius: 6px;
  background: #98e8da;
  text-align: left;
  span {
    display: inline-block;
    height: 100%;
    background: #00b79c;
    border-radius: 6px;
  }
  i {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 26px;
    line-height: 26px;
    text-align: center;
    color: #000000;
  }
}
</style>
