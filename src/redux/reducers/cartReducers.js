import * as cartTypes from './cartType';

const INIT_STATE = {
    products: [
        {
            id: 1,
            title: "test",
            description: "NASDS",
            price: 12312,
            image: "../../images/apple-64.png"
        }
    ],
    cart: [],
    currentItem: null,
};

const shopReducer = (state = INIT_STATE, action) => {

    switch(action.type){
        case cartTypes.ADD_TO_CART:
            return{};
        case cartTypes.REMOVE_TO_CART:
            return{};
        case cartTypes.ADJUST_QTY:
            return{};
        case cartTypes.LOAD_ITEM:
            return{};
        default:
            return state;
    }
};

export default shopReducer;