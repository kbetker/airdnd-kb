import { csrfFetch } from './csrf';
// import { useParams } from 'react-router-dom';
const ADD_REVIEW = 'session/ADD_REVIEW';


export const addReview = ( newReview ) => {
    return {
        type: ADD_REVIEW,
        newReview
    };
};



export const postReview = (payload) => async (dispatch) => {
    console.log("PrePost")
    const response = await csrfFetch(`/api/spot/review/new`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)

    });
    console.log("PostPost")
    if(response.ok){
        const data = await response.json();
        console.log(data) // data is the appopriate Object
        dispatch(addReview(data));
        return data
    }
};



  const initialState = { spot: null }

  const reviewReducer = (state = initialState, action) => {
    let newState;
    switch( action.type ){
        case ADD_REVIEW:
            newState = Object.assign({}, state);
            newState.newReview = action.newReview;
            return newState;
        default:
            return state;

    };
};

export default reviewReducer
