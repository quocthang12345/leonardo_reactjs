import axios from "axios"

const Menu = {
    listMenuOfMen:{},
    listMenuOfWoMen:{}
}



export const fetchListMenu = ()  => {
    return dispatch => {
        axios.get("menu")
        .then((res) => {
            dispatch({type : 'SET_MENU', payload : res.data});
        })
        .catch((err) => {
            dispatch({type : 'SET_MENU_FAILED', payload : err});
        });
    
    }

}


const reducer = (state = Menu ,action) => {
    switch(action.type){
        case "SET_MENU":
            return{
                ...state,
                listMenuOfMen: action.payload.listMenuOfMen,
                listMenuOfWoMen: action.payload.listMenuOfWoMen
            }
        case "SET_MENU_FAILED":
            return action.payload         
        default:
            return state;
    }
}

export default reducer;