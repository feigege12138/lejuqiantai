import request from "../../index"

function detailaction(data){
    return request({
        url:"/brand/detailaction",
        hethod:"get",
        data
    })
}
function listaction(data){
    return request({
        url:"/brand/listaction",
        hethod:"get",
        data
    })
}


export{
    detailaction,
    listaction
}