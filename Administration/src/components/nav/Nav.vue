                                                                    <!-- 左边导航栏 -->
<template>
  <div class="wjj-nav">
    <ul>
      <li class="title">项目管理系统</li>
      <li v-for="(item, index) in navList" :key="index"
        @click="active = index"
        :class="index == active && 'active'"
        class="wjj-nav-list">
        <router-link :to="item.url">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  props: {},
  data () {
    return {
      active: -1,
      navList: [
        {
          url: '/TaskInformation',
          name: '任务信息',
          icon: 'el-icon-document'
        },
        {
          url: '/TaskHall',
          name: '任务大厅',
          icon: 'el-icon-star-off'
        },
        {
          url: '/Project',
          name: '项目管理',
          icon: 'el-icon-folder-opened'
        },
        {
          url: '/Need',
          name: '需求管理',
          icon: 'el-icon-s-opportunity'
        },
        {
          url: '/Bug',
          name: 'BUG管理',
          icon: 'el-icon-coordinate'
        },
        {
          url: '/WorkJournal',
          name: '工作日志',
          icon: 'el-icon-edit-outline'
        },
        {
          url: '/Organization',
          name: '组织管理',
          icon: 'el-icon-data-board'
        },
        {
          url: '/NumberRecord',
          name: '积分记录',
          icon: 'el-icon-coin'
        }
      ]
    }
  },
  mounted () {
    setTimeout(() => {
      switch (this.$router.currentRoute.name) {
        case 'TaskInformation': this.active = 0
          break
        case 'TaskHall': this.active = 1
          break
        case 'Project': this.active = 2
          break
        case 'Need': this.active = 3
          break
        case 'Bug': this.active = 4
          break
        case 'WorkJournal': this.active = 5
          break
        case 'Organization': this.active = 6
          break
        case 'NumberRecord': this.active = 7
          break
      }
    }, 100)
  }
}
</script>
<style lang="scss" scoped>
.wjj-nav, .wjj-nav ul{
  position: relative;
  width: 100%;
  height: 100%;
  .title {
    font-size: 26px;
    color: #FFFFFF;
    text-align: center;
    line-height: 80px;
    background: #303133;
    margin-bottom: 20px;
  }
  .active {
    background: #303133;
  }
  .wjj-nav-list {
    font-size: 20px;
    height: 60px;
    a {
      display: flex;
      color: #FFFFFF;
      i {
        flex: 1;
        color: #00b999;
        font-size: 28px;
        line-height: 62px;
        text-align: right;
        margin-right: 6px;
      }
      span {
        flex: 3;
        line-height: 60px;
      }
    }
  }
}
</style>
