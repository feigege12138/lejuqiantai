<template>
  <div>
      <div class="Title">
       <div class="left" @click="gotop()">返回</div>
       <div class="right">不凡</div>
     </div>
   <div class="list">
     <div class="title">专题精选</div>
     <div class="item" v-for="item in recommendList" :key="item.id">
       <img :src="item.scene_pic_url" alt="">
       <p>{{item.title}}</p>
       </div>
   </div>
  </div>
</template>

<script>
  import {
    detailaction
  } from '../../../../src/api/topic/choice/index'
  export default {
    data() {
      return {
        recommendList:[]
      }
    },

    methods: {
      gotop(){
        this.$router.go(-1)
      }
    },
    created() {
      var id=this.$route.query.id
      console.log(id)
    
        detailaction({id}).then(res=>{
          console.log(res)
          this.recommendList=res.recommendList
        })
      
    },
  }
</script>

<style lang="scss">
  body{
    .Title{
  border-bottom: 1px solid rgb(243, 242, 242);
  font-size: 16px;
  background-color: #fff;
  width: 375px;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  .left{
    position: absolute;
    left: 20px;
    top: 0;
    color: red;
    line-height: 40px;
  }
  .right{
    color: red;
    line-height: 40px;

  }
}
    background-color: #f4f4f4;
    .list{
      width: 375px;
      .title{
        width: 375px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: .4rem;
        color: #999;
      }
      .item{
        width: 321px;
        height: 215px;
        background-color: #fff;
        margin: 20px auto;
        padding: 12px;
        img{
          width: 321px;
          height: 139px;
        }
        p{
          font-size: 16px;
          text-align: left;
        }
      }
    }
  }
</style>