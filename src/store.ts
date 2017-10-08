import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { persistStore, autoRehydrate } from 'redux-persist'

import { reducer as formReducer } from 'redux-form'

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0,
  cartItems: [],
  totalAmount: 0
}

export const actionTypes = {
  ADD: 'ADD',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  TICK: 'TICK'
}

// REDUCERS
const storeReducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, { lastUpdate: action.ts, light: !!action.light })
    case actionTypes.ADD:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case actionTypes.ADD_TO_CART:
      console.log('ADDTOCART');

      return {

        ...state,
        cartItems: [...state.cartItems, action.id],
        totalAmount: sumValues([...state.cartItems, action.id])
      }
    case actionTypes.REMOVE_FROM_CART:
      console.log('REMOVEFROMCART');

      return {

        ...state,
        cartItems: removeItem(state.cartItems, action.id),
        totalAmount: sumValues(removeItem(state.cartItems, action.id))
      }
    default: return state
  }
}

const rootReducer = combineReducers({
  storeReducer,
  form: formReducer
})

export const store = createStore(rootReducer, exampleInitialState, composeWithDevTools(applyMiddleware(thunkMiddleware), autoRehydrate()))

// ACTIONS
export const serverRenderClock = (isServer) => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

export const startClock = () => dispatch => {
  return setInterval(() => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }), 800)
}

export const addCount = () => dispatch => {
  return dispatch({ type: actionTypes.ADD })
}

export const addToCart = (id) => dispatch => {
  return dispatch({ type: actionTypes.ADD_TO_CART, id: id })
}

export const removeFromCart = (id) => dispatch => {
  return dispatch({ type: actionTypes.REMOVE_FROM_CART, id: id })
}

export const initStore = () => {
  return store
}

if (typeof self === 'object') persistStore(store)

function insertItem(array, action) {
  let newArray = array.slice();
  newArray.splice(action.index, 0, action.item);
  return newArray;
}

function removeItem(array, element) {
  return array.filter(e => e !== element);
}

function updateObjectInArray(array, action) {
  return array.map((item, index) => {
    if (index !== action.index) {
      // This isn't the item we care about - keep it as-is
      return item;
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      ...action.item
    };
  });
}

function sumValues(arr) {
  const sum = arr.length === 0
    ? 0
    : arr.map(entry => entry && typeof entry === "object" && typeof entry.price !== 'undefined' ? parseFloat(entry.price) : 0).reduce((prev, current) => prev + current);

  return sum;
}
