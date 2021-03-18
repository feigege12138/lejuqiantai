<template>

  <div>
    <div class="Title">
      <div class="left" @click="gotop()">返回</div>
      <div class="right">不凡</div>
    </div>

    <div class="main">

      <van-cell-group>
        <van-field v-model="valueName" label="姓名" placeholder="请输入用户名" />
      </van-cell-group>
       <van-cell-group>
        <van-field v-model="valueNum" label="手机号" placeholder="请输入手机号" />
      </van-cell-group>

 <van-cell-group>
        <van-field v-model="valuedizhi" label="地址" placeholder="请输入地址" />
      </van-cell-group>



    </div>
    <div class="btn"><van-button type="primary" size="large" @click="baocun()">保存</van-button>
<</div>
  </div>
</template>

<script>
  import {
    detailAction
  } from "../../../../src/api/my/index"
  import { Toast } from 'vant';
  export default {
    data() {
      return {
        data: {},
        valueName:'',
        valueNum:"",
        valuedizhi:''


        
      }

    },
    created() {
      var id = this.$route.query.id
      detailAction({
        id
      }).then(res => {
        console.log(res)
        this.data = res.data
        this.valueName=this.data.name
        this.valueNum=this.data.mobile
        this.valuedizhi=this.data.address
      })
    },
    methods: {
      gotop() {
        this.$router.go(-1)
      },
      baocun(){
Toast.success('保存成功');
  this.$router.go(-1)
      }
    }
  }
</script>

<style lang="scss">
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

  .main {
    margin-top: 50px;

  }
  .btn{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 360px;
  }
</style>