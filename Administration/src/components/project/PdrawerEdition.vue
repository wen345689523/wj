<!-- 查看软件版本发布侧边栏组件 -->
<template>
  <div class="drawer-wrap">
    <el-drawer :visible.sync="drawer" @closed="closed">
        <Title style="margin: -82px 0 0 20px; width: 200px;" :title="'当前发布软件详情'"></Title>
        <div class="wjj-drawer">
          <div class="content">
            <div class="details">
              <h2>项目详情</h2>
              <p>项目名称: fdfd</p>
              <p>发布人: 超级管理员</p>
              <p>软件串码: tinified</p>
              <p>软件版本: 3213</p>
              <p>硬件版本: 312312</p>
              <p>发布时间: 2020-07-17 19:26:38</p>
              <p>编译时间: 2020-07-17 19:26:38</p>
              <p>发布地址:  uploads/20200717/1594985528964_tinified.zip</p>
              <h3>发布内容: 任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，任务内容任务内容任务内容任务内容任务内容，</h3>
              <div class="tab-title">软件发布反馈记录</div>
              <div class="wjj-table">
                <el-table :data="tableData" border style="width: 100%; display: inline-block;">
                  <el-table-column align="center" prop="sord" label="序号" width="55">
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
                <el-form-item label="记录状态">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="记录标题">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
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
