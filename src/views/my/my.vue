<template>
  
  <div>
      <div class="head">
        <div class="head-c">
          <img src="http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png" alt="">
          <p>用户</p>
        </div>
      </div>
      <div class="list">
        <div class="item right">我的订单</div>
        <div class="item right">优惠券</div>
        <div class="item">我的足迹</div>
        <div class="item right" @click="goListAction()">我的收藏</div>
        <div class="item right" @click="goaddress()">地址管理</div>
        <div class="item">联系客服</div>
        <div class="item right btm">帮助中心</div>
        <div class="item right btm" @click="goIdea()">意见反馈</div>
        <!-- <div class="item"></div> -->
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
     
    }
  },
  methods:{
    goListAction(){
      this.$router.push({
        name:'listAction'
      })
    },
    goIdea(){
      this.$router.push({
        name:'idea'
      })
    },
  goaddress(){
    this.$router.push({
      name:"address"
    })
  }
  }
}
</script>

<style lang="scss">
div{
//  height: 636px;
//  background-color: rgb(247, 247, 247);

.head{
  width: 375px;
  height: 140px;
  background-color: #333;
  overflow: hidden;
  .head-c{
    width: 150px;
    height: 70px;
    margin-top: 30px;
    margin-left: 20px;
    // background-color: pink;
    display: flex;
     align-items:center;

    img{
      width: 74px;
      height: 74px;
      border-radius: 50%;
    }
    p{
      margin-left: 20px;
      font-size: 14px;
      color: #fff;
    }
  }
}
.list{
  width: 375px;
  height: 215px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  line-height: 71px;
  background-color: #fff;
  

  .item{
    width: 124px;
    height: 71px;
    border-bottom: .8px rgba(0,0,0,.15) solid;
    background-color: #fff;
  }
  .right{
    border-right: .8px rgba(0,0,0,.15) solid;
  }
  .btm{
    border-bottom: none;
  }
}
}
</style>