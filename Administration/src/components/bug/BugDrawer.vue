<!-- Bug详情侧边栏组件 -->
<template>
  <div class="peoject-bug-drawer">
    <el-drawer :visible.sync="drawer" @close="closed">
        <Title style="margin: -82px 0 0 20px; width: 200px;" :title="'bug列表'"></Title>
        <div class="wjj-drawer">
          <div class="content">
            <div class="details">
              <el-table :data="tableData" border style="width: 100%; display: inline-block;">
                <el-table-column align="center" prop="name" label="序号" width="55">
                </el-table-column>

                <el-table-column align="center" prop="date" label="项目">
                </el-table-column>

                <el-table-column align="center" prop="date" label="所属类型">
                </el-table-column>

                <el-table-column align="center" prop="date" label="提交人员">
                </el-table-column>

                <el-table-column align="center" prop="date" label="提交时间">
                </el-table-column>

                <el-table-column align="center" prop="date" label="解决时间">
                </el-table-column>

                <el-table-column align="center" prop="date" label="完成时间">
                </el-table-column>

                <el-table-column align="center" prop="date" label="指派人员">
                </el-table-column>

                <el-table-column align="center" prop="date" label="解决人员">
                </el-table-column>

                <el-table-column align="center" prop="date" label="等级">
                </el-table-column>

                <el-table-column align="center" prop="date" label="解决状态">
                </el-table-column>

                <el-table-column align="center" prop="date" label="审核状态">
                </el-table-column>

                <el-table-column align="center" prop="date" label="描述内容">
                </el-table-column>

                <el-table-column align="center" label="操作">
                  <div class="wjj-bt" @click="drawerBug=true">查看</div>
                  <div class="wjj-bt" @click="drawerBug=true">回复</div>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
        <el-button size="small" style="maegin: 0 10px;" type="primary" @click="closed">关闭</el-button>
        <el-button size="small" style="maegin: 0 10px;" type="primary" @click="dialogFormVisible = true">添加</el-button>
      </el-drawer>
      <add-bug :dialogFormVisible="dialogFormVisible" @close="dialogFormVisible = false"></add-bug>
      <PdrawerBug :drawer="drawerBug" :form="form" :tableData="tableData" @onchangeTb="drawerBug=false"></PdrawerBug>
  </div>
</template>
<script>
export default {
  props: {
    drawer: Boolean,
    form: Object,
    tableData: Array
  },
  data () {
    return {
      drawerBug: false,
      dialogFormVisible: false
    }
  },
  methods: {
    closed () {
      this.$emit('onchangeTb')
    }
  }
}
</script>

<style lang="scss">
.peoject-bug-drawer {
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 138px;
  }
  button {
    margin: 20px;
  }
  .el-drawer {
    width: 85% !important;
  }
  .wjj-drawer {
    position: relative;
    padding: 0 20px;
    .wjj-bt {
      display: inline-block;
      width: 30px;
      height: 30px;
      line-height: 30px;
      cursor: pointer;
      color: #00b79c;
    }
  }
}
</style>
