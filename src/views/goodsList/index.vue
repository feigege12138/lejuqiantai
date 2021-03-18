<template>
    <div>
        <div class="Title">
            <div class="left" @click="gotop()">返回</div>
            <div class="right">不凡</div>
        </div>

        <div class="bottom">
            <van-goods-action>
                <van-goods-action-icon icon="star-o" @click="collect()" :color="color" />
                <van-goods-action-icon icon="cart-o" @click="gocart()" :badge="num" />
                <van-goods-action-button type="warning" text="加入购物车" @click="addCart()" />
                <van-goods-action-button type="danger" text="立即购买" />
            </van-goods-action>
        </div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in gallery" :key="item.id"><img :src="item.img_url" alt=""></van-swipe-item>

        </van-swipe>

        <div class="titles">
            <div>30天无忧退货</div>
            <div>48小时急速退款</div>
            <div>满88免费包邮</div>
        </div>

        <div class="number">

            <div>
                {{info.name}}
            </div>
            <p> {{info.goods_brief}}</p>
            <h3>￥{{info.retail_price}}</h3>
        </div>
        <div class="num">
            <div>

                请选择商品数量
            </div>
            <van-icon name="arrow" />
        </div>
        <div class="line"></div>

        <!-- 商品参数 -->
        <div class="goods">
            <div class="title">商品参数</div>
            <div class="goods-main">

                <div v-for="item in attribute" :key="item.id">
                    <div class="left">{{item.name}}</div>
                    <div class="right">{{item.value}}</div>
                </div>
            </div>
        </div>
        <div class="img" v-html="goods_desc"></div>

        <!-- 常见问题 -->
        <div class="line"></div>
        <div class="issues">
            <div class="title"><span>————</span>常见问题<span>————</span></div>
            <div class="issue" v-for="item in issue" :key="item.id">
                <div>{{item.question}}</div>
                <p>{{item.answer}}</p>
            </div>
        </div>
        <div class="line" style="height:50px;"></div>

        <!-- 相似商品数据列表 -->

        <div class="list" style="margin-bottom:80px">
            <ul>
                <li v-for="item in productList" :key="item.id" @click="getGoodsId(item.id)">
                    <img :src="item.list_pic_url" alt="">
                    <p>{{item.goods_brief}}</p>
                    <div>￥{{item.retail_price}}</div>
                </li>
            </ul>
        </div>

    </div>

</template>

<script>
    import {
        detailaction,
    } from "../../../src/api/goodsList/index"
    import {
        addCarts,
        cartList,
        addcollect
    } from "@/api/cart/index"
    export default {
        data() {
            return {
                // 相似商品列表
                productList: [],
                // 轮播列表
                gallery: [],

                info: [],
                //商品详情数据
                attribute: [],

                //p标签图片数据
                goods_desc: '',
                //常见问题
                issue: [],

                //商品id
                id: '',
                numm: '1',
                openId: '66',
                // 购物车商品数量
                cartList: [],
                cartnum: [],
                num: 0,
                //icon颜色
                color: "black",
                a:0


            }
        },
        created() {
            var _this = this
            this.id = this.$route.query.id;

            detailaction({
                id: _this.id,
                openId: 'fsfsfsferasfsrgreghr'

            }).then(res => {
                // console.log(res)
                this.productList = res.productList
                this.gallery = res.gallery
                this.info = res.info
                this.attribute = res.attribute
                this.goods_desc = res.info.goods_desc
                this.issue = res.issue
                // console.log(this.issue)
                // console.log(this.goods_desc)
            })
            this.cartNum()

        },
        methods: {
            //购物车数量接口

            cartNum() {
                cartList({
                    openId: '66'
                }).then(res => {
                    //   console.log(res)
                        this.num=0
                        this.cartList = res.data
                    for (var i in this.cartList) {
                        this.cartnum.push(this.cartList[i].number)
                        this.num += this.cartnum[i]
                    }
                    console.log(this.num)
                })
            },
            // 跳转购物车
            gocart() {
                this.$router.push({
                    name: 'cart'
                })
            },
            //添加购物车
            addCart() {
                var goodsId = this.id,
                    number = this.numm,
                    openId = this.openId
                console.log(goodsId, number, openId, )
                addCarts({
                    goodsId,
                    number,
                    openId,
                }).then(res => {
                    console.log(res)
                this.cartNum() 
                })
                

            },
            //添加收藏
            collect() {
                var goodsId = this.id,
                    openId = this.openId
              addcollect({goodsId,openId}).then(res=>{

              })
              if(this.a==0){
                  this.color="#ff5000"
                  this.a=1;
              }else{
                  this.color="black"
                  this.a=0
              }
            },

         
            gotop() {
                this.$router.go(-1)
            },
            //跳转商品详情页面
            getGoodsId(res) {
                detailaction({
                    id: res,
                    openId: '666'

                }).then(res => {
                    console.log(res)
                    this.productList = res.productList
                    this.gallery = res.gallery
                    this.info = res.info
                    this.attribute = res.attribute
                    this.goods_desc = res.info.goods_desc
                    this.issue = res.issue
                    console.log(this.issue)
                    // console.log(this.goods_desc)
                })
            }
        }
    }
</script>

<style lang="scss" >

       
        // width: 375px;
        // overflow: hidden;
        .Title {
            border-bottom: 1px solid rgb(243, 242, 242);
            font-size: 16px;
            background-color: #fff;
            width: 375px;
            height: 40px;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10;

            .left {
                position: absolute;
                left: 20px;
                top: 0;
                color: red;
                line-height: 40px;
            }

            .right {
                color: red;
                line-height: 40px;


            }
        }

        .my-swipe .van-swipe-item {
            color: #fff;
            font-size: 20px;
            line-height: 150px;
            text-align: center;
            background-color: #39a9ed;
            height: 375px;

            img {
                width: 375px;
                height: 375px;
            }
        }
     
        .titles {
            width: 375px;
            margin: 0 auto;
            height: 50px;
            background-color: rgb(247, 245, 245);
            display: flex;
            padding: 10px;
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            -o-box-sizing: border-box;
            -ms-box-sizing: border-box;
            box-sizing: border-box;
            justify-content: space-around;

        }

        .my-swipe {
            img {
                width: 375px;
            }
        }

        .number {
            width: 375px;
            height: 153px;


            div {
                // font-weight: 700;
                font-size: 25px;
                margin-top: 10px;
            }

            p {
                font-size: 12px;
                color: #999;
                margin-top: 20px;
            }

            h3 {
                color: #b4282d;
                font-size: 18px;
                font-weight: 200;

            }

        }

        .num {
            width: 375px;
            height: 50px;
            text-align: left;
            border-top: 1px rgb(245, 244, 244) solid;
            line-height: 50px;
            font-size: 20px;

            div {
                float: left;
                width: 350px;
                font-size: 14px;
            }
        }

        .line {
            width: 375px;
            height: 10px;
            background-color: rgb(248, 246, 246);
        }

        .goods {
            width: 375px;
            height: 260px;
            // background-color: pink;

            .title {

                width: 375px;
                -moz-box-sizing: border-box;
                -webkit-box-sizing: border-box;
                -o-box-sizing: border-box;
                -ms-box-sizing: border-box;
                box-sizing: border-box;
                font-size: 18px;
                text-align: left;
                padding: 10px;
                text-align: left;
            }

            .goods-main {
                div {
                    width: 340px;
                    margin: 0 auto;
                    display: flex;
                    // padding-left: 20px;
                    margin-bottom: 10px;
                    height: 30px;
                    background-color: rgb(248, 246, 246);
                    font-size: 12px;

                    .left {
                        width: 70px;
                        padding-left: 0;
                        // background-color: green;
                        margin-right: 10px;
                        text-align: left;
                        height: 100%;
                        line-height: 30px;
                        color: #999;

                    }

                    .right {
                        height: 100%;
                        line-height: 30px;
                        padding-left: 0;
                        word-break: break-all;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                        width: 270px;
                        text-align: left;
                        // background-color: rgb(134, 126, 126);
                    }
                }

            }
        }

        .img{
            p{
                img{
                    width: 375px;
                }
            }
        }

        .issues {
            .title {
                width: 375px;
                height: 50px;
                line-height: 50px;
                font-size: 13px;

                span {
                    color: #999;
                }
            }

            font-size: 13px;
            width: 375px;

            .issue {
                width: 350px;
                margin: 0 auto;
                text-align: left;

                p {
                    color: #999;
                }
            }
        }

        .list {
            width: 375px;

            ul {
                width: 375px;
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                background-color: rgb(248, 248, 248);

                li {
                    width: 185px;
                    background-color: #fff;
                    height: 215px;
                    margin-bottom: 5px;

                    img {
                        width: 150px;
                        height: 150px;
                    }

                    p {
                        width: 100%;
                        text-align: left;
                        padding-left: 10px;
                    }

                    div {
                        width: 100%;
                        text-align: left;
                        padding-left: 10px;
                        color: #9c3232;

                    }
                }
            }
        }

        .bottom {
            width: 375px;
            height: 80px;
            // background-color: black;
            position: fixed;
            bottom: 0;
            left: 0;
            z-index: 10;
        }
 
</style>