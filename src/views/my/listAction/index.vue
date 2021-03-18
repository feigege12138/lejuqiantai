<template>
  <div>
     <div class="Title">
       <div class="left" @click="gotop()">返回</div>
       <div class="right">不凡</div>
     </div>
     <div class="main">
         <div class="title">
             我的收藏
         </div>
<div class="list">

           <div class="item" v-for="item in collectGoodsList" :key="item.id" @click="getGoodsId(item.id)" >
        <img :src=item.list_pic_url alt="">
        <p>{{item.name}}</p>
        <div>￥{{item.retail_price}}</div>
      </div>
</div>
     </div>
  </div>
</template>

<script>
import {listAction ,submitAction} from"@/api/my/index"
export default {
data(){
    return{
collectGoodsList:[],
content:'dada',



            phone:'dwadwa',
            openId:'66',
            name:'dwadaw'
    }
},
methods:{
    gotop(){
        this.$router.go(-1)
    },

    getGoodsId(res) {
        console.log(res)
        this.$router.push({
          name:'Goods',
          query:{
            id:res,
            content:'dada',
            phone:'dwadwa',
            openId:'66',
            name:'dwadaw'
          }
        })
      },
},
created(){
    listAction({openId:'66'}).then(res=>{
        console.log(res)
        this.collectGoodsList=res.collectGoodsList
    })

    var content=this.content,
        phone=this.phone,
        openId=this.openId,
        name=this.name
        console.log(content,phone,openId,name)
    submitAction({content,phone,openId,name}).then(res=>{
        console.log(res)
    })
                // this.$axios({

                //     url: 'http://shop.bufantec.com/bufan/feedback/submitAction',
                //     method: "post",
                //     params: {
                //        content,phone,openId,name
                //     },


                // }).then(res =>
                //     console.log(res),

                // )

   
}
}
</script>

<style lang="scss">
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
.main{
    .title{
        margin-top: 60px;
        height: 40px;
        width: 375px;
        border-bottom: 2px solid rgb(0, 0, 0,.1);
        border-top: 2px solid rgb(0, 0, 0,.1);
        line-height: 40px;
        font-size: 15px;
        font-weight: 700;

        
    }
}
.list{
    width: 375px;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    background-color: rgb(245, 245, 245);
    .item{
        background-color: #fff;
        width: 180px;
        height: 215px;
        margin-bottom:5px;
        img{
            width: 150px;
            height: 150px;
        }
        p{
            padding-left: 20px;
            text-align: left;
        }
        div{
            
            padding-left: 20px;
color: #b4282d;
            text-align:left;
        }
    }

    
}
</style>