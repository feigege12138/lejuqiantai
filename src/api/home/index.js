import request from "../index"

function index(data){
    return request({
        url:"/index/index",
        hethod:"get",
        data
    })
}

export{
    index
}