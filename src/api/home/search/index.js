import request from "../../index"

function indexaction(data){
    return request({
        url:"/search/indexaction",
        hethod:"get",
        data
    })
}
function helperaction(data){
    return request({
        url:"/search/helperaction",
        hethod:"get",
        data
    })
}

export{
    indexaction,
    helperaction
}