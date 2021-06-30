import axios from "axios";

const ListItem = {
        card:[],
        bag:[],
        shoes:[],
        accessories:[]
}


export const GetItem = (category) => {
    const newCategory = category !== undefined ? (category.toLowerCase()) : ("");
    return dispatch => {
        axios.get(`/${newCategory}`)
        .then((res) => {
            if(newCategory === "card"){
                return dispatch({type : 'GET_CARD', payload : res.data});
            }else if(newCategory === "bag"){
                return dispatch({type : 'GET_BAG', payload : res.data});
            }else if(newCategory === "shoes"){
                return dispatch({type : 'GET_SHOES', payload : res.data});
            }else if(newCategory === "accessories"){
                return dispatch({type : 'GET_ACCESSORIES', payload : res.data});
            }
        })
        .catch((err) => {
            dispatch({type : 'FAILED', payload : err});
        });
    
    }
}


const reducer = (state = ListItem , action) => {
    switch(action.type){
        case 'GET_CARD':
            return{
                ...state,
                card: action.payload
            }
        case 'GET_BAG':
            return{
                ...state,
                bag: action.payload
            }
        case 'GET_SHOES':
            return{
                ...state,
                shoes: action.payload
            }
        case 'GET_ACCESSORIES':
            return{
                ...state,
                accessories: action.payload
            }
        case 'FAILED':
            console.log(action.payload)
        default:
            return state;
    }
}

export default reducer;