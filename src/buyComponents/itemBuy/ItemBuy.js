import React, { useState,useRef, useEffect } from 'react';
import {
    Row,
    Col,
    Collapse, Button
} from 'reactstrap';
import "./ItemBuy.css";
import '../../pageComponents/itembest/ItemBest.css'
import $, { event } from 'jquery';

import axios from "axios";

import Footer from "../../footerComponent/footer/FooterComponent"



export default function ItemBuy(props){

    const [isOpen, setIsOpen] = useState({
        isExpandItem1:false,
        isExpandItem2:false,
    });


      const [changeColorItemBest, setChange] = useState({
        colorChange: "",
        isChange:false,
        indexActive: 0
    })

    


    $(document).ready(function(){
            $(window).on('scroll',function(){
          
              var link = $('.btn-product-buy a');
              var top = $(window).scrollTop();
          
              $('.width-product-buy img').each(function(){
                var id = $(this).attr('id');
                var height = $(this).height();
                var offset = $(this).offset().top - 150;
                if(top >= offset && top < offset + height){
                  link.removeClass('active-buy');
                  $('.btn-product-buy').find('[data-scroll="' + id + '"]').addClass('active-buy');
                }
              });
          
            });
    })

    function addToCart(e,item){
        axios.post("/cart",item)
             .then(res => { console.log("OKE")})
             .catch(err => { console.log(err)})
    }

    return(
        <div className="container-product-buy">
            <Row>
                <Col sm="12" lg="6">
                    <div style={{height: "100%", width: "fit-content", float: "right",position: "relative"}}>
                        <div className="width-product-buy">
                            {
                                props.itemBuy[0].listImg.length !== 0 ? (
                                    props.itemBuy[0].listImg.map((item,index) => {
                                        return(
                                            <img id={`img${index}`} src={`/bags/tui7/${item}`} alt={`item-${index}`} title={`item-${index}`}/>
                                        )
                                    })
                                    ):(
                                        <div></div>
                                    )
                            }
                            <div className="wrapper-product-aside">
                                <div className="product-aside">
                                    <button onClick={() => {setIsOpen({
                                        ...isOpen,
                                        isExpandItem1: !isOpen.isExpandItem1
                                    })}}>
                                        <div className="display-product-service">
                                            Warranty Policy
                                            {
                                                isOpen.isExpandItem1 ? (<span className="icon-collapse icon-expand"></span>) : (<span className="icon-collapse icon-close"></span>)
                                            }
                                        </div>
                                        <Collapse isOpen={isOpen.isExpandItem1}>
                                            <div className="text-description-product">
                                                <div className="mt-5 mb-5">
                                                    <p><strong>Leonardo</strong> products are covered by a warranty for glue and thread (no leather warranty) from 1 year to 2 product years.</p>
                                                </div>
                                                <div className="text-part">
                                                    <h3><strong>I. The reason for not warranty skin</strong></h3>
                                                    <p><strong>Leonardo</strong> allows customers to check products before paying (for customers who buy COD online), 
                                                    and exchange products within 7 days. Leather surface Leonardo leather does not warrant because we have no control over the physical impact during use on the skin surface, 
                                                    for example, the product is affected by a hard, sharp object or is contaminated with water ... guests sympathize.</p>
                                                </div>
                                                <div className="text-part">
                                                    <h3><strong>II. The cases are not covered by the warranty:</strong></h3>
                                                    <ol>
                                                        <li>The skin surface is scratched by a sharp object, damaged by external physical impact.</li>
                                                        <li>The product is contaminated with water.</li>
                                                        <li>Self cause damage, scratch the product.</li>
                                                        <li>Product warranty period has expired.</li>
                                                    </ol>
                                                </div>
                                                <div className="text-part">
                                                    <h3><strong>III. Warranty process:</strong></h3>
                                                    <div>
                                                        <h5><strong>- Step 1:</strong></h5>
                                                        <p>You call hotline 1900 633 453, or facebook inbox for us to check products covered under warranty and warranty period.</p>
                                                        <p>Link inbox: http://m.me/leonardo.com.vn</p>
                                                        <p>Customers can bring products directly to the store system to be checked and processed directly.</p>
                                                    </div>
                                                    <div>
                                                        <h5><strong>- Step 2:</strong></h5>
                                                        <p>If warranted, staff will guide you through the warranty procedures:</p>
                                                        <p><strong>+ Store:</strong> will be handled and exchanged directly at the store. You will be sent a receipt stating that we receive warranty products. Please keep the receipt to receive the product back after the warranty is complete.</p>
                                                        <p><strong>+ Online:</strong> Please send the product with the information form (Product error requires warranty + Name + Phone number +…). When we receive the goods, we will call back to confirm the information, report the expected time to return the product after the warranty for you.</p>
                                                        <p>Address to receive warranty products: <strong>60/10/17 Lam Van Ben, Tan Kieng Ward, District 7, City. HCM City</strong></p>
                                                    </div>
                                                    <div>
                                                        <h5><strong>- Step 3:</strong></h5>
                                                        <p>After the warranty is complete, our staff will call to contact customers. You can go to the store to receive the product or we will ship it to you.</p>
                                                        <p><strong>Any questions you can contact us directly:</strong></p>
                                                        <p>Hotline:</p>
                                                        <p>1900 633 453‬</p>
                                                        <p>090 678 8587 (Zalo, Viber)</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Collapse>
                                    </button>
                                    
                                    <button onClick={() => {setIsOpen({
                                        ...isOpen,
                                        isExpandItem2: !isOpen.isExpandItem2
                                    })}}>
                                        <div className="display-product-service">
                                            Form of Transportation
                                            {
                                                isOpen.isExpandItem2 ? (<span className="icon-collapse icon-expand"></span>) : (<span className="icon-collapse icon-close"></span>)
                                            }
                                        </div>
                                        <Collapse isOpen={isOpen.isExpandItem2}>
                                        <div className="text-description-product">
                                                <div className="mt-5 mb-5">
                                                    <p><strong>Leonardo</strong> always aims to provide the best shipping service with a competitive fee for all orders that you place with us. We support nationwide delivery with a specific delivery policy as follows:</p>
                                                </div>
                                                <div className="text-part">
                                                    <h5><strong>1. HOUSEHOLD DELIVERY Fees:</strong></h5>
                                                    <p>LEONARDO applies a new delivery fee according to the fee schedule below for all orders successfully placed as of September 25, 2017.</p>
                                                    <p>TP.HCM and TP. Ha Noi: 20,000 - 30,000 VND</p>
                                                    <p>Other Provinces: 30,000 - 50,000 VND (depending on geography and product volume)</p>

                                                </div>
                                                <div className="text-part">
                                                    <h5><strong>2. DELIVERY TIME:</strong></h5>
                                                    <div>
                                                        <p><strong>LEONARDO</strong> will ship the goods within the agreed time when you fulfill the ordering procedure. Delivery time usually takes at least 1-5 working days (not including Saturday, Sunday or public holidays) depending on the destination.</p>
                                                        <p>Delivery time: delivered in daily working time. (8:00 - 17:00). If you have request for delivery, please inform and agree in advance with us before shipping.</p>
                                                        <p>In the event that you choose to transfer via bank or credit card, the processing time of your order will be calculated from when LEONARDO receives your completed payment.</p>
                                                        <p>Please note that LEONARDO reserves the right to change the delivery time without prior notice in the event of the impact of natural disasters or other special events.</p>
                                                        <p>Your order will be delivered in maximum 2 times (in case of unsuccessful delivery the first time, there will be contact staff to arrange the 2nd delivery with you. We will try to contact you again) In the next 2 working days (via SMS or direct call), in case you still cannot contact again or do not receive any response from the customer, the order will be invalid).</p>
                                                        <p>If after 2 unsuccessful delivery, your order will be kept at the LEONARDO Forwarding Center or the courier company's office for the next 2 working days for you to pick up - shipping fee (if Yes) in this case it will not be deducted from the payment value of the order. Past this time, the order will no longer be valid.</p>
                                                        <p>To check your information or order status, please use the Phone Number of your order and check with customer service.</p>
                                                        <p>When the goods are delivered to the customer, please complete the payment and sign for confirmation with the delivery staff after checking the correct product, correct price ordered.</p>
                                                        <p>Wrong products, incorrect products, wrong prices ... as ordered, please call hotline <strong>1900 633 453 or 090 678 8587 (Zalo, Viber)</strong> for immediate assistance.</p>
                                                        <p><strong>Please contact us immediately on hotline 1900 633 453 or 090 678 8587 (Zalo, Viber) when you have any problems about delivery.</strong></p>

                                                    </div>
                                                </div>
                                            </div>
                                        </Collapse>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="btn-product-buy" style={{marginBottom: 30}}>
                            {
                                props.itemBuy[0].listImg.map((item,idx) => {
                                    return(
                                        <a href={`#img${idx}`} id={`btn-img${idx}`} data-scroll={`img${idx}`}></a>
                                    )
                                })
                            }
                        </div>                      
                    </div>
                    
                </Col>
                <Col sm="12" lg="6">
                    <div className="wrapper-detail-product">
                        <div className="position-product-fixed">
                            <div className="detail-product">
                                <ul className="list-info-item" style={{position: "sticky",top: "0"}}>
                                    <li>
                                        <h3 className="mt-4 name-best-item">{props.itemBuy[0].name}</h3>
                                    </li>
                                    <li>
                                        <p className="price-best-item"><span className="text-muted"><del>{props.itemBuy[0].price}</del></span><span className="ml-3 text-danger">130.000₫</span></p> 
                                    </li>
                                    <li>
        
                                        <p className="text-color">
                                            Color: Black
                                        </p>
                                    </li>   
                                    <li className="display-btn-changeColor">
                                        {
                                            props.itemBuy[0].typeColor.length !== 0 ? (
                                                props.itemBuy[0].typeColor.map((color,index) => {
                                                    
                                                    return(
                                                        <div className="button-group-item-best">
                                                            {
                                                            (changeColorItemBest.indexActive === index ) ? 
                                                                (
                                                                    <input type="radio" id={index + "itemBest"} name="radio" checked autoFocus/> 
                                                                )
                                                                :
                                                                (
                                                                    <input type="radio" id={index + "itemBest"} name="radio" />
                                                                ) 
                                                            }
                                                            <label className={color.color} for={index + "itemBest"}></label>
                                                        </div>
                                                        
                                                    )
                                                })
                                            ):(
                                                <div></div>
                                            )
                                        }
                                    </li>     
                                    <li>
                                        <Button className="btn-touch-item b-black" style={{width: "100%"}} onClick={() => { addToCart(event,props.itemBuy[0])}}>ADD TO CART</Button>
                                    </li>
                                    <li>
                                        <p>With a design that breathes modern fashion, Zumba cross-straps backpack was born. The product is an intersection between backpack and small cross pocket.</p>
                                    </li>
                                    <li>
                                        <ul>
                                            <li>Material: 100% Polyester</li>
                                            <li>Dimensions: 7 x 17 x 27 cm</li>
                                            <li>Be contain Ipad Pro 10.5 inch</li>
                                            <li>1 large compartment, 1 small inner compartment, 2 outer compartments</li>
                                            <li>2 side compartments</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col>
                </Col>
            </Row>
            <div style={{marginTop: 250}}>
            <Footer />
            </div>
        </div>
        
    );
}