<template>
    <div>
      
 <div class="box">

      <div class="titlel" >
            <div class="left" @click="save()"> 返回</div>
                <div class="center">不凡</div>
        </div>
    </div>

        <input type="text" v-model.trim="iptval" @input="iptEvents()">
        <!-- 初始化界面 -->
        <div class="home" v-if="show=='home'">
            <div class="old">
                <p>历史记录</p>
                <a>删除</a>
                <div>

                    <button v-for="item in oldList">{{item.keyword}}</button>
                </div>
            </div>


            <div class="hot">

                <p>
                    热门搜索
                </p>
                <div>

                    <button v-for="item in hotList">{{item.keyword}}</button>
                </div>
            </div>
        </div>

        <!-- 搜索界面 -->
        <div class="search" v-else-if="show=='search'">
            <ul>
                <li v-for="(item,index) in searchList" :key="index">{{item.name}}</li>
            </ul>
        </div>
        <!-- 商品界面 -->
        <div class="goods" v-else-if="show=='goods'">
            <h3>商品列表</h3>
        </div>

    </div>
</template>

<script>
    import {
        indexaction,
        helperaction
    } from "../../../api/home/search/index"
    export default {
        data() {
            return {
                show: 'home',
                hotList: [],
                searchList: [],
                oldList: [],
                iptval: ''
            }
        },
        created() {
            this.init()
            this.iptval= this.$route.query.value
        },
        mounted() {

        },
        methods: {
            init() {
                indexaction({
                    openId: localStorage.getItem("openId")
                }).then(res => {
                    console.log(res)
                    this.hotList = res.hotKeywordList
                    this.oldList = res.historyData
                })
            },
            iptEvents() {
                if (this.iptval == '') {
                    this.show='home'
                    return
                }
                    this.show = 'search'
                helperaction({
                    keyword: this.iptval,
                    order: ''
                }).then(res => {
                    this.searchList = res.keywords
                    // console.log(res)
                })
            },
             save(){
      console.log(123)
      this.$router.push({
        name: 'home',
       
      })
    }
        }
    }
</script>

<style lang="scss" scoped>
div{
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
    input{
        margin-top: 60px;
    }

    .old {
        margin-top:40px;
        position: relative;
        width: 375px;
        overflow: hidden;

        a {
            position: absolute;
            right: 15px;
            top: 0;
            height: 48px;
            line-height: 48px;
        }

        p {
            position: absolute;
            left: 15px;
            top: 0;
        }

        div {
            width: 375px;
            display: flex;
            flex-wrap: wrap;
            margin-top: 30px;

            button {
                margin-left: 15px;
                margin-top: 20px;
                background-color: #fff;
                border: 1px black solid;
            }
        }

    }

    .hot {
        position: relative;
        width: 375px;
        overflow: hidden;

        p {
            position: absolute;
            left: 15px;
            top: 0;
        }

        div {
            width: 375px;
            display: flex;
            flex-wrap: wrap;
            margin-top: 30px;

            button {
                margin-left: 15px;
                margin-top: 20px;
                background-color: #fff;
                border: 1px black solid;
            }
        }

    }

    .search {
        ul {
            width: 375px;

            li {
                width: 355px;
                padding-left: 20px;
                text-align: left;
                margin-top: 30px;
                font-size: 14px;
            }
        }
    }
}
   
</style>