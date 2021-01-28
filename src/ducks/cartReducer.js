const initialState = {
  cart: [],
};

//Action constants
const ADD_TO_CART = 'ADD_TO_CART';
const DELETE_FROM_CART = 'DELETE_FROM_CART';
// const CHECKOUT = 'CHECKOUT'

//Action creators (dispaych actions)

export function addToCart(cart) {
  return {
    type: ADD_TO_CART,
    payload: cart,
  };
}

export function deleteFromCart(cart) {
  return {
    type: DELETE_FROM_CART,
    payload: cart,
  };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };
    case DELETE_FROM_CART:
      return {
        cart: [...state.cart.filter((cart) => cart !== action.payload)],
      };
    default:
      return state;
  }
}
