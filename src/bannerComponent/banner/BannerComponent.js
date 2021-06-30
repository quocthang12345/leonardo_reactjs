import React, { useState } from 'react';
import {
    Row,
    Col,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./BannerComponent.css"

const items = [
  {
    src: 'https://via.placeholder.com/2100x620',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://via.placeholder.com/2100x620',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://via.placeholder.com/2100x620',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const BannerComponent = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }


  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="img-bounceIn"/>
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} className="fadeInUp"/>
      </CarouselItem>
    );
  });

  return (
      <Row className="m-0">
        <Col lg="12" className="p-0">
            <Carousel activeIndex={activeIndex} next={next} previous={previous} style={{height:"fit-content"}}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} className="indicator-decoration"/>
                {slides}
            </Carousel>
        </Col>
    </Row>
  );
}

export default BannerComponent;