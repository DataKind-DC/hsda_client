import { createStore,  combineReducers } from 'redux';
import reducerMain from '../reducers/organizationReducer';
import { initialState } from '../reducers/organizationReducer';
import { reducer as formReducer } from 'redux-form'



const rootReducer = combineReducers({
  // ...your other reducers here
    reducerMain:reducerMain,
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer
})

export default function configureStore(){
    const store = createStore(rootReducer, initialState);
    return store;
}

