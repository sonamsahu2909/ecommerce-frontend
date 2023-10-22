import{createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import{composeWithDevTools} from 'redux-devtools-extension';
import { categoryReducer } from './reducers/CategoryReducer';
import { productReducer } from './reducers/ProductReducer';

const reducer = combineReducers({
    cat:categoryReducer,
    pro:productReducer
})

let intialState = {

}

// create store
const store = createStore(
    reducer,
    intialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
  export default store;