import {newnet} from './network.js'


export function getdetailById(iid){
    return newnet({
        url:'/detail',
        params:{
            iid
        }

    })
}


export class Goods{
    constructor(itemInfo,columns,service){
        this.desc=itemInfo.desc;
        this.price=itemInfo.price;
        this.oldPrice=itemInfo.oldPrice;
        this.discount=itemInfo.discountDesc;
        this.columns=columns;
        this.service=service;
    }
}