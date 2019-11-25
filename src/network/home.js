import {request,newnet} from './network'

export function getmultidata(){
    return request({
        url:'/home/multidata'
    })
}

export function getmultidata2(){
    return newnet({
        url:'/home/multidata'
    })
}

export function getcategory(type,page){
    return newnet({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}