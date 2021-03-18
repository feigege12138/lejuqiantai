<template>
  <div>
     <div class="Title">
       <div class="left" @click="gotop()">返回</div>
       <div class="right">不凡</div>
     </div>


    <van-tabs v-model="active" @click="onClick()" style="margin-top:40px;" >

      <van-tab :title="item.name" v-for="item in navList" :key="item.id" ref="zi"  @click="getIds(item.id)">
      <div class="line"></div>
        <div class="title" @click="getIds(item.id)">

          <p>{{item.name}}</p>
          <div>{{item.front_desc}}</div>
        </div>

      <ul class="goodsList">
        <li v-for="itemm in goodsList" :key="itemm.id" @click="getGoodsId(itemm.id)">
          <img :src="itemm.list_pic_url" alt="">
          <p>{{itemm.name}}</p>
          <div>{{itemm.retail_price}}</div>
        </li>
      </ul>
      </van-tab>

    </van-tabs>

  </div>
</template>

<script>
import { Toast } from 'vant';
  import {
    categoryNav,
    goodsList
  } from "../../../src/api/category/index"
  export default {
    data() {
      return {

        // 导航栏数据
        navList: [],
        active: '3',
        goodsList: [],
        navId: '',

        //路由跳转地址
        names:'category',
        // 父组件数据
        fu:''

      }
    },

    methods: {

       getMyEvent(){
          this.$refs.child.emitEvent(this.msg);
          //调用子组件的方法，child是上边ref起的名字，emitEvent是子组件的方法。
      },
      // 路由跳转返回上一层

    gotop(){
      this.$router.go(-1)
    },


      onClick(res) {
        // Toast(title);
        // console.log(res)
      },
      getIds(res) {
        // console.log(this)
        this.navid = res
        // console.log(id)
        goodsList({
          categoryId: res
        }).then(res => {
          // console.log(res)
          this.goodsList = res.data

          console.log(this.goodsList)
        })

      },

      getGoodsId(res) {
        console.log(res)
        this.$router.push({
          name:'Goods',
          query:{
            id:res
          }
        })
      }
    },

    created() {
      // this.getIds(123)
      //导航栏数据
      var id = this.$route.query.id
      categoryNav({
        id: id
      }).then(res => {
        // console.log(res)
        console.log(res)
        this.navList = res.navData
        console.log(this.navList)
        // 商品列表数据

        // console.log(id)
        goodsList({
          categoryId: id
        }).then(res => {
          // console.log(res)
          this.goodsList = res.data

          console.log(this.goodsList)
        })



      })
    }
  }
</script>

<style lang="scss" scoped>
.Title{
  border-bottom: 1px solid rgb(243, 242, 242);
  font-size: 16px;
  background-color: #fff;
  width: 375px;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
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
 .titlel {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 375px;
        height: 45px;
        color: red;
        border-bottom: #dddedf 1px solid;
        background-color: #fff;
        z-index: 100;

        .left {
            height: 60px;
            width: 60px;
            margin-left: 10px;
            font-size: 14px;
            line-height: 40px;
        }

        .center {
            // width: 60px;
            height: 40px;
            margin-left: 110px;
            text-align: center;
            line-height: 40px;
            font-size: 14px;
        }
    }
  .line {
    height: 10px;
    background-color: rgb(245, 243, 243);
  }

  .goodsList {
    width: 375px;
    display: flex;
    flex-wrap: wrap;

    li {
      width: 186px;
      height: 230px;

      img {
        width: 151px;
        height: 151px;
      }
    }
  }
</style>