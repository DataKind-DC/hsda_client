import { LOAD_DATA, DOWNLOAD_DATA, INIT_STATE } from '../actions/apiActions';

export const initialState = {
    organizations: {}
}

export default function reducerMain(state=initialState, action={}){
    switch(action.type){
        case DOWNLOAD_DATA:
            return {
                ...state,
                organizations: {
                    ...action.res
                }
            }
        case INIT_STATE:
            return {
                ...state
            }
        default:
            return state;
    }
}