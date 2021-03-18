<template>
    <div class="box">


      <div class="titlel"  >
            <div class="left" @click="save()"> 返回</div>
                <div class="center">不凡</div>
        </div>
   
      

        <van-cell-group>
            <van-field v-model="site" placeholder="搜索" size="16px" @input="search()" />
        </van-cell-group>
        <ul>
            <li v-for="item in list" :key="item.uid" @click="save(item)">{{item.title}}</li>
        </ul>
        <div id="container"></div>
    </div>
</template>

<script>
import {mapMutations} from "vuex"
    export default {

        data() {
            return {
                //输入框输入地址
                site: '',
                map: '',
                list: []
            }
        },
        mounted() {

            var _this = this
            var map = new BMap.Map("container");
            var point = new BMap.Point(116.331398, 39.897445);
            map.centerAndZoom(point, 12);
            this.map = map
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function (r) {
                console.log(r.address.city)
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
        watch: {
            site() {
                this.search()
            }
        },
        methods: {
            
            ...mapMutations(["add"]),
           save(val){
               console.log(val)
               this.add(val)
               this.$router.push("/home")
               
           },

            search() {
                var _this = this
                var options = {
                    onSearchComplete: function (results) {
                        if (local.getStatus() == BMAP_STATUS_SUCCESS) {
                            console.log(results)
                            console.log(_this.list)
                            _this.list = results.Hr
                        }
                    }
                };
                var local = new BMap.LocalSearch(this.map, options);
                local.search(this.site);
            }
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

    #container {
        width: 375px;
        height: 200px;
        position: absolute;
        left: 0;
        bottom: 20px;
    }
</style>