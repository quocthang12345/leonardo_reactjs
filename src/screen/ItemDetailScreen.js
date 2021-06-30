import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from "../container/ItemDetailContainer"
import { useParams } from 'react-router';

const ItemDetailSreen = () => {
    
    let { collection } = useParams();


    return(
        <div>
            <ItemDetail collection={collection} />
        </div>
    )
}

export default ItemDetailSreen;