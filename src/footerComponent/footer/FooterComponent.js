import React, { useState,useRef, useEffect } from 'react';
import {
    Row,
    Col
} from 'reactstrap';

import "./FooterComponent.css"

export default function FooterComponent(){
    return(
        <Row>
            <Col lg="12">
            <div className="container-footer">    
                <div className="wrapper-footer">
                    <Row>
                    <Col sm="12" lg="2" xl="2" className="p-0">
                        <div className="display-information"> 
                            <ul >
                                <li><div className="title-footer">Information</div></li>
                                <li>About Us</li>
                                <li>Recruitment</li>
                                <li>Form of transportation</li>
                                <li>Shop system</li>
                                <li>Payments</li>
                                <li>Policy change</li>
                                <li>Warranty Policy</li>
                                <li>Privacy Policy</li>
                                <li>Term of Service</li>
                                <li>Refund Policy</li>
                            </ul>
                        </div>

                    </Col>
                    <Col sm="12" lg="4" xl="4" className="p-0">
                        <div className="display-information">
                            <ul className="info-branch">
                                <li><div className="title-footer">Branch</div></li>
                                <li>
                                    <p>
                                        <strong>Branch 1</strong>
                                        <span>284 Pasteur, Quận 3, HCM</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>Branch 2</strong>
                                        <span>244 Trần Hưng Đạo, Quận 1, HCM</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>Branch 3</strong>
                                        <span>513 Âu Cơ, Quận Tân Phú, HCM</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>Branch 4</strong>
                                        <span>8 Trần Quốc Toản, Hoàn Kiếm, Hà Nội </span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>Branch 5</strong>
                                        <span>198 Tôn Đức Thắng, Đống Đa, Hà Nội</span>
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        <strong>Branch 6</strong>
                                        <span>424 Trương Công Định, Phường 8, Vũng Tàu</span>
                                    </p>
                                </li>
                                <li><u>Opening Hours: 8:00AM - 21:00PM</u></li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm="12" lg="3" xl="3" className="p-0">
                        <div className="display-information">
                            <ul>
                                <li><div className="title-footer">About Us</div></li>
                                <li>Leonardo is the leading leather goods brand in Vietnam, our mission is to create products with high quality, perfect in every smallest detail.</li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm="12" lg="3" xl="3" className="p-0">
                        <div className="display-information">
                            <ul className="info-branch">
                                <li><div className="title-footer">Contact</div></li>
                                <li><strong>Hotline:</strong></li>
                                <li><span>1900 633 453</span>‬</li>
                                <li><span>090 678 8587</span> (Zalo, Viber)</li>
                                <li><strong>Email:</strong> <span>contact@leonardo.vn</span></li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm="12" lg="6">
                        <div className="text-small">Copyright ©2021 Leonardo. Công ty TNHH Leonardo. Địa chỉ: 284 Pasteur, P.8, Q.3, HCM. Mã số thuế 0314465951 cấp ngày 16/6/2017</div>
                    </Col>
                    </Row>
                </div>
            </div>  
            </Col>  
        </Row>

    )
}