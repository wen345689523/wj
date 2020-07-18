<!-- 生成软件版本发布侧边栏组件 -->
<template>
  <div class="drawer-wrap">
    <el-drawer :visible.sync="drawer1" @closed="closed">
        <Title style="margin: -82px 0 0 20px; width: 200px;" :title="'当前发布软件详情'"></Title>
        <div class="wjj-drawer">
          <div class="content">
            <div class="details">
              <div class="tab-title">--测试-任务列表</div>
              <div class="wjj-table">
                <el-table :data="tableData" border style="width: 100%; display: inline-block;">
                  <el-table-column align="center" prop="sord" label="序号" width="55">
                  </el-table-column>

                  <el-table-column align="center" prop="sord" label="项目" width="55">
                  </el-table-column>

                  <el-table-column align="center" prop="sord" label="指派人" width="55">
                  </el-table-column>

                  <el-table-column align="center" prop="sord" label="监理人" width="55">
                  </el-table-column>

                  <el-table-column align="center" prop="date" label="执行人">
                  </el-table-column>

                  <el-table-column align="center" prop="date" label="计划开始时间">
                  </el-table-column>

                  <el-table-column align="center" prop="date" label="计划结束时间">
                  </el-table-column>

                  <el-table-column align="center" prop="date" label="实际开始时间">
                  </el-table-column>

                  <el-table-column align="center" prop="date" label="实际结束时间">
                  </el-table-column>

                  <el-table-column align="center" prop="date" label="执行状态">
                  </el-table-column>

                  <el-table-column align="center" prop="date" label="审核状态">
                  </el-table-column>

                  <el-table-column align="center" prop="date" label="任务内容">
                  </el-table-column>
                </el-table>
              </div>
              <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="任务标题">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="指派人" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="监理人" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="执行人" :label-width="formLabelWidth">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="计划开始时间">
                  <el-date-picker
                    v-model="form.name"
                    type="datetime"
                    placeholder="选择日期时间">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="计划结束时间">
                  <el-date-picker
                    v-model="form.name"
                    type="datetime"
                    placeholder="选择日期时间">
                  </el-date-picker>
                </el-form-item>
                <el-form-item label="任务内容">
                  <el-input size="medium" type="textarea" v-model="form.name"></el-input>
                </el-form-item>
              </el-form>
              <div class="wjj-foot">
                <el-button type="primary" @click="onSubmit">确认</el-button>
                <el-button @click="$emit('onchangeTb')">取消</el-button>
              </div>
            </div>
          </div>
        </div>
      </el-drawer>
  </div>
</template>
<script>
export default {
  props: {
    drawer1: Boolean,
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
.drawer-wrap {
  .el-drawer {
    width: 70% !important;
  }
  .wjj-drawer {
    position: relative;
    padding: 0 20px;
    .content {
      width: 100%;
      height: 860px;
      overflow: auto;
      // padding-bottom: 20px;
      .tab-title {
        font-size: 16px;
      }
      h2, .tab-title {
        font-size: 16px;
        font-weight: bold;
      }
      .tab-title {
        margin-top: 8px;
      }
      h3 {
        margin-top: 8px;
        font-size: 14px;
      }
      .wjj-table {
        margin-top: 10px;
        height: 300px;
        overflow: auto;
      }
      p {
        display: inline-block;
        margin-top: 8px;
        width: 50%;
        font-size: 14px;
        input[type='text'] {
          width: 140px;
        }
      }
    }
    .el-textarea__inner {
      width: 600px;
      height: 100px;
    }
    .wjj-foot {
      width: 100%;
      height: 60px;
      margin-bottom: 100px;
      button {
        margin-left: 100px;
      }
    }
  }
}
</style>
