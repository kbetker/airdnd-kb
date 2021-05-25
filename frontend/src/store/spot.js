import { csrfFetch } from './csrf';
// import { useParams } from 'react-router-dom';
const LOAD_ONE = 'session/LOAD_ONE';
const CREATE_SPOT = 'session/CREATE_SPOT';


export const createSpot = ( newSpot ) => {
    return {
        type: CREATE_SPOT,
        newSpot
    };
};

export const loadOneSpot = ( spot ) => {
    return {
        type: LOAD_ONE,
        spot
    };
};

// const res = await csrfFetch
// to do - change this to POST
export const postCreatedSpot = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/spot/new`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)

    });
    if(response.ok){
        const data = await response.json();
        console.log(data)
        dispatch(createSpot(data));
        return data
    }
};


export const fetchSpotById = (id) => async (dispatch) => {
    const response = await fetch(`/api/spot/${id}`);
    if(response.ok){
        const spot = await response.json();
        dispatch(loadOneSpot(spot));
    };
  };


  const initialState = { spot: null }

  const spotReducer = (state = initialState, action) => {
    let newState;
    switch( action.type ){
        case LOAD_ONE:
            newState = Object.assign({}, state);
            newState.spot = action.spot;
            return newState;
        case CREATE_SPOT:
            newState = Object.assign({}, state);
            newState.spot = action.spot;
            return newState;
        default:
            return state;

    };
};

export default spotReducer
