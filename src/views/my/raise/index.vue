<template>
    <div>
        <h3>新增地址123</h3>
    </div>
</template>

<script>
    import {
        saveAction
    } from "../../../../src/api/my/address/index"
    export default {
        data() {
            return {
                address: 'EQWEQWE',
                addressId: 118,
                checked:false,
                detailadress: '123',
                openId: 66,
                telNumber: 1388888888,
                userName: 'DADAD'
            }
        },
        created() {
            var address = this.address,
                addressId = this.addressId,
                checked = this.checked,
                detailadress = this.detailadress,
                openId = this.openId,
                telNumber = this.telNumber,
                userName = this.userName;
                console.log(addressId);
                
            saveAction({
                address,
                addressId,  
                checked, 
                detailadress, 
                openId, 
                telNumber,  
                userName,  
            }).then(res => {
                console.log(res)
            })
        }
    }
</script>

<style>

</style>