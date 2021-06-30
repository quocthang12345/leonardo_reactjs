import React, { useState,useEffect } from 'react';
import {
    Row,
    Col,
    Button
} from 'reactstrap';

import {
    Link
  } from "react-router-dom";

import axios from "axios"

import "./ItemBest.css"



export default function ItemBest(){

    
    const [itemColor,setItemColor]= useState({
        name:"",
        price:"",
        typeColor:[{
            color:"",
            imgColor:[]
        }]
    })

    const [changeColorItemBest, setChange] = useState({})

    const [changeNumberCount, setCount] = useState(1);
    
    useEffect(() => {
        axios.get("/bag")
             .then(res => {                                  
                   const listItemColor = res.data; 
                   listItemColor.map(item => {
                       if(item.typeColor.length > 0){
                        setItemColor(item);
                        setChange({
                            colorChange: item.typeColor[0].imgColor,
                            isChange:false,
                            indexActive: 0
                        })
                       }
                   })
             })
             .catch(err => console.log(err))
    },[])





    return(
        <div className="container-item-best">
            <Row className="wrapper-item-best">
                <Col lg="12">
                    <div className="title-best-item">Hot Products</div>
                </Col>
                <Row >
                    <Col lg="6" sm="12" className="p-0">
                        <Link to={`/collections/tui-oxford`}>
                            <div className="img-item-best">
                                <img src={`${changeColorItemBest.colorChange}`} alt="Best Item" title="Best Item"/>                     
                            </div>
                       </Link>
                    </Col>
                    <Col lg="6" sm="12" className="p-0">
                        <div>
                            <ul className="list-info-item">
                                <li>
                                    <Link to={`/collections/tui-oxford`}><h3 className="mt-4 name-best-item">Túi Hộp Oxford"</h3></Link>
                                </li>
                                <li>
                                    <p className="price-best-item"><span className="text-muted"><del>260.000₫</del></span><span className="ml-3 text-danger">130.000₫</span></p> 
                                </li>
                                <li>
                                    <p className="text-color">
                                        Color: Black
                                    </p>
                                </li>   
                                <li className="display-btn-changeColor">
                                    {
                                        itemColor.typeColor.map((color,index) => {
                                        
                                            return(
                                                <div className="button-group-item-best">
                                                    {
                                                    (changeColorItemBest.indexActive === index ) ? 
                                                        (
                                                            <input type="radio" id={index + "itemBest"} name="radio" className="IsChecked" checked/> 
                                                        )
                                                        :
                                                        (
                                                            <input type="radio" id={index + "itemBest"} name="radio" />
                                                        ) 
                                                    }
                                                    <label className={color.color} for={index + "itemBest"}                                                             
                                                    onClick={() => setChange({
                                                            isChange: true,
                                                            colorChange: itemColor.typeColor[index].imgColor,
                                                            indexActive: index  
                                                        })}></label>
                                                </div>
                                                
                                            )
                                        })
                                    }
                                </li>
                                <li>
                                    <p className="text-color m-0">Count:</p>
                                </li>       
                                <li>
                                    <div className="wrapper-count">
                                        <span title="decrease" alt="decrease" className="btn-change-count" onClick={() => {
                                            if(changeNumberCount > 1){
                                                setCount(changeNumberCount - 1);
                                            }
                                        }}>-</span>
                                        <input type="text" value={changeNumberCount} className="input-count"/>
                                        <span title="increase" alt="increase" className="btn-change-count" onClick={() => {
                                            setCount(changeNumberCount + 1);
                                        }}>+</span>
                                    </div>
                                </li>
                                <li>
                                    <Button className="btn-touch-item b-white">ADD TO CART</Button>
                                </li>
                                <li>
                                    <Button className="btn-touch-item b-black">BUY FASTEST</Button>
                                </li>
                                <li>
                                    <p className="text-detail">Item Details</p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Row>
        </div>
    )
}