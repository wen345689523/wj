<!-- 头部组件 -->
<template>
  <div class="wjj-uptab">
    <span style="margin-right:10px">
      <input class="input-file" type="file" @change="exportData"
      accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
      <el-button type="primary" size="medium" icon="el-icon-upload" @click="btnClick">上传Excel表格数据</el-button>
      <el-button type="primary" v-show="url" @click="subUp">确认修改</el-button>
      <el-button type="primary" @click="exportToExcel">导出</el-button>
      <div ref="myXlst" contenteditable></div>
    </span>
  </div>
</template>

<script>
import XLSX from 'xlsx'
import { export_upjson_to_excel, export_json_to_excel } from '../../assets/js/Export2Excel'
export default {
  data () {
    return {
      url: '',
      sheetData: [],
      name: ''
    }
  },
  methods: {
    btnClick () {
      document.querySelector('.input-file').click()
    },
    subUp () {
      const sheetData = XLSX.utils.table_to_sheet(this.$refs.myXlst)
      const JSONdata = XLSX.utils.sheet_to_json(sheetData)
      this.sheetData = sheetData
      this.$emit('getResult', JSONdata)
    },
    exportData (event) {
      if (!event.currentTarget.files.length) {
        return
      }
      const that = this
      // 拿取文件对象
      var f = event.currentTarget.files[0]
      that.name = f.name.split('.xlsx')[0]
      // 用FileReader来读取
      var reader = new FileReader()
      // 重写FileReader上的readAsBinaryString方法
      FileReader.prototype.readAsBinaryString = function (f) {
        var binary = ''
        var wb // 读取完成的数据
        var outdata // 你需要的数据
        var reader = new FileReader()
        reader.onload = function (e) {
          // 读取成Uint8Array，再转换为Unicode编码（Unicode占两个字节）
          var bytes = new Uint8Array(reader.result)
          var length = bytes.byteLength
          for (var i = 0; i < length; i++) {
            binary += String.fromCharCode(bytes[i])
          }
          // 接下来就是xlsx了，具体可看api
          wb = XLSX.read(binary, {
            type: 'binary'
          })
          // sheet_to_html(转成html) table_to_sheet(转成sheet) json_to_sheet(转成sheet)
          outdata = XLSX.utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]])
          const HT = XLSX.utils.sheet_to_html(wb.Sheets[wb.SheetNames[0]])

          that.url = HT.split('<body>')[1].split('</body>')[0]
          that.$refs.myXlst.innerHTML = that.url

          // 转成sheet 导出表格
          const sheetData = XLSX.utils.table_to_sheet(that.$refs.myXlst)
          that.sheetData = sheetData
          // 自定义方法向父组件传递数据
          that.$emit('getResult', outdata)
        }
        reader.readAsArrayBuffer(f)
      }
      reader.readAsBinaryString(f)
    },

    // 导出xlsx功能
    exportToExcel () {
      if (this.sheetData.length < 1) {
        this.$message({
          showClose: true,
          message: '找不到xlsx文件！',
          type: 'error'
        })
        return
      }
      export_upjson_to_excel(this.sheetData, this.name)
      // require.ensure([], () => {
      //   export_upjson_to_excel(this.sheetData, this.name)
      // })
    },

    // 导出前端写死不是上传的表格
    export2Excel1 () {
      const tHeader = ['序号', '姓名']
      const filterVal = ['userId', 'name']
      const list = [
        {
          userId: '44',
          name: '444'
        }
      ]
      const data = this.formatJson(filterVal, list)
      export_json_to_excel(tHeader, data, '用户列表')
    },
    formatJson (filterVal, jsonData) {
      // 便利表格数组 获取数组key对应的数据
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  }
}
</script>

<style lang="scss">
.wjj-uptab {
  table {
    width: 100%;
    border: none;
    tbody, tr {
      width: 100%;
      border: none;
    }
    td {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      padding: 10px 8px;
      font-size: 16px;
      color: #606266;
      text-align: center;
      white-space: nowrap;
      font-weight: 400;
      border: 1px solid #EBEEF5;
    }
  }
}
.input-file {
  display: none;
}
</style>
