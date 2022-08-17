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
    <div class="index-contaienr">
      <div class="flex-row-between" style="padding: 20px;width: calc(100% - 40px)">
        <div class="data-item" style="background: rgb(0, 109, 67)">
          <div class="label">目标完成率：</div>
          <div class="value">0%</div>
        </div>
        <div class="data-item" style="background: rgb(179, 45, 0);">
          <div class="label">当前正确率：</div>
          <div class="value">90%</div>
        </div>
        <div class="data-item" style="background: rgb(179, 131, 0)">
          <div class="label">今日做题：</div>
          <div class="value">20</div>
        </div>
        <div class="data-item" style="background: rgb(0, 113, 179)">
          <div class="label">今日正确率：</div>
          <div class="value">20%</div>
        </div>
      </div>
    </div>
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
      timer: null,
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
  flex-direction: column;
  .top-info-bar{
    height: 50px;
    width: calc(100% - 40px);
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
  .index-contaienr{
    flex: 1;
    .data-item{
      width: 24%;
      display: flex;
      padding: 40px 0;
      flex-direction: row;
      align-items: center;
      border-radius: 10px;
      color: #fff;
      .label{
        width: 60%;
        font-family: 黑体;
        font-size: 20px;
        font-weight: bold;
      }
      .value{
        width: 40%;
        font-weight: bold;
        font-size: 24px;
      }
    }
  }
}
</style>
