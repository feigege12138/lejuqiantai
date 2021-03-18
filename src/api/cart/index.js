import request from "../index"

function cartList(data){
    return request({
        url:"cart/cartList",
        method:"get",
        data
    })
}

function addCarts(data){
    return request({
        url:"/cart/addCart",
        method:"POST",
        data,
        headers:{'Content-Type':"application/x-www-form-urlencoded"}
    })
}

// 删除
function removeCart(data){
    return request({
        url:"/cart/deleteAction",
        method:"get",
        data
    })
}
//添加收藏

function addcollect(data){
    return request({
        url:"/collect/addcollect",
        method:"post",
        data
    })
}

export{
    cartList,addCarts,removeCart,addcollect
}