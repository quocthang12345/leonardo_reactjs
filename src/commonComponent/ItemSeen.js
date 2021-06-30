import React from "react"
import "../detailComponents/ItemDetailComponent/ItemDetailComponent.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Link} from "react-router-dom"
import {
    Row,
    Col,
    Card, CardImg, CardBody,
  CardTitle, CardSubtitle,
  CardHeader,
  Popover, PopoverBody
} from 'reactstrap';

export default function ItemSeen({ listItemDetails }){


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return(
        <Col sm="12" lg="12" className="p-0">
                    <div className="container-item-seen">
                        <div className="title-item-seen">VIEWED PRODUCTS</div>
                            <div className="wrapper-item-seen">
                                
                                    <Carousel responsive={responsive}>
                                    {
                                        listItemDetails !== undefined ? (
                                            listItemDetails.map((item,index) => {
                                                    return(
                                                        <div>
                                                            <Card className="card-item-detail margin-carousel">
                                                                <CardHeader className="card-header-item-detail">
                                                                    <Link to={`/collections/${item.anotherName}`}><CardImg top width="100%" src={`${item.imgDisplay}`} alt="display" alt="display" /></Link>
                                                                </CardHeader>
                                                                <CardBody className="card-body-item-detail">
                                                                    <Link to={`/collections/${item.anotherName}`}><CardTitle>{item.name}</CardTitle></Link>
                                                                    <CardSubtitle>{item.price}</CardSubtitle>
                                                                </CardBody>
                                                            </Card>
                                                        </div>
                                                                                    
                                                    )
                                            })
                                        ):
                                        (<div></div>)
                                    }
                                    </Carousel>
                            </div>
                    </div>                    
                </Col>
    );
}