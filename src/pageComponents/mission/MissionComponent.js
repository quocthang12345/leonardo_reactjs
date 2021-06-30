import React, { useState,useRef, useEffect } from 'react';
import {
    Row,
    Col
} from 'reactstrap';


import "./MissionComponent.css"

export default function MissionComponent(){
    return(
        
        <Row className="m-0">
            <Col lg="12 p-0">
                <div className="background-overlay">
                    <div className="mission-description">
                        <h6 className="title-mission">OUR MISSION</h6>
                        <p>Because we understand clearly, behind great successes are always the enthusiasm in each small condition, and that is the motto of Leonardo.</p>
                    </div>
                </div>
            </Col>


            
        </Row>
        
    )
}