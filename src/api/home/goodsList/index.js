import request from "../../index"
function goodsList(data){
    return request({
        url:"/goods/goodsList",
        hethod:"get",
        data
    })
}
function goodsList2(data){
    return request({
        url:"/goods/goodsList",
        hethod:"get",
        data
    })
}
export{
    goodsList,goodsList2
}