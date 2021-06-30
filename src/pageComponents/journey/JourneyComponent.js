import React, { useState,useRef, useEffect } from 'react';
import {
    Row,
    Col
} from 'reactstrap';

import "./JourneyComponent.css"

import axios from "axios";

export default function JourneyComponent(){

    const textRef = useRef();
 
    const [listJourney,setListJourney ] = useState([]);


    useEffect(() => {
        axios.get("/listJourney")
             .then(res => {
                 setListJourney(res.data);
             })
             .catch(err => console.log(err))
    },[60])

    const [changeContent,setContent] = useState(0)



    let textDescription = "description-journey animation-description"

    function animationDescription(e,index){
        setContent(index);
        if(textDescription == "description-journey animation-description"){
            textDescription = textDescription.split(" ")[0];        
        }else if(textDescription == "description-journey"){
            textDescription += " animation-description";
        }
        
    }

    useEffect(() => {
        textRef.current.focus({preventScroll: true});
        console.log(textRef.current)
    },[])




    return(
            <div>
                    <div className="wrapper-journey">
                        <div className="container-journey">
                            {
                                listJourney.length !== 0 ? 
                                (
                                    <Row className="pt-4 pb-4">
                        
                                        <Col sm="12" xs="12" lg="6" xl="6" className="img-journey"> 
                                            <img src={`/journey/${listJourney[changeContent].img}`} alt="Best Item" title="Best Item" />  
                                        </Col>
            
                                        <Col sm="12" xs="12" lg="6" xl="6" className={textDescription} id={"changeContent" + changeContent}>
                                                    <h4>{listJourney[changeContent].title}</h4>
                                                    {
                                                        listJourney[changeContent].description.map(item => {
                                                            return(
                                                                <p>{item}</p>
                                                            )
                                                        })
                                                    }
                                        </Col>
                                    </Row>
                                ):(<Row></Row>)
                            }
                            
                            <Row className="years-journey">
                                <div>
                                        <button type="button" ref={textRef} title="2014" alt="2014"  onClick={() => {animationDescription(null,0)}}>2014</button>
                                        <button type="button" title="2015 - 2016" alt="2015 - 2016" onClick={() => {animationDescription(null,1)}}>2015 - 2016</button>
                                        <button type="button" title="2017" alt="2017" onClick={() => {animationDescription(null,2)}}>2017</button>
                                        <button type="button" title="2018" alt="2018" onClick={() => {animationDescription(null,3)}}>2018</button>
                                        <button type="button" title="2019" alt="2019" onClick={() => {animationDescription(null,4)}}>2019</button>
                                </div>
                            </Row>
                        </div>
                    </div>
        </div>
    )
}