<template>
  <div></div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
      list: [],
      timer: null,
      seconds: 0,
      userConfig: {
        digit: [
          {
            max: 100,                // 这个数的最大值 
            min: 0,                  // 这个数的最小值
            widthDecimal: false,     // 带不带小数点
          }
        ],
        isAliquot: true, // 是否整除
        operator: '0,1',
        problemNum: 20
      },
      operatorArr: ['+', '-', '×', '÷']
    }
  },

  mounted() {},

  methods: {
    init(){
      
    },
    startTimer(){
      this.timer = setInterval(() => {
        this.seconds ++
      }, 1000);
    },
    endTimer() {
      clearInterval(this.timer);
    },
  }
}

</script>
<style lang='scss' scoped>
</style>
