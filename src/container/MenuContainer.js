import { connect } from "react-redux"
import MenuComponent from "../menuComponent/menu/MenuComponent"
import { GetListCart, DeleteItemCart } from "../redux/cart/CartReducer"
import { fetchListMenu } from "../redux/cart/MenuReducer"

const mapStateToComponent = (store) => ({
    items: store.carts.items,
    menu: store.menu
})

const mapPropsToComponent = (dispatch) => ({
    GetListItemCart: () => dispatch(GetListCart()),
    DeleteItemInCart: (id) => dispatch(DeleteItemCart(id)),
    GetListMenu: () => dispatch(fetchListMenu())
})

export default connect(mapStateToComponent,mapPropsToComponent)(MenuComponent);