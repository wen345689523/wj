<!-- 工作日志表格 -->
<template>
  <div>
    <div class="table5">
      <p>今日工作详情</p>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column align="center" prop="date" label="序号">
        </el-table-column>

        <el-table-column align="center" prop="date" label="项目">
        </el-table-column>

        <el-table-column align="center" prop="date" label="任务">
        </el-table-column>

        <el-table-column align="center" prop="date" label="处理状态" width="55">
        </el-table-column>

        <el-table-column align="center" prop="date" label="完成状态" width="55">
        </el-table-column>

        <el-table-column align="center" prop="date" label="记录数">
        </el-table-column>

        <el-table-column align="center" prop="date" label="最后记录时间">
        </el-table-column>

        <el-table-column prop="date" align="center" label="操作">
          <div class="wjj-bt" @click="changetab('task')">查看</div>
        </el-table-column>
      </el-table>
    </div>
    <div class="table5">
      <p>前7天日志</p>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column align="center" prop="date" label="时间">
        </el-table-column>

        <el-table-column align="center" prop="date" label="今日日志内容">
        </el-table-column>

        <el-table-column align="center" prop="date" label="提交" width="55">
        </el-table-column>

        <el-table-column align="center" prop="date" label="SVN提交的内容描述">
        </el-table-column>

        <el-table-column align="center" prop="date" label="相关任务">
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tableData: Array
  }
}
</script>

<style lang="scss" scoped>
.table5 {
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
