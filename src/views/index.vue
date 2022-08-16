<template>
  <div class="index-box">
    <div class="top-info-bar">
      <div class="user-info">当前登录用户：<strong>{{user.name}}</strong>（{{user.grade}}）</div>
      <div class="time">{{date}}</div>
      <div class="user-control">
        <span>后台管理</span>
        &nbsp;|&nbsp;
        <span>退出登录</span>
      </div>
    </div>
    <div class="index-contaienr"></div>
  </div>
</template>

<script>
export default {
  components: {},

  data () {
    return {
      date: new Date().toLocaleString(),
      user: {
        name: '潘欣怡',
        sex: 1,
        grade: '四年级上册'
      },
      timer: null
    }
  },

  computed: {},

  mounted() {
    this.getTime()
  },

  methods: {
    getTime(){
      this.timer = setInterval(()=>{
        this.date = new Date().toLocaleString()
      }, 1000)
    },
  },

  beforeDestroy() {
    clearInterval(this.timer)
  }
}

</script>
<style lang='scss' scoped>
.index-box{
  width: 100%;
  height: 100%;
  background: rgb(241, 241, 241);
  display: flex;
  .top-info-bar{
    height: 50px;
    width: 100%;
    background: rgb(0, 40, 61);
    box-shadow: 0px 0px 30px 2px grey;
    display: flex;
    color: #fff;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    .user-control{
      cursor: pointer;
      span{
        &:hover{
          text-decoration: underline;
        }
      }
    }
    .time{
      font-weight: bold;
    }
  }
}
</style>
