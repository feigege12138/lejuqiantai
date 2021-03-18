<template>
  <div class="box">

    <div class="warp">
      <div @click="rote" class="re">
        {{ aaa }}
      </div>

      <div id="container"></div>
      <van-cell-group>
        <van-field v-model="value" placeholder="搜索商品" @click="search()" />
      </van-cell-group>
    </div>




    -
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
      <van-swipe-item v-for="(item,index) in data.banner" :key="index"><img :src=item.image_url alt=""></van-swipe-item>

    </van-swipe>

    <div class="tabs">
      <div class="tabs-c" v-for="(item,index) in data.channel" :key="index" @click="items(item.id)">
        <div class="icon">
          <img :src=item.icon_url alt="">
        </div>
        <div class="str">{{item.name}}</div>
      </div>
    </div>
    <div class="line"></div>
    <!-- 商品制造商直供 -->
    <div class="brand">
      <div class="brand-title" @click="listaction()">品牌制造商直供</div>
      <div class="brand-main">
        <div class="main-c" v-for="(item,index) in data.brandList" :key="index" @click="brand(item.id)">
          <div class="str">
            <p>{{item.name}}</p>
            <p>{{item.floor_price}}</p>
          </div>
          <img :src="item.pic_url" alt="">
        </div>
      </div>
    </div>
    <!-- 新品首发 -->

    <div class="new">
      <div class="line"></div>
      <div class="new-banner">
        <div class="title"  @click="isNew()">
          <div class="top">新品首发</div>
          <div class="btn">查看全部</div>
        </div>
      </div>
      <div class="line"></div>

      <div class="new-main">
        <ul>
          <li v-for="(item,index) in data.newGoods" :key="index" >
            <img :src=item.list_pic_url alt="">

            <h3>{{item.name}}</h3>
            <p>{{item.goods_brief}}</p>
            <div>￥{{item.retail_price}}</div>
          </li>
        </ul>
      </div>
    </div>

    <div class="hotgoods">
      <div class="line"></div>
      <div class="hot-banner">
        <div class="title" @click="isHot()">
          <div class="top">人气推荐、好物精选</div>
          <div class="btn">查看全部</div>
        </div>
      </div>
      <div class="line"></div>
      <div class="hot-main">
        <ul>
          <li v-for="(item,index) in data.hotGoods" :key="index"  @click="getGoodsId(item.id)">
            <img :src=item.list_pic_url alt="">

            <h3>{{item.name}}</h3>
            <p>{{item.goods_brief}}</p>
            <div>￥{{item.retail_price}}</div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 专题精选 -->
    <div class="choice">
      <div class="title">
      </div>
      <ul class="topiclist">
        <li v-for="(item,index) in data.topicList" :key="index" @click="choice(item.id)">
          <img :src=item.item_pic_url alt="">
          <div>
            <h3>{{item.title}}</h3>
            <p>{{item.price_info}}元起</p>
          </div>
          <p>{{item.subtitle}}</p>
        </li>
      </ul>
    </div>
    <!-- 居家好物 -->
    <div class="newCategoryList" v-for="(item,index) in data.newCategoryList" :key="index"  >

      <div class="title">{{item.name}}好物</div>

      <div class="main" v-for="(itemm,index) in item.goodsList" :key="index" @click="getGoodsId(itemm.id)" >
        <img :src=itemm.list_pic_url alt="">
        <p>{{itemm.name}}</p>
        <div>￥{{itemm.retail_price}}</div>
      </div>
      <div class="go">
        <div>
          {{item.name}}好物
          <van-icon name="share-o" />
        </div>


      </div>
    </div>




    <div class="lll"> </div>
  </div>

</template>

<script>
  import {
    index
  } from "@/api/home/index.js"
  import {
    mapState
  } from 'vuex';
  export default {
    data() {
      return {
        current: 0,
        blac: "black",
        value: '',
        //banner数据
        data: {
          banner: null,
          channel: null,
          newGoods: null,
          hotGoods: null,
          brandList: null,
          topicList: null,
          newCategoryList: null,
        },


        //地点名称
        aaa: '',


       

      };
    },
    methods: {
      //跳转商品详情页面
       getGoodsId(res) {
        console.log(res)
        this.$router.push({
          name:'Goods',
          query:{
            id:res
          }
        })
      },
      //专题精选
      choice(res){
        console.log(res)
        this.$router.push({
          name:"choice",
          query:{
            id:res
          }
        })
      },

      // 新品首发
      isNew() {
        this.$router.push({
          name: 'isNew',
          query:{
            isNew:1,
            isHot:''
          }
        
        })
     
      },
      isHot() {  
        this.$router.push({
          name: 'isNew',
          query:{
            isNew:'',
            isHot:1
          }
        
        })
     
      },
      
      listaction() {
        this.$router.push({
          name: 'listaction'
        })
      },
      search() {
        this.$router.push({
          name: 'search',
          query: {
            value: this.value
          }
        })
      },
      onChange(index) {
        this.current = index;
      },
      rote() {

        this.$router.push("/home/city")
      },
      items(res) {
      
      this.$router.push({
        name:'categoryNav',
        query:{
          id:res,
          name:'home'
         
        }
      })
 
      },
      brand(res) {
        console.log(res)
        this.$router.push({
          name: 'brand',
          query: {
            res: res
          }
        })
      }
    },
    created() {
      //首页数据
      index().then(res => {
        console.log(res)
        for (let i in res) {
          this.data[i] = res[i]
        }
      })
    },
    mounted() {
      //地图
      if (this.cityInfo.title) {
        this.aaa = this.cityInfo.title;
        return
      }
      var _this = this
      var map = new BMap.Map("container");
      var point = new BMap.Point(116.331398, 39.897445);
      map.centerAndZoom(point, 12);

      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function (r) {
        // console.log(r.address.city)
        _this.aaa = r.address.city
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var mk = new BMap.Marker(r.point);
          map.addOverlay(mk);
          map.panTo(r.point);
        } else {
          alert('failed' + this.getStatus());
        }
      }, {
        enableHighAccuracy: true
      })
    },
    computed: {
      ...mapState(["cityInfo"])
    }
  };
</script>

<style lang="scss" scoped>
  @import './css/index.scss'
</style>