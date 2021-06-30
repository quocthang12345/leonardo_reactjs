import React, { useEffect, useState } from 'react';
import {
    Row,
    Col,
    Card, CardImg, CardBody,
  CardTitle, CardSubtitle,
  CardHeader,
  Popover, PopoverBody
} from 'reactstrap';

import 'react-multi-carousel/lib/styles.css';

import "./ItemDetailComponent.css";

import {Link} from "react-router-dom"

import img from "../img/img";

import ItemSeen from "../../commonComponent/ItemSeen"

import Footer from "../../footerComponent/footer/FooterComponent"


export default function ItemDetailComponent({ listItem,getItem,collection}){

   

    const [activeGrid, setGird] = useState("3");

    const [searchBar, setSearchBar] = useState(false);

    const toggle = () => setSearchBar(!searchBar);

    useEffect(() => {
        getItem(collection)
    },[listItem.length])

    const typeCollection = collection !== undefined ? (collection.toLowerCase()) : ("")
    
    return(
        <Row className="m-0">
            <div className="container-item-detail">
                <Col sm="12" lg="12" className="p-0">
                    <div className="introduce-item">
                        <p className="title-introduce">Backpacks / Bags</p>
                        <p className="text-introduce">Always one of the product lines that bring great pride to Leonardo - meticulous seams, high quality fabrics and the latest fashion trends, our bags will bring you the The experience is very different.</p>
                    </div>
                </Col>
                <Col sm="12" lg="12" className="p-0">
                    <Row className="m-0 sticky-menu">
                        <Col sm="12" lg="12" className="p-0 sticky-change">
                            <div className="attribute-detail">
                                    <div className="btn-format">
                                        <button autoFocus onClick={() => {setGird("3")}}><img src={img[0]} title="4-class" alt="4-class"/></button>
                                        <button onClick={() => {setGird("6")}}><img src={img[1]} title="2-class" alt="2-class"/></button>
                                    </div>
                                    <div className="sort-item-detail" id="searchBar">
                                        <button >
                                            See More <span><img src={img[2]} title="sort" alt="sort"/></span>
                                        </button>
                                        <Popover placement="bottom" isOpen={searchBar} target="searchBar" toggle={toggle} className="display-popover-search">
                                            <PopoverBody>
                                                <div className="list-attribute-sort">
                                                    <a href="#">Characteristic</a>
                                                    <a href="#">Best Seller</a>
                                                    <a href="#">In Alphabet Order: A-Z</a>
                                                    <a href="#">In Reverse Alphabetical Order: Z-A</a>
                                                    <a href="#">Price: Low To High</a>
                                                    <a href="#">Price: High To Low</a>
                                                    <a href="#">Date: Old To New</a>
                                                    <a href="#">Date: New To Old</a>
                                                </div>
                                            </PopoverBody>
                                        </Popover>
                                    </div>
                            </div>
                        </Col>
                        <Col lg="12" sm="12" className="p-0">
                                <div className="wrapper-item-detail">
                                    <Row className="m-0" position="relative">
                                        <Col sm="12" lg="2" className="p-0">
                                            <div className="wrapper-color-detail">
                                                <div className="type-collection">
                                                    <p>Color</p>
                                                    <div>
                                                        <ul className="list-color">
                                                            <li><button className="type-color type-color-yl" type="button" name="color" title="yellow"></button></li>
                                                            <li><button className="type-color type-color-gr" type="button" name="color" title="green"></button></li>
                                                            <li><button className="type-color type-color-gra" type="button" name="color" title="gray"></button></li>
                                                            <li><button className="type-color type-color-bl" type="button" name="color" title="black"></button></li>
                                                            <li><button className="type-color type-color-blu" type="button" name="color" title="blue"></button></li>
                                                            <li><button className="type-color type-color-or" type="button" name="color" title="orange"></button></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="type-collection">
                                                    <p>Material</p>
                                                    <div>
                                                        <ul className="type-material">
                                                            <li>Cowhide</li>
                                                            <li>Skin Mill</li>
                                                            <li>Canvas Fabric</li>
                                                            <li>Oxford Fabric</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col sm="12" lg="9" className="p-0">
                                            <Row className="m-0">
                                                {
                                                    listItem[typeCollection] !== undefined ? 
                                                    (
                                                        listItem[typeCollection].map(item => {
                                                            return(
                                                                <Col sm="6" lg={activeGrid} className="p-0">
                                                                    <Card className="card-item-detail">
                                                                        <CardHeader className="card-header-item-detail">
                                                                            <Link to={`/collections/${typeCollection}/${item.anotherName}`}><CardImg top width="100%" src={`${item.imgDisplay}`} alt="display" alt="display" /></Link>
                                                                        </CardHeader>
                                                                        <CardBody className="card-body-item-detail">
                                                                            <Link to={`/collections/${typeCollection}/${item.anotherName}`}><CardTitle>{item.name}</CardTitle></Link>
                                                                            <CardSubtitle>{item.price}</CardSubtitle>
                                                                        </CardBody>
                                                                    </Card>
                                                                </Col>
                                                            )
                                                        })
                                                    ):
                                                    (
                                                        <Col sm="6" lg={activeGrid} className="p-0"></Col>
                                                    )
                                                }

                                                <Col sm="12" lg="12">
                                                    <div className="wrapper-pagination">
                                                        <div className="pagination-item">
                                                                <a href="#" className="pagi-item"><img src={img[3]} title="previous" alt="previous"/></a>                                                                    
                                                                <a href="#" autoFocus className="pagi-item" id="1">1</a>
                                                                <a href="#" className="pagi-item"  id="2">2</a>
                                                                <a href="#" className="pagi-item" id="3">3</a>
                                                                <a href="#" className="pagi-item" id="4">4</a>
                                                                <span className="pagi-item">...</span>
                                                                <a href="#" className="pagi-item" id="5">5</a>
                                                                <a href="#" className="pagi-item"><img src={img[4]} title="previous" alt="previous"/></a>
                                                        </div>
                                                    </div>
                                                </Col>                                      
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                        </Col>
                    </Row>
                </Col>


                <ItemSeen listItemDetails={listItem[typeCollection]}/>

            </div>
            <Footer />

        </Row>
    )
}