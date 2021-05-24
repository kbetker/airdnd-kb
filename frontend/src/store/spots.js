// import { useParams } from 'react-router-dom';
const LOAD_ByTag = 'session/LOAD_ByTag';


export const loadSpotsByTag = ( spots ) => {
    return {
        type: LOAD_ByTag,
        spots
    };
};



export const fetchspotsByTag = (tag) => async (dispatch) => {
    const response = await fetch(`/api/spots/${tag}`);
    if(response.ok){
        const spots = await response.json();
        dispatch(loadSpotsByTag(spots));
    };
  };


  const initialState = { spots: null }

  const fetchSpotsReducer = (state = initialState, action) => {
    let newState;
    switch( action.type ){
        case LOAD_ByTag:
            newState = Object.assign({}, state);
            newState.spots = action.spots;
            return newState;
        default:
            return state;
    };
};

export default fetchSpotsReducer
