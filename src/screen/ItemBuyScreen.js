import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemBuy from "../buyComponents/itemBuy/ItemBuy"
import ItemDetail from "../screen/ItemDetailScreen"
import { useParams } from 'react-router';
import axios from "axios"


const ItemBuyScreen = () => {

    let { type,anotherName } = useParams();

    const [itemBuyDetail , setItemBuy] = useState([])


    useEffect(() => {
        if(anotherName !== null){
            axios.get(`/${type}?anotherName=${anotherName}`)
                    .then(res => {
                    let data = res.data;
                    setItemBuy(data)
                    })
                    .catch(err => console.log(err))
        } 
    },[itemBuyDetail.length])




    return(
        <div>
            {
                itemBuyDetail.length !== 0 ? (<ItemBuy itemBuy={itemBuyDetail}/>) : (<ItemDetail />)
            }
        </div>
    )
}

export default ItemBuyScreen;