<template>
    <div>
        <div class="Title">
            <div class="left" @click="gotop()">返回</div>
            <div class="right">不凡</div>
        </div>
        <div class="btn">
            <van-button type="primary" size="large" @click="add()">新增地址</van-button>
        </div>
        <!-- <div class="main" >

        <van-address-list v-model="chosenAddressId" :list="list" default-tag-text="默认" @add="onAdd" @edit="onEdit" />
        </div> -->
        <div class="list" style="margin-top:60px">
            <ul >
                <li v-for="item in list" :key="item.id">
                    <div class="left">
                        {{item.name}}
                    </div>
                    <div class="center">
                        <div class="top">{{item.mobile}}</div>
                        <div class="bottom">{{item.address}}</div>
                    </div>
                    <div class="right" @click="getid(item.id)">
                        <van-icon name="edit" />
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { AddressList } from 'vant';
    import {
        getListAction
    } from "../../../../src/api/my/address/index"
    export default {
        data() {
            return {
                list: [],
                chosenAddressId: ''
            }
        },
        created() {
            getListAction({
                openId: "66"
            }).then(res => {
                this.list = res.data
                console.log( this.list)
            })
        },
        methods: {
          getid(res){
              
                this.$router.push({
                name:"compile",
                query:{
                    id:res
                }
            })
          },
        gotop(){
            this.$router.go(-1)
        },
        add(){
            this.$router.push({
                name:'raise'
            })
        },
      
        },

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
    ul{


        li{
            width: 360px;
            height: 96px;
            margin: 0 auto;
            border-bottom: 1px solid rgb(0, 0, 0,.1);
            display: flex;
            justify-content:space-between ;

        }
    }
    .btn{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 375px;
    }
    
</style>