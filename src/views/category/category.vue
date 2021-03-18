<template>
  <div>
    
    <div class="left">
      
      <van-sidebar v-model="activeKey">
  <van-sidebar-item :title="item.name" v-for="item in categoryList" :key="item.id" @click="getList(item.id)"/>
 
</van-sidebar>
    </div>
    <div class="main">
      <img :src="img.banner_url" alt="">
      <div class="title">一 {{img.name}} 一</div>
      <div class="list-main">
 <div class="list" v-for="item in subList" :key="item.id" @click="getNav(item.id)">

   
        <img :src="item.wap_banner_url" alt="">
        <p>{{item.name}}</p>
      </div>
      </div>
     
    </div>
  </div>
</template>

<script>
import {indexaction,currentaction} from'../../../src/api/category/index'
export default {
  data(){
    return{
      activeKey:0,
      // 导航栏列表
      categoryList:[],
      // banner图
      img:'',
      //商品列表
      subList:[]

    }
  },
  created(){
  
    indexaction().then(res=>{
      console.log(res)
      this.categoryList=res.categoryList
    })
    this.getList(1005000)
  },
  methods:{
    getNav(res){
      this.$router.push({
        name:'categoryNav',
        query:{
          id:res,
          name:"category"
        }
      })
    },
    getList(res){
      console.log(res)
      currentaction({id:res}).then( ress=>{
        console.log(ress)
        this.img=ress.data.currentOne
        this.subList=ress.data.currentOne.subList
        console.log(this.img,this.subList)
      })
    }
  }
}
</script>

<style lang='scss' scoped>
div{
position: relative;
.left{
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
}
.main{
  position: absolute;
  right: 20px;
  top: 0;
  img{
    width: 263px;
    height: 111px;
  }
  .title{
    height: 60px;
    line-height: 60px;
  }
  .list-main{
    width: 263px;
    // height: 1000px;
    // background-color: black;
    display: flex;
    flex-wrap: wrap;
  }
  .list{
    width: 87px;
    height: 88px;
    margin-bottom: 20px;
    img{
      width: 72px;
      height: 72px;
    }
  }
}
}
</style>