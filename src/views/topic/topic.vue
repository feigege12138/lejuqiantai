<template>
  <div>
    <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <div v-for="item in list" :key="item.id" class="i" @click="items(item.id)">
               <img class="pic" :src="item.scene_pic_url" alt="">
               <div>{{item.title}}</div>
               <p>{{item.subtitle}}</p>
               <h3>{{item.price_info}}元起</h3>
           </div>
</van-list>
  </div>
</template>

<script>
 import {
    index
  } from "@/api/topic/topic.js"
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
    items(res){
      this.$router.push({
        name:"choice",
        query:{
          id:res
        }
      })
    },
     async init(){
            var result = await index(
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
};
</script>

<style scoped lang="scss">
.i{

  .pic{
  width: 370px;
  height: 206px;
 
}
 div{
    font-size: 17px;
    margin-top: 10px;
  }
  p{
    font-size: 12px;
    color: #999;
    width: 350px;
    margin: 0 auto;
    margin-top: 10px;
  }
  h3{
    font-size: 14px;
    color: #b4282d;
    font-weight: 100;
  }
}

</style>