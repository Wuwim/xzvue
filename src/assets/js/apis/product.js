import axios from "axios"

function getDetails(lid){
    return new Promise(function(resolve){
        axios.get("/product/detail",{params:{lid}}).then(res=>{
            resolve(res.data);
        })

    })
}
function getList(obj){
    var paramsObj={
        kw:obj.kw,
        pno:obj.pno,
        pageSize:obj.pageSize,
    }
    return new Promise(function(resolve){
        axios.get("/product/list",{params:{paramsObj}}).then(res=>{
            resolve(res.data);
        })

    })
}

export{getDetails,getList}