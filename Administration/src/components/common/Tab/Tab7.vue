<!-- 消息记录表 -->
<template>
  <div class="table2">
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="序号">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        label="发件人">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="主题：">
      </el-table-column>
      <el-table-column
        prop="address"
        label="时间"
        show-overflow-tooltip>
      </el-table-column>
      <el-table-column
        prop="address"
        label="状态"
        show-overflow-tooltip>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    tableData: Array
  },
  data () {
    return {
      multipleSelection: []
    }
  },

  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style lang="scss" scoped>
.table2 {
  position: relative;
  top: 20px;
  margin-bottom: 20px;
  width: 100%;
  background: #ffffff;
  p {
    padding-left: 10px;
    line-height: 30px;
  }
  .wjj-bt {
    display: inline-block;
    cursor: pointer;
    color: #00b79c;
  }
  .wjj-bt:nth-of-type(2) {
    margin-left: 2px;
  }
}
</style>
