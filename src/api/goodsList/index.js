import request from "../index"

function detailaction(data){
    return request({
        url:"goods/detailaction",
        hethod:"get",
        data
    })
}


export{
    detailaction,
}