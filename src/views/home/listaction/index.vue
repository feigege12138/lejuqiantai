<template>


  <div>
     <div class="box">

      <div class="titlel"  >
            <div class="left" @click="save()"> 返回</div>
                <div class="center">不凡</div>
        </div>
    </div>
      
       <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <div v-for="item in list" :key="item.id" class="i" @click="brand(item.id)">
               <img class="pic" :src="item.app_list_pic_url" alt="">
               <div class="str">
                   <span>{{item.name}}|</span>
                   <span>{{item.floor_price}}起</span>
               </div>
              
           </div>
</van-list>
  </div>
</template>

<script>
import {listaction} from '../../../api/home/brand/index'
    

  export default {

    data() {
    return {
      list: [],
      loading: false,
      finished: false,
      start:1,
      page:10000
    };
  },
  methods: {
        brand(res) {
        console.log(res)
        this.$router.push({
          name: 'brand',
          query: {
            res: res
          }
        })
      },
     async init(){
            var result = await listaction(
                {
                    page:this.start
                }
            );
            console.log(result)
            this.list.push(...result.data);
            this.start++;
            this.page = result.total;
            this.loading = false;
        },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      if(this.start <= this.page){ // 请求得不是最后一页得数据
                this.init();
            }else{
                this.finished = true;
            }
    },
  },
    
    mounted(){
     
    },
     save(){
      console.log(123)
      this.$router.push({
        name: 'home',
       
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
.van-list{

    margin-top: 40px;
}
.i{
    position: relative;
    font-size: 16px;
    color: #ffffff;
    .pic{
        width: 375px;
        height: 207px;
    }
    .str{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
}
</style>