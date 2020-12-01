<!-- 任务大厅 -->
<template>
  <div class="task-hall">
    <Title :title="'任务大厅'"></Title>
    <div class="modular">
      <div class="item-modular">组织管理</div>
      <div class="item-modular">角色管理</div>
      <div class="item-modular">策略管理</div>
    </div>
    <div class="table1">
      <p>未完成项目进度</p>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column align="center" prop="date" label="序号" width="55">
        </el-table-column>

        <el-table-column align="center" prop="date" label="组织名字">
        </el-table-column>

        <el-table-column align="center" prop="date" label="创建时间">
        </el-table-column>

        <el-table-column align="center" prop="date" label="创建人">
        </el-table-column>

        <el-table-column align="center" label="操作">
          <div class="wjj-bt" @click="dialogFormVisible = true">操作</div>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="操作" :visible.sync="dialogFormVisible" center>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="组织标题">
            <span>45446d6556</span>
          </el-form-item>
          <el-form-item label="执行时间">
            <el-date-picker
              v-model="tableData.name"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="权限">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button @click="dialogFormVisible=false">取消</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogFormVisible: false,
      form: {
        type: []
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.task-hall {
  position: relative;
  .modular {
    display: flex;
    justify-content: space-around;
    .item-modular {
      width: 200px;
      height: 100px;
      line-height: 100px;
      text-align: center;
      color: #ffffff;
      font-size: 20px;
      border-radius: 10px;
      cursor: pointer;
      background: #409eff;
    }
  }
}
.table1 {
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
    width: 30px;
    height: 30px;
    line-height: 30px;
    cursor: pointer;
    color: #00b79c;
  }
}
</style>
