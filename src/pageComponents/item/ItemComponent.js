import React, { useEffect, useState,useRef } from 'react';
import {
    Row,
    Col,
    Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

import {
    Link
  } from "react-router-dom";

import "./ItemComponent.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import { event } from 'jquery';


export default function ItemComponent({listItem,list,getItem}){


    const [activeCategory, setCategory] = useState({
        category1:true,
        category2:false
    });


    const[Slide, setSlide] = useState({
        isSlide:false
    })


    const[isChangeImg, setChangeImg] = useState({
        isChange: "",
        indexActive: -1
    })

    const[isClickChange, setClickChange] = useState({
        isClick: true,
        isIndexActive : 0
    });

    const[isActive, setActive] = useState({
        listItem1 : false,
        listItem2 : true
    });

    function changeListItem(e,id ,nextId){
        var classChange = document.getElementById(id);
        var classNextChange = document.getElementById(nextId);
        if(classChange.className == "disable-show" && classNextChange.className == "wrapper-list-item"){
            classChange.classList.replace("disable-show","wrapper-list-item")    
            classNextChange.classList.replace("wrapper-list-item","disable-show") 
        }

        classChange.classList.replace("wrapper-list-item","display-hidden")
        setTimeout(() => {
            classChange.classList.replace("display-hidden","disable-show");
            classNextChange.classList.replace("disable-show","wrapper-list-item")
        },500);

    }


    useEffect(() => {
        getItem(list.collection[0])
        getItem(list.collection[1])
    },[listItem.length])

    console.log(list.collection)

    const typeCollection1 = list.collection[0] !== undefined ? (list.collection[0].toLowerCase()) : ("")

    const typeCollection2 = list.collection[1] !== undefined ? (list.collection[1].toLowerCase()) : ("")



    return(
        <Row className="m-0"> 
            <Col className="p-0">
                <section className="section-spacing">
                    <div className="title-list-item">
                        <Row>
                            <Col xl="12">
                                <div className="small-title">Collection</div>
                            </Col>
                            <Col xl="12">
                                <div className="main-title">
                                        <button className={
                                            activeCategory.category1 ? ("btn btn-default IsActive") : ("btn btn-default")
                                        } onClick={() => {    
                                            if(isActive.listItem1){
                                                changeListItem(event,`list-${list.numberList + 1}`,`list-${list.numberList}`)
                                                setActive({
                                                    listItem1 : false,
                                                    listItem2 : true
                                                })
                                                setCategory({
                                                    category1:true,
                                                    category2: false
                                                })
                                            }
                                            }}>{list.category}</button>
                                        <button className={
                                            activeCategory.category2 ? ("btn btn-default IsActive") : ("btn btn-default")
                                        } onClick={() =>{
                                            if(isActive.listItem2){
                                                changeListItem(event,`list-${list.numberList}`,`list-${list.numberList + 1}`)
                                                setActive({
                                                    listItem1 : true,
                                                    listItem2 : false
                                                })
                                                setCategory({
                                                    category1:false,
                                                    category2: true
                                                })
                                            }
                                        }}>{list.nextCategory}</button>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="wrapper-list-item"  id={`list-${list.numberList}`}>
                        <Row>
                            {
                                listItem[typeCollection1].map((item,index) => {
                                    return(
                                        <Col lg="3" sm="6" className="card-spacing">
                                            <Card className="card-style">
                                                {
                                                    (isClickChange.isClick && item.typeColor.length > 0) ? (<Link to={`/collections/${item.type}/${item.anotherName}`}><CardImg top width="100%" src={`${item.typeColor[isClickChange.isIndexActive].imgColor}`} onMouseOver={() => setChangeImg({isChange: item.imgContinue,indexActive:index})} onMouseOut={() => setChangeImg({isChange: item.imgDisplay,indexActive:index})} /></Link>)
                                                    :(
                                                    (isChangeImg.indexActive === index) ? (
                                                        <Link to={`/collections/${item.type}/${item.anotherName}`}><CardImg top width="100%" src={`${isChangeImg.isChange}`} onMouseOver={() => setChangeImg({isChange: item.imgContinue,indexActive:index})} onMouseOut={() => setChangeImg({isChange: item.imgDisplay,indexActive:index})} /></Link>
                                                     ) : ( 
                                                         (item.typeColor.length > 0) ? (<CardImg top width="100%" src={`${item.typeColor[isClickChange.isIndexActive].imgColor}`} onMouseOver={() => setChangeImg({isChange: item.imgContinue,indexActive:index})} onMouseOut={() => setChangeImg({isChange: item.imgDisplay,indexActive:index})} />):
                                                        (<Link to={`/collections/${item.type}/${item.anotherName}`}><CardImg top width="100%" src={`${item.imgDisplay}`} onMouseOver={() => setChangeImg({isChange: item.imgContinue,indexActive:index})} onMouseOut={() => setChangeImg({isChange: item.imgDisplay,indexActive:index})} /></Link>)
                                                     )
                                                    )

                                                }
                                                
                                                <CardBody className="title-price-style"> 
                                                <Link to={`/collections/${item.type}/${item.anotherName}`}><CardTitle tag="h6">{item.name}</CardTitle></Link>

                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{item.price}</CardSubtitle>

                                                    {
                                                        item.typeColor.length !== 0 ? (
                                                        <div className="btn-change-color"> 
                                                            {
                                                                item.typeColor.map((itemColor,index) => {
                                                                    return (
                                                                    <div className="button-group">  
                                                                    {
                                                                        (itemColor.imgColor === item.imgDisplay) ? (<input type="radio" name="radio" id={index} checked/>) : (<input type="radio" name="radio" id={index}/>)
                                                                    }                                                                   
                                                                        <label className={itemColor.color} title={itemColor.color} onClick={() => setClickChange({isClick : isClickChange.isClick, isIndexActive: index})} for={index}></label> 
                                                                    </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        )  :  (<div></div>)
                                                    }    
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    </div>
                    <div className="disable-show" id={`list-${list.numberList + 1}`}>
                    <Row>
                            {
                                listItem[typeCollection2].map((item,index) => {
                                    return(
                                        <Col lg="3" sm="6" className="card-spacing">
                                            <Card className="card-style">
                                                {
                                                    (isClickChange.isClick && item.typeColor.length > 0) ? (<Link to={`/collections/${item.type}/${item.anotherName}`}><CardImg top width="100%" src={`${item.typeColor[isClickChange.isIndexActive].imgColor}`} onMouseOver={() => setChangeImg({isChange: item.imgContinue,indexActive:index})} onMouseOut={() => setChangeImg({isChange: item.imgDisplay,indexActive:index})} /></Link>)
                                                    :(
                                                    (isChangeImg.indexActive === index) ? (
                                                        <Link to={`/collections/${item.type}/${item.anotherName}`}><CardImg top width="100%" src={`${isChangeImg.isChange}`} onMouseOver={() => setChangeImg({isChange: item.imgContinue,indexActive:index})} onMouseOut={() => setChangeImg({isChange: item.imgDisplay,indexActive:index})} /></Link>
                                                     ) : ( 
                                                         (item.typeColor.length > 0) ? (<Link to={`/collections/${item.anotherName}`}><CardImg top width="100%" src={`${item.typeColor[isClickChange.isIndexActive].imgColor}`} onMouseOver={() => setChangeImg({isChange: item.imgContinue,indexActive:index})} onMouseOut={() => setChangeImg({isChange: item.imgDisplay,indexActive:index})} /></Link>):
                                                        (<Link to={`/collections/${item.type}/${item.anotherName}`}><CardImg top width="100%" src={`${item.imgDisplay}`} onMouseOver={() => setChangeImg({isChange: item.imgContinue,indexActive:index})} onMouseOut={() => setChangeImg({isChange: item.imgDisplay,indexActive:index})} /></Link>)
                                                     )
                                                    )

                                                }
                                                
                                                <CardBody className="title-price-style"> 
                                                <Link to={`/collections/${item.type}/${item.anotherName}`}><CardTitle tag="h6">{item.name}</CardTitle></Link>

                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{item.price}</CardSubtitle>

                                                    {
                                                        item.typeColor.length !== 0 ? (
                                                        <div className="btn-change-color"> 
                                                            {
                                                                item.typeColor.map((itemColor,index) => {
                                                                    return (
                                                                    <div className="button-group">  
                                                                    {
                                                                        (itemColor.imgColor === item.imgDisplay) ? (<input type="radio" name="radio" id={index} checked/>) : (<input type="radio" name="radio" id={index}/>)
                                                                    }                                                                   
                                                                        <label className={itemColor.color} title={itemColor.color} onClick={() => setClickChange({isClick : isClickChange.isClick, isIndexActive: index})} for={index}></label> 
                                                                    </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                        )  :  (<div></div>)
                                                    }    
                                                </CardBody>
                                            </Card>
                                        </Col>
                                    );
                                })
                            }
                        </Row>
                    </div>
                    <div className="button-all">
                        <Row>
                            <input type="button" className={Slide.isSlide ? ("btn btn-default slide-style") : ("btn btn-default see-all-style")} value="See All" onMouseOver={() => {setSlide({ isSlide: true})}} onMouseOut={() => {setSlide({ isSlide: false})}}/>
                        </Row>
                    </div>
                </section>
            </Col>
        </Row>
        
    );
}