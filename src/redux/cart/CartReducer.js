import axios from "axios"

const Cart = {
    items:[]
}

export const SetListCart = (items) => ({
    type: "SET_CART",
    payload:items
})

export const DeleteItemCart = (id) => ({
    type: "DELETE_ITEM_CART",
    payload: id
})



export const GetListCart = () => async (dispatch) => {
    const res = await axios.get("/cart")
    dispatch(SetListCart(res.data))
}


const reducer = (state = Cart ,action) => {
    switch(action.type){
        case "SET_CART":
            return{
                ...state,
                items: action.payload
            }    
        case "DELETE_ITEM_CART":
            axios.delete(`/cart/${action.payload}/`)  
            return state;     
        default:
            return state;
    }
}

export default reducer;