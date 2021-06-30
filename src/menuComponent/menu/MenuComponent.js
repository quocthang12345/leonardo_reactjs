import "./MenuComponent.css";
import { Row,Col,
  Navbar,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Modal, ModalHeader, ModalBody, ModalFooter,Button
  } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import "../../pageComponents/itembest/ItemBest.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { useEffect, useState } from "react"; 

import { event } from "jquery";





export default function MenuComponent({menu, items, GetListItemCart, DeleteItemInCart,GetListMenu}){
  
  

  const [isOpen, setIsOpen] = useState(false);

  const toggle1 = () => setIsOpen(!isOpen);


  const [dropdownOpen, setOpen] = useState({
    isDropdown:false,
    isDropdown1:false
  });


  const dropdownList1 = dropdownOpen.isDropdown1 ? "dropdown-item":"dropdown-hidden";
  
  const dropdownList = dropdownOpen.isDropdown ? "dropdown-item":"dropdown-hidden";

  const [clickOpen, setClickOpen] = useState({
    isClick : false
  })


  function openInput(e){
    e.preventDefault();
    setClickOpen({isClick: !clickOpen.isClick});
  } 


  const display = clickOpen.isClick ? "show-input":"hidden-input";

  const [modal, setModal] = useState(false);

  const [changeCountItemCart, setCount] = useState(1);

  useEffect(() => {
    GetListItemCart()
  },[items.length])

  function deleteItemCart(e,id){
    DeleteItemInCart(id)
  }

  useEffect(() => {
    GetListMenu()
  },[Object.keys(menu).length])


  // console.log(Object.keys(menu.listMenuOfMen)[0])

   return(
     <Row className="m-0">
       <Col lg="12" sm="10" className="p-0">
         <Row>
          <div className="top-menu">
                <Col lg="6" sm="7" xs="6" className="p-0">
                  <h3 class="logo-nav"><Link to="/">LEONARDO</Link></h3>
                </Col>      
                <Col lg="6" sm="5" xs="6" className="p-0">
                  <div className="sidebar-menu">
                    <input type="button" class="btn btn-default" value="Searching" onClick={openInput}/>
                    <input type="button" class="btn btn-default" value={`Cart (${items.length})`} onClick={() => setModal(!modal)}/>
                  </div>
                </Col>
          </div>      
        </Row>
       </Col>

       {
         (items.length > 0) ? (
          <Modal isOpen={modal} modalClassName="modal-show" toggle={() => setModal(!modal)}>
            <ModalHeader toggle={() => setModal(!modal)}>Cart</ModalHeader>
                <ModalBody>
                  {
                    items.map(item => {
                      return(
                      <div className="item-cart">
                        <Row>
                          <Col lg="6" className="p-0 pl-3"> 
                              <div className="img-item-best">
                                  <img src={`${item.imgDisplay}`} alt="Best Item" title="Best Item"  style={{height:180}}/>                     
                              </div>
                          </Col>
                          <Col lg="6" className="p-0">

                              <ul className="list-info-item">
                                        <li>
                                            <Link to={`/collections/tui-oxford`}><div className="mt-3 name-best-item title-item-cart">{item.name}</div></Link>
                                        </li>
                                        <li><div className="props-item-cart">Property</div></li>  
                                        <li>
                                            <p className="price-best-item"><span style={{fontSize:13}}>{item.price}</span></p> 
                                        </li>

                                        <li className="cart-calc">
                                            <div className="wrapper-count" style={{marginBottom: 0}}>
                                                <span title="decrease" alt="decrease" className="btn-change-count" onClick={() => {
                                                    if(changeCountItemCart < 2){
                                                      deleteItemCart(event,item.id)
                                                    }else{
                                                      setCount(changeCountItemCart - 1);
                                                    }
                                                }}>-</span>
                                                <input type="text" value={changeCountItemCart} className="input-count"/>
                                                <span title="increase" alt="increase" className="btn-change-count" onClick={() => {
                                                    setCount(changeCountItemCart + 1);
                                                }}>+</span>
                                            </div>
                                            <p className="text-detail text-cart"><button className="btn-delete-cart" onClick={() => {deleteItemCart(event,item.id)}}>Delete</button></p>
                                        </li>
                                </ul>
                          </Col>
                        </Row>
                      </div>
                      )
                    })
                  }
                  
                </ModalBody>
                <ModalFooter>
                  <div>
                    <textarea className="textarea-add-note" cols="45" rows="5" placeholder="Enter your note for product"></textarea>
                    <p>Transit key (if have) will be a feature when paying</p>
                  </div>
                  <Button className="btn-touch-item b-black btn-pay-cart">
                    <span>
                      PAY NOW
                    </span>
                    <span>
                      |
                    </span>
                    <span>
                      130.000₫
                    </span>
                  </Button>
                </ModalFooter>
          </Modal>
         ):(
          <Modal isOpen={modal} modalClassName="modal-show" toggle={() => setModal(!modal)}>
            <ModalHeader toggle={() => setModal(!modal)}>Cart</ModalHeader>
                <ModalBody>
                  <div className="empty-cart">
                      Empty Cart
                  </div>
                </ModalBody>
          </Modal>
         )
       }

        

       <Col lg="12" sm="2" className="p-0 m-0">
       <Navbar light expand="md" className="m-0 p-0 menu-dropdown menu">
       <NavbarToggler onClick={toggle1} />
          <Collapse isOpen={isOpen} navbar className="p-0">
              <Nav className="p-0" className="menu-bar">
                  <div className="p-0 m-0" >
                    <NavItem className="animation-link" >
                      <NavLink href="#">NEW ARRIVALS</NavLink>
                    </NavItem>
                  </div>

                  <div className="p-0 m-0" onMouseOut={() => { setOpen({ isDropdown:false }); }} onMouseOver={() => { setOpen({isDropdown:true }); }} >
                    <NavItem className="animation-link" > 
                            <NavLink href="#">MEN</NavLink> 
                    </NavItem>
                    <div className={dropdownList}>
                          <div className="item-menu">
                                  {
                                    Object.entries(menu.listMenuOfMen).map(item => {
                                      return (<ul className="list-item">
                                        {
                                        item.map((i,index) => {
                                          if(index == 0) {
                                            return <li className="title-list-item">{i}</li>
                                          }else if(index == 1){
                                            return (i.map((j,idx) => {
                                              if(idx == 4) {
                                                return <Link to={`/details/${item[0]}`}><li>{j}</li></Link>;
                                              }
                                                return <li>{j}</li>;
                                              
                                            })  
                                          )      
                                          }

                                        })
                                        }
                                        
                                      </ul>)
                                    })
                                  }
                          </div>
                    </div>
                      
                  </div>

                
                
                <div className="p-0 m-0" onMouseOut={() => { setOpen({ isDropdown1:false }); }} onMouseOver={() => { setOpen({ isDropdown1:true }); }}>
                  <NavItem className="animation-link"> 
                          <NavLink href="#">WOMEN</NavLink>                           
                  </NavItem>  
                  <div className={dropdownList1}>
                        <div className="item-menu">
                            {
                              Object.entries(menu.listMenuOfWoMen).map(item => {
                                return (<ul className="list-item">
                                  {
                                  item.map((i,index) => {
                                    if(index == 0) {
                                      return <li className="title-list-item">{i}</li>
                                    }else if(index == 1){
                                      return (i.map((j,idx) => {
                                        if(idx == 0) {
                                          return <Link to="/details"><li>{j}</li></Link>;
                                        }
                                          return <li>{j}</li>;
                                        
                                      })  
                                    )      
                                    }

                                  })
                                  }
                                  
                                </ul>)
                              })
                            }
                        </div>
                  </div>
                </div>
                
                <div className="p-0 m-0" >
                  <NavItem className="animation-link">
                    <NavLink href="#">BLOG</NavLink>
                  </NavItem> 
                </div>       
              </Nav>
          </Collapse>
          </Navbar>
       </Col>
       <Col className="p-0">
        <div class={display}>
              <input type="text" className="input-text" placeholder="Searching..." />
        </div>
       </Col>
       
     </Row>
     
   );
}