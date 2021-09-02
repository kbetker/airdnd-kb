import { csrfFetch } from './csrf';
// import { useParams } from 'react-router-dom';
const BOOK_SPOT = 'session/BOOK_SPOT';
const BOOKED_SPOTS = 'session/BOOKED_SPOTS';
const DELETE_BOOKING = 'session/DELETE_BOOKING';



export const bookSpotFunc = ( payload ) => {
    return {
        type: BOOK_SPOT,
        payload
    };
};

export const bookedSpots = ( data ) => {
    return {
        type: BOOKED_SPOTS,
        data
    };
};

export const deltaco = ( data ) => {
    return {
        type: DELETE_BOOKING,
        data
    };
};


export const bookSpot = (payload) => async (dispatch) => {
    const response = await csrfFetch(`/api/booking/new`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(payload)

    });
    if(response.ok){
        const data = await response.json();
        dispatch(bookSpotFunc(data));
        return data
    } else {
        return response
    }
};


export const deleteBooking = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/booking/delete/${id}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
    });
    if(response.ok){
        const data = await response.json();
        dispatch(deltaco(data));
        return data
    } else {
        return response
    }
};




export const getBookedSpots = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/booking/all/${id}`);
    if(response.ok){
        const data = await response.json();
        dispatch(bookedSpots(data));
        return data

    } else {
        return response
    }
};



  const initialState = { spot: null }

  const bookingNew = (state = initialState, action) => {
    let newState;
    switch( action.type ){
        case BOOK_SPOT:
            newState = Object.assign({}, state);
            newState.spot = action.spot;
            return newState;
        case BOOKED_SPOTS:
            newState = Object.assign({}, state);
            newState.spot = action.data;
            return newState;
        case DELETE_BOOKING:
            // console.log(state, action.data.id, "In the reducer *******************************")
            newState = Object.assign({}, state);
            let newArr = newState.spot.filter(el => el.id !== parseInt(action.data.id))
            newState.spot = newArr
            return newState;
        default:
            return state;

    };
};

export default bookingNew
