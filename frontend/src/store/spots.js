// import { useParams } from 'react-router-dom';
import { csrfFetch } from './csrf';

const LOAD_ByTag = 'session/LOAD_ByTag';
const LOAD_ByTitle = 'session/LOAD_ByTitle';
const LOAD_MYSPOTS = 'session/LOAD_MYSPOTS';
const DELETE_SPOT = 'session/DELETE_SPOT';
const LOAD_SEARCH = 'session/LOAD_SEARCH';


export const loadBySearch = ( spots ) => {
    return {
        type: LOAD_SEARCH,
        spots
    };
};


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

export const deleteSpotLoader = ( spot ) => {
    return {
        type: DELETE_SPOT,
        spot
    };
};

export const deleteMySpot = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/spot/${id}/delete`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    });
    if(response.ok){
        const data = await response.json();
        dispatch(deleteSpotLoader(data));
        return data
    } else {
        return response
    }
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
        dispatch(loadBySearch(spots));
    };
  };


  const initialState = { spots: null }

  const fetchSpotsReducer = (state = initialState, action) => {
    let newState;
    switch( action.type ){
        case LOAD_ByTag:
            newState = Object.assign({}, state);
            newState = action.spots;
            return newState;
        case LOAD_ByTitle:
            newState = Object.assign({}, state);
            newState= action.spots;
            return newState;
        case LOAD_SEARCH:
            newState = Object.assign({}, state);
            newState = action.spots;
            return newState;
        case LOAD_MYSPOTS:
            newState = Object.assign({}, state);
            newState.spots = action.spots;
            return newState;
        case DELETE_SPOT:
            newState = Object.assign({}, state);
            let newArr = newState.spots.filter(el => el.id !== parseInt(action.spot.id))
            newState.spots = newArr
            // newState.newSpot = action.newSpot;
            return newState;
        default:
            return state;
    };
};

export default fetchSpotsReducer
