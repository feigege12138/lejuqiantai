import request from "../../index"

function detailaction(data){
    return request({
        url:"topic/detailaction",
        hethod:"get",
        data
    })
}

export{
    detailaction
}