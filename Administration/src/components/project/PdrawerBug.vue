<!-- Bug侧边栏组件 -->
<template>
  <div class="drawer-wrap">
    <el-drawer :visible.sync="drawer" @closed="closed">
        <Title style="margin: -82px 0 0 20px; width: 200px;" :title="'ErrBug详情'"></Title>
        <div class="wjj-drawer">
          <div class="content">
            <div class="details">
              <h2>当前ErrBug详情</h2>
              <p>项目: fdfd (xm202007171720411)</p>
              <p>所属类型 :3123</p>
              <p>提交人员 :超级管理员</p>
              <p>提交时间 :2020-07-17 19:05:39</p>
              <p>解决时间 : :超级管理员</p>
              <p>完成时间 : :超级管理员</p>
              <p>指派人员 :超级管理员</p>
              <p>解决人员 :超级管理员</p>
              <p>等级: 次要</p>
              <p>解决状态 : 待解决</p>
              <p>审核状态 : 无审核</p>
              <p>软件版本 : 3213</p>
              <p>硬件版本 : 312312</p>
              <p>标题: 测试模式</p>
              <h3>描述：任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，</h3>
              <h3>复现：任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，</h3>
              <h3>回复：任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，</h3>
              <div class="tab-title">Bug处理记录</div>
              <div class="wjj-table">
                <el-table :data="tableData" border style="width: 100%; display: inline-block;">
                  <el-table-column align="center" prop="sord" label="序号" width="55">
                  </el-table-column>

                  <el-table-column align="center" prop="date" label="项目">
                  </el-table-column>

                  <el-table-column align="center" prop="date" label="记录号">
                  </el-table-column>

                  <el-table-column align="center" prop="date" label="操作来源">
                  </el-table-column>

                  <el-table-column align="center" prop="date" label="记录人员">
                  </el-table-column>

                  <el-table-column align="center" prop="date" label="记录时间">
                  </el-table-column>

                  <el-table-column align="center" prop="date" label="操作状态">
                  </el-table-column>

                  <el-table-column align="center" prop="date" label="记录内容">
                  </el-table-column>
                </el-table>
              </div>
              <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="回复内容：">
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
.drawer-wrap {
  .el-drawer {
    width: 60% !important;
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
