<!-- 百度富文本组件 -->
<template>
  <div>
    <script id="editor" type="text/plain"></script>
    <button @click="getUEContent">确认</button>
  </div>
</template>

<script>
export default {
  name: 'UE',
  data () {
    return {
      editor: null
    }
  },
  props: {
    defaultMsg: {
      type: String
    },
    config: {
      type: Object
    }
  },
  mounted () {
    setTimeout(v => {
      const _this = this
      // eslint-disable-next-line no-undef
      this.editor = UE.getEditor('editor', this.config)// 初始化UE
      this.editor.addListener('ready', function () {
        _this.editor.setContent(_this.defaultMsg) // 确保UE加载完成后，放入内容。
      })
    }, 1000)
  },
  methods: {
    getUEContent () { // 获取内容方法
      console.log(this.editor.getContent())
      return this.editor.getContent()
    }
  },
  destroyed () {
    this.editor.destroy()
  }
}
</script>
