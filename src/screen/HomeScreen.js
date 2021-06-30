import React, {} from 'react';
import {
  Row
} from 'reactstrap';
import Banner from '../bannerComponent/banner/BannerComponent'
import Item from '../container/ItemContainer'
import ItemBest from '../pageComponents/itembest/ItemBest.js'
import JourneyComponent from '../pageComponents/journey/JourneyComponent.js'
import MissionComponent from '../pageComponents/mission/MissionComponent.js'
import FooterComponent from '../footerComponent/footer/FooterComponent'
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeScreen = () => {



  return(
    <Row className="m-0 p-0">
        <div>
          <Banner />
          <Item list={{
            numberList:1,
            category:"Bags/Briefcases",
            nextCategory:"Card Wallet",
            collection:["bag","card"]
            }}/>
          <ItemBest />
          <Item list={{
            numberList:3,
            category:"Shoes",
            nextCategory:"Accessories",
            collection:["shoes","accessories"]
            }}/>
          <Item list={{
            numberList:5,
            category:"Bags/Briefcases",
            nextCategory:"Card Wallet",
            collection:["bag","card"]
            }}/>
          <JourneyComponent />
          <Item list={{
            numberList:7,
            category:"Shoes",
            nextCategory:"Accessories",
            collection:["shoes","accessories"]
            }}/>
          <MissionComponent />
          <Item list={{
            numberList:9,
            category:"Bags/Briefcases",
            nextCategory:"Card Wallet",
            collection:["bag","card"]
            }}/>
          <FooterComponent />
        </div>
  </Row>
  );
}
export default HomeScreen;