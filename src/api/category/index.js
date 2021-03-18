import request from "../index"
//导航栏数据
function indexaction(data){
    return request({
        url:"category/indexaction",
        hethod:"get",
        data
    })
}
// 获取导航数据
function currentaction(data){
    return request({
        url:"category/currentaction",
        hethod:"get",
        data
    })
}
//获取导航数据category/categoryNav
function categoryNav(data){
    return request({
        url:"category/categoryNav",
        hethod:"get",
        data
    })
}
//获取商品列表数据
function goodsList(data){
    return request({
        url:"goods/goodsList",
        hethod:"get",
        data
    })
}

export{
    indexaction,currentaction,categoryNav,goodsList
}




