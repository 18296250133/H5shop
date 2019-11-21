import {request} from './network/network.js'

export function getmultidata(options){
    return request({
        url:'/home/multidata'
    })
}