<template>

  <div id="app">
   
   <router-view />

<van-tabbar route v-if="ifFootShow">
  <van-tabbar-item replace to="/home" icon="home-o">标签</van-tabbar-item>
  <van-tabbar-item replace to="/topic" icon="orders-o">专题</van-tabbar-item>
  <van-tabbar-item replace to="/category" icon="qr">分类</van-tabbar-item>
  <van-tabbar-item replace to="/cart" icon="cart-o">购物车</van-tabbar-item>
  <van-tabbar-item replace to="/my" icon="manager-o">我的</van-tabbar-item>
</van-tabbar>



  </div>
</template>


<script>
export default {
data(){
  return{
    ifFootShow:false,
    ifFootif:false
  }
},
watch:{
  "$route":function(to,from){
    var path=["/home","/topic","/category","/cart","/my"]
    if(path.includes(to.path)){
      this.ifFootShow=true
    }else{
      this.ifFootShow=false
    }
     if(!path.includes(to.path)){
      this.ifFootif=true
    }else{
      this.ifFootif=false
    }
  }
},
  created () {
    var userInfo = {

      "openId":"183111", // token

      "nickName":"赵六",

      "avatarUrl":"https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIbWFEIJj8IpGeHM7dGic1aTFZALjWcMm9ltWfFiaQfVRYticWBfgGfzXWMt2EkJWiaicPtftHAlWxUibxQ/132"

    };

    var openId = userInfo.openId;

    localStorage.setItem("userInfo", JSON.stringify(userInfo));

    localStorage.setItem("openId", openId);
  },
  methods:{
   
  }

}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
