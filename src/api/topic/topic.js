import request from "../index"

function index(data){
    return request({
        url:"topic/listaction",
        hethod:"get",
        data
    })
}

export{
    index
}