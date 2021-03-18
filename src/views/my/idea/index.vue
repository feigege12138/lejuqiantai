<template>
    <div>
        <div class="Title">
            <div class="left" @click="gotop()">返回</div>
            <div class="right">不凡</div>
        </div>

        <div class="main">
            <div class="title">意见与反馈</div>
            <div class="top">

                <van-field v-model="message" rows="3" autosize label="意见" type="textarea" maxlength="150"
                    placeholder="请输入意见" show-word-limit border />
            </div>

            <div class="bottom">

                <van-field v-model="text" label="电话" placeholder="请输入手机号码"/>
            </div>
            <div class="btn">

                <van-button type="primary" size="large" @click="tijiao()">点击提交</van-button>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
    import {
        submitAction
    } from "@/api/my/index"
    export default {
        data() {
            return {
                message: '',
                text: ''
            }
        },
       
        created() {

        },
        methods: {
            tijiao() {
                var content = this.message,
                    phone = this.text,
                    name = "feigege",
                    openId = "66"
                if(this.message&&this.text!=''){
                    submitAction({
                        content,
                        phone,
                        name,
                        openId
                    }).then(res => {
                        console.log(res)
                        this.message=this.text=''
                    })
                      Toast.success('成功');
                }else{
                                        Toast.fail('失败');

                }
            },
            gotop() {
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
        margin-top: 70px;
        height: 40px;

        .title {
            height: 30px;
            line-height: 30px;
            text-align: left;
            padding-left: 10px;
        }

        .top {
            width: 360px;
            margin: 0 auto;
            border-top: 1px solid rgb(0, 0, 0, .2);
            border-bottom: 1px solid rgb(0, 0, 0, .2);

        }

        .bottom {
            border-bottom: 1px solid rgb(0, 0, 0, .2);
            width: 360px;
            margin: 0 auto;

        }

        .btn {
            width: 350px;
            margin: 50px auto;
        }
    }
</style>