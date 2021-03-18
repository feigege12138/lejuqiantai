<template>
  <div>
       <div class="box">

      <div class="titlel"  >
            <div class="left" @click="save()">返回</div>
                <div class="center">不凡</div>
        </div>
    </div>

      <div class="main">
          <div class="top">
              <img :src=img.list_pic_url alt="">
              <p>{{img.name}}</p>
          </div>
          <p class="str">{{img.simple_desc}}</p>

      </div>
      <div class="line"></div>
      <div class="list">
          <ul>
              <li v-for="item in list" :key="item.id">

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
import {detailaction} from '../../../../src/api/home/brand/index'
export default {
    data(){
        return{
            img:'',
            list:[],
            
        }
    },

methods:{
   save(){
      console.log(123)
      this.$router.push({
        name: 'home',
       
      })
    }
  
},
    created(){
        console.log(123)
        var id = this.$route.query.res
        detailaction({id}).then(res=>{
            console.log(res)
            this.img=res.data
            this.list=res.goodsList
            console.log(this.img,this.list)
            
        })
        
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
    .main{
        .top{
            position: relative;

        img{
            width: 375px;
        }
        p{
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-100%);
            border-bottom: 2px #fff solid;
            color: #fff;
            font-size: 20px;
        }
        }
        .str{
            width: 335px;
            height: 60px;
            font-size: .4rem;
            padding: 0 20px 0 20px;
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