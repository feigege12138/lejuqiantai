<template>
  <div>
    <div class="cart" @click="seve() "></div>
    <ul>
      <li v-for="item in List" :key="item.id">
        <img :src=item.scene_pic_url alt="">
        <div>{{item.title}} </div>
        <p>{{item.subtitle}}</p>
        <h3>{{item.price_info}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
  import {
    index
  } from "@/api/topic/topic.js"
  export default {

    data() {
      return {
        List: [],
        endarr: [],
        page:2
      }
    },
  
    created() {
      var page=1

      index({
        page
      }).then(res => {
        console.log(res)
        for(var i = 0;i<res.data.length;i++){
          this.List.push(res.data[i])
        }
        // this.List.push(res.data)
        console.log(this.List)
      })
      page++
    },
    methods:{
      
      seve(){
        this.page++
        var page=this.page
         index({
        page
      }).then(res => {

         for(var i = 0;i<res.data.length;i++){
          this.List.push(res.data[i])
        }
        console.log(this.List)
        console.log(this.List.length)

      })
     
      },
       save(){
      console.log(123)
      this.$router.push({
        name: 'home',
       
      })
    }
    },
    mounted(){
     
    }
  


  }
</script>

<style lang="scss" scoped>
  @import './css/topic.scss'
</style>