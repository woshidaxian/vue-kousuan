<template>
  <div class="login-box">
    <div class="left">
      <p><i>欢迎使用</i></p>
      <p>口算训练系统</p>
      <div class="time">{{date}}</div>
    </div>
    <div class="center"></div>
    <div class="right">
      <div style="width: 70%;margin: 0 auto">
        <h3>账号登录</h3>
        <el-form :model="info" :rules="rules">
          <el-form-item prop="account">
            <el-input v-model="info.account" placeholder="账号" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" v-model="info.password" placeholder="密码" prefix-icon="el-icon-key"></el-input>
          </el-form-item>
          <el-button type="primary" style="width: 100%" @click="login">登录</el-button>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      timer: null,
      date: new Date().toTimeString(),
      info: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: '请输入账号', trigger: ['change', 'blur'] }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: ['change', 'blur'] }
        ]
      }
    }
  },

  mounted() {
    this.getTime()
  },

  methods: {
    getTime(){
      this.timer = setInterval(()=>{
        this.date = new Date().toTimeString()
      }, 1000)
    },
    login(){
      this.$router.push('/index')
    }
  },
  beforeDestroy(){
    clearInterval(this.timer)
  }
}

</script>
<style lang='scss' scoped>
.login-box{
  width: 750px;
  height: 400px;
  border-radius: 30px;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto auto;
  box-shadow: 0px 0px 40px 6px rgb(79, 79, 79);
  background: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  overflow: hidden;
  align-items: center;
  &>div{
    height: 100%;
  }
  .left{
    width: 45%;
    position: relative;
    p{
      font-family: 黑体;
      font-size: 25px;
      font-weight: bold;
      &:nth-child(1){
        position: absolute;
        top: 120px;
        left: 70px;
        font-size: 30px;

      }
      &:nth-child(2){
        position: absolute;
        top: 180px;
        left: 120px;
        color: rgb(0, 197, 177);
      }
    }
    .time{
      width: 100%;
      text-align: center;
      height: 40px;
      line-height: 40px;
      position: absolute;
      bottom: 0;
      font-size: 12px;
    }
  }
  .center{
    height: 60%;
    width: 1px;
    background: rgb(0, 0, 0);
  }
  .right{
    width: 54%;
    padding-top: 150px;
  }
}
</style>
