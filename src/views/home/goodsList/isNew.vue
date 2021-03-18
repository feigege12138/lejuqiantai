<template>

  <div>
    
 <div class="box">

      <div class="titlel">
            <div class="left" @click="save()"> 返回</div>
                <div class="center">不凡</div>
        </div>
    </div>

    <div class="top">
      <div class="top-c">

      <img src="http://yanxuan.nosdn.127.net/8976116db321744084774643a933c5ce.png" alt="">
      <div class="item">
        <div class="btn"  @click="initt()">价格升序</div >
        <div  class="btn"  @click="initb()">价格降序</div>
      </div>
      </div>
    </div>
     <div class="line"></div>
      <div class="list">
          <ul>
              <li v-for="item in goodsLists" :key="item.id">

                  <div class="div">
                      <img :src=item.list_pic_url alt="">
                      <div>{{item.name}}</div>
                      <p>￥{{item.retail_price}}</p>
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
  import {
    goodsList
  } from '../../../api/home/goodsList/index'
  export default {
    data() {
      return {
       isNew:1,
       isHot:'',
        order: 'desc'
        ,goodsLists:[]
      }
    },
    created() {
    
      this.init()
    },
    methods: {
      initt(){
        this.order="asc"
        this.init()
      },
      initb(){
        this.order="desc"
        this.init()
      },
      init() {
         var isNew = this.$route.query.isNew
          var isHot = this.$route.query.isHot
         console.log(isNew)
        goodsList({
          isNew: isNew,
          isHot: isHot,
          order: this.order
        }).then(res => {
          console.log(res)
          this.goodsLists=res.data
        })
      },
       save(){
      console.log(123)
      this.$router.push({
        name: 'home',
       
      })
    }
    }
  }
</script>

<style lang="scss" scoped>
.box{
width: 375px;
height: 45px;
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
}
.top{
  
  width: 375px;
  img{
    width: 100%;
  }
  .item{
    display: flex;
    flex:  space-between ;
    height: 30px;
    margin-top: 10px;
div{
  width: 100%;
}
   
  
  }
}

        .line{
            width: 375px;
            height: 10px;
            background-color: rgb(245, 244, 244);
        }
        .list{
            ul{
                display: flex;
                flex-wrap: wrap;
                flex: space-between;
                overflow: hidden;
                        background-color: rgb(245, 244, 244);


                li{
                    width: 49%;
                    margin-right: 1%;
                    margin-top: 5px;
                    .div{
                        background-color: #fff;
                        height: 100%;
                    }


                    img{
                        width: 100%;
                    }
                    p{
                        color:#b4282d;
                    }
                    
                }
            }
        }
</style>