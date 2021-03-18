<template>
  <div>
    <div class="head">
      <div class="title">
        <div>30天无忧退货</div>
        <div>48小时快速退款</div>
        <div>满88全国包邮</div>
      </div>
    </div>
    <div class="main">
      <!-- 购物车列表 -->
      <div class="list">
        <div class="item"  v-for="item in list" :key="item.id">
 <van-swipe-cell>
          <van-card :num="item.number" :price="item.retail_price" :desc="item.goods_name" class="goods-card"
            :thumb="item.list_pic_url" />
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button" @click="removeCarts(item.id)" />
          </template>
        </van-swipe-cell>
        </div>
       
      </div>

      <!-- 底部下单 -->
      <div class="bottom">
        <van-submit-bar :price="price" button-text="提交订单" style="margin-bottom:51px">
          <van-checkbox v-model="checked">全选</van-checkbox>

        </van-submit-bar>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    cartList,
    removeCart
  } from '@/api/cart/index';
  export default {
    data() {
      return {
        checked: false,
        list: '',
        price: 0
      }
    },
    created() {
      this.getCartList()
    },
    methods: {

      getCartList() {
        cartList({
          openId: '66'
        }).then(res => {
          console.log(res)
          this.list = res.data

        })
      },

      removeCarts(res) {
        removeCart({
          id: res
        }).then(ress => {
          console.log(ress)
      this.getCartList()

        })
        

      }
    }
  }
</script>

<style lang="scss" scoped>
.item{
  border-bottom: 1px solid rgb(0, 0, 0,.3);
  // border-top: 1px solid rgb(0, 0, 0,.3);

  margin-bottom: 5px;
}
  .head {
    width: 375px;
    height: 100%;

    .title {
      width: 375px;
      height: 45px;
      display: flex;
      justify-content: space-around;
      line-height: 45px;
      background-color: rgb(241, 239, 239);

    }
  }

  .main {
    margin-top: 50px;
    width: 375px;
    height: 100%;

    .list {
      width: 375px;
      height: 100%;

      .van-swipe-cell__wrapper {
        background-color: #fff;
        border-bottom: 1px rgb(224, 224, 224) solid;
        font-size: 12px;

        .van-card__price-integer {
          // margin-top: -30px;
          font-size: 12px;
          color: #b4282d;
        }
      }

      .van-swipe-cell {
        background-color: rgb(250, 250, 250);

      }

      .van-card__content {
        text-align: left;
      }

      .van-card {

        img {
          width: 62px;
          height: 62px;
          background-color: rgb(241, 239, 239);

        }
      }

      .goods-card {
        margin: 0;
      }

      .delete-button {
        height: 100%;
      }
    }

    .bottom {
      width: 375px;
      height: 60px;
      // background-color: black;
      position: fixed;
      bottom: 51px;
      left: 0;
    }
  }
</style>