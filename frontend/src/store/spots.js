// import { useParams } from 'react-router-dom';
const LOAD_ONE = 'session/LOAD_ONE';


export const loadOneSpot = ( spot ) => {
    return {
        type: LOAD_ONE,
        spot
    };
};



export const fetchSpotById = (id) => async (dispatch) => {
    const response = await fetch(`/spot/${id}`);
    if(response.ok){
        const spot = await response.json();
        dispatch(loadOneSpot(spot));
    };
  };


  const initialState = { spot: null }

  const fetchSpotByIdReducer = (state = initialState, action) => {
    let newState;
    switch( action.type ){
        case LOAD_ONE:
            newState = Object.assign({}, state);
            newState.spot = action.spot;
            return newState;
        default:
            return state;


    };
};

export default fetchSpotByIdReducer
