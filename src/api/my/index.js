import request from "../index"

function listAction(data){
    return request({
        url:"collect/listAction",
        hethod:"get",
        data
    })
}

function submitAction(data){
    return request({
        url:"/feedback/submitAction",
        method:"post",
        data,
       
    })
}
// 获取详细地址
function detailAction(data){
    return request({
        url:"address/detailAction",
        method:"get",
        data,
       
    })
}





export{
    listAction,submitAction,detailAction
}