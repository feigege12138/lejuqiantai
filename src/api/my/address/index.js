import request from "../../index"
//获取列表
function getListAction(data){
    return request({
        url:"address/getListAction",
        hethod:"get",
        data
    })
}
// 添加 //修改
function saveAction(data){
    return request({
        url:"address/saveAction",
        method:"post",
        data
    })
}
export{
    getListAction,saveAction
}