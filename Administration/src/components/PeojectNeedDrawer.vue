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
              <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="执行状态" style=" width: 220px; display: inline-block;">
                  <el-select v-model="form.date" placeholder="平台类别:">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="执行状态" style="width: 220px; display: inline-block;">
                  <el-select style="margin: 0 2px; display: inline-block;" v-model="form.date" placeholder="执行状态:">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="执行状态" style="width: 220px; display: inline-block;">
                  <el-select style="margin: 0 2px; display: inline-block;" v-model="form.date" placeholder="审核状态:">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item style="margin:0 2px; width: 240px; display: inline-block;" label="名称">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item style="margin:2px; width: 210px; display: inline-block;" label="计划开始">
                  <el-date-picker
                    v-model="form.name"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </el-form-item>
                <el-form-item style="margin:2px; width: 210px; display: inline-block;" label="计划开始">
                  <el-date-picker
                    v-model="form.name"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </el-form-item>
                <el-button type="primary" @click="onSubmit">搜索</el-button>
              </el-form>
              <el-table :data="tableData" border style="width: 100%; display: inline-block;">
                <el-table-column align="center" prop="name" label="序号" width="55">
                </el-table-column>

                <el-table-column align="center" prop="date" label="项目分类">
                </el-table-column>

                <el-table-column align="center" prop="date" label="平台类别">
                </el-table-column>

                <el-table-column align="center" prop="date" label="项目名称">
                </el-table-column>

                <el-table-column align="center" prop="date" label="客户名称">
                </el-table-column>

                <el-table-column align="center" prop="date" label="计划开始时间">
                </el-table-column>

                <el-table-column align="center" prop="date" label="计划结束时间">
                </el-table-column>

                <el-table-column align="center" prop="date" label="实际开始时间">
                </el-table-column>

                <el-table-column align="center" prop="date" label="实际结束时间">
                </el-table-column>

                <el-table-column align="center" prop="date" label="项目总监">
                </el-table-column>

                <el-table-column align="center" prop="date" label="制表人">
                </el-table-column>

                <el-table-column align="center" prop="date" label="制单日期">
                </el-table-column>

                <el-table-column align="center" prop="date" label="执行">
                </el-table-column>

                <el-table-column align="center" prop="date" label="审核">
                </el-table-column>

                <el-table-column align="center" prop="date" label="项目管理">
                </el-table-column>

                <el-table-column align="center" prop="date" label="软件分配">
                </el-table-column>

                <el-table-column align="center" prop="date" label="硬件分配">
                </el-table-column>

                <el-table-column align="center" prop="date" label="测试分配">
                </el-table-column>

                <el-table-column align="center" prop="date" label="进度">
                </el-table-column>

                <el-table-column align="center" label="操作">
                  <div class="wjj-bt" @click="$router.push(`/Project/Details?id=${111}`)">查看</div>
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
  .el-date-editor.el-input, .el-date-editor.el-input__inner {
    width: 138px;
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
