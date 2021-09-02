// import { useParams } from 'react-router-dom';
const LOAD_ByTag = 'session/LOAD_ByTag';
const LOAD_ByTitle = 'session/LOAD_ByTitle';
const LOAD_MYSPOTS = 'session/LOAD_MYSPOTS';




export const loadSpotsByTag = ( spots ) => {
    return {
        type: LOAD_ByTag,
        spots
    };
};

export const loadSpotsByTitle = ( title ) => {
    return {
        type: LOAD_ByTitle,
        title
    };
};

export const loadMySpots = ( spots ) => {
    return {
        type: LOAD_MYSPOTS,
        spots
    };
};



export const fetchMySpots = (id) => async (dispatch) => {
    const response = await fetch(`/api/spots/myspots/${id}`);
    if(response.ok){
        const spots = await response.json();
        dispatch(loadMySpots(spots));
    };
  };



export const fetchspotsByTag = (tag) => async (dispatch) => {
    const response = await fetch(`/api/spots/${tag}`);
    if(response.ok){
        const spots = await response.json();
        dispatch(loadSpotsByTag(spots));
    };
  };

  export const searchSpotsByTitle = (title) => async (dispatch) => {
      const response = await fetch(`/api/spots/search/${title}`);
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
        case LOAD_ByTitle:
            newState = Object.assign({}, state);
            newState.spots = action.spots;
            return newState;
        case LOAD_MYSPOTS:
            newState = Object.assign({}, state);
            newState.spots = action.spots;
            return newState;
        default:
            return state;
    };
};

export default fetchSpotsReducer
