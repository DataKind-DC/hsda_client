import { createStore } from 'redux';
import reducerMain from '../reducers/dataReducer';
import { initialState } from '../reducers/dataReducer';

export default function configureStore(){
    const store = createStore(reducerMain, initialState);
    return store;
}

