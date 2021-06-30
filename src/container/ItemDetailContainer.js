import { connect } from "react-redux"
import ItemDetailComponent from "../detailComponents/ItemDetailComponent/ItemDetailComponent"
import {GetItem} from "../redux/items/ItemReducer"
 
const mapStateToComponent = (store) => ({
    listItem: store.listItem
})

const mapPropsToComponent = (dispatch) => ({
    getItem:(category) => dispatch(GetItem(category))
})

export default connect(mapStateToComponent,mapPropsToComponent)(ItemDetailComponent)