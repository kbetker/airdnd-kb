import { csrfFetch } from './csrf';
// import { useParams } from 'react-router-dom';
const LOAD_ONE = 'session/LOAD_ONE';
const CREATE_SPOT = 'session/CREATE_SPOT';
const EDIT_SPOT = 'session/EDIT_SPOT';




export const loadEditSpot = ( spot ) => {
    return {
        type: EDIT_SPOT,
        spot
    };
};

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




export const postCreatedSpot = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/spot/new`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)

    });
    if(response.ok){
        const data = await response.json();
        dispatch(createSpot(data));
        return data
    }
};


export const editSpot = (id, payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/spot/${id}/edit`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)

    });
    if(response.ok){
        const data = await response.json();
        dispatch(loadEditSpot(data));
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
            newState.newSpot = action.newSpot;
            return newState;
        case EDIT_SPOT:
            newState = Object.assign({}, state);
            for(let key in action.spot.response){
                newState.spot[key] =  action.spot.response[key]
            }
            return newState;

        default:
            return state;

    };
};



export default spotReducer
