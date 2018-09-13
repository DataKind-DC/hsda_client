import { LOAD_DATA, DOWNLOAD_DATA, INIT_STATE } from '../actions/apiActions';
import axios from "axios";

// function getInitialData() {
//     return new Promise((resolve,reject) =>
//     {
//         axios.get('http://miami.open.211.hsda.api.adopta.agency/organizations/full/0A83FBB5-71A7-3A9C-2B5E-54D1B8AD8D43')
//             .then(response => {
//                 if (response.status === 200) {
//                     return (resolve(response.data))
//                 } else {
//                     console.log('fail');
//                 }
//                 //console.log('orgs', this.props.organization)
//             })
//             .catch(error => reject(error))
//     });
// };
//
//
//
// export const initialState= getInitialData().then(function(organization){
//     const initialState = {
//         organization: organization,
//     };
//     console.log(initialState.organization)
//     return(initialState)
// });



async function getInitialData() {
    try{
        const response=await axios.get('http://miami.open.211.hsda.api.adopta.agency/organizations/full/0A83FBB5-71A7-3A9C-2B5E-54D1B8AD8D43');
                if (response.status === 200) {
                    console.log('initial load',response.data);
                    return response.data;
                } else {
                    console.log('fail');
                    return {};
                }} catch(error) {
        console.log('error',error);
        return {};
    }
}

// const initialStateT= getInitialData().then(function(result){
//     return result;
// });
//
// export const initialState=initialStateT;
//
//
//
export const initialState= getInitialData().then(function(organization){
    const initialState = {
        organization: organization,
    };
    console.log(initialState.organization);
    return initialState;
});


export default function organizationReducer(state={}, action={}){
    switch(action.type){
        case DOWNLOAD_DATA:
            return {
                ...state,
                organization: {
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