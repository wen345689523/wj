<!-- 任务需求详情侧边栏组件 -->
<template>
  <div class="peoject-need-drawer">
    <el-drawer :visible.sync="drawer" @closed="closed">
        <Title style="margin: -82px 0 0 20px; width: 200px;" :title="'项目详情'">
          <el-button size="small" style="maegin: 0 10px;" type="primary" @click="onSubmit">关闭</el-button>
        </Title>
        <div class="wjj-drawer">
          <div class="content">
            <div class="details">
              <el-table :data="tableData" border style="width: 100%; display: inline-block;">
                <el-table-column align="center" prop="name" label="日期时间">
                </el-table-column>

                <el-table-column align="center" prop="date" label="今日日志内容">
                </el-table-column>

                <el-table-column align="center" prop="date" label="提交" width="55">
                </el-table-column>

                <el-table-column align="center" prop="date" label="SVN提交的内容描述">
                </el-table-column>

                <el-table-column align="center" prop="date" label="今日相关任务">
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </el-drawer>
  </div>
</template>
<script>
export default {
  props: {
    drawer: Boolean,
    form: Object,
    tableData: Array
  },
  methods: {
    closed () {
      this.$emit('onchangeTb')
    },
    onSubmit () {
      this.$emit('onchangeTb')
    }
  }
}
</script>

<style lang="scss">
.peoject-need-drawer {
  .el-drawer {
    width: 85% !important;
  }
  .wjj-drawer {
    position: relative;
    padding: 0 20px;
  }
}
</style>
