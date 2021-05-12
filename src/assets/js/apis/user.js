import {axios} from "../config.js"

function Login(user){
    return new Promise(function(resolve,reject){
        axios.post("/user/login",user).then(result=>{
            resolve(result.data);
        })
    })
}

function Logout(){
    return new Promise(function(resolve,reject){
        axios.get("/user/logout",user).then(result=>{
            resolve(result.data);
        })
    })
}

function getUserSeesionData(){
    return new Promise(function(resolve,reject){
        axios.get("/user/sessiondata",user).then(result=>{
            resolve(result.data);
        })
    })
}

export{Login,Logout,getUserSeesionData}