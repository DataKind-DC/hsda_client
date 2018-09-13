import { createStore,  combineReducers } from 'redux';
import organizationReducer from '../reducers/organizationReducer';
import { initialState } from '../reducers/organizationReducer';
import { reducer as formReducer } from 'redux-form'



const rootReducer = combineReducers({
  // ...your other reducers here
        organization:organizationReducer,
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  form: formReducer
})

export default function configureStore(){
    //const initialStateReal=initialState.then(async (val) => {return(val)});
    //console.log('ireal',initialStateReal);
    const store = createStore(rootReducer);
    return store;
}

