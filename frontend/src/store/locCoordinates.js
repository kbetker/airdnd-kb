const LOAD_COORDINATES = 'session/LOAD_COORDINATES';


export const coordinateLoader = ( coordinates ) => {
    return {
        type: LOAD_COORDINATES,
        coordinates
    };
};

export const dispatchCoordinates = (coordinates) => async (dispatch) => {
        dispatch(coordinateLoader(coordinates));

  };


  const initialState = {"X": 50, "Y": 50}

  const coordinates = (state = initialState, action) => {
    let newState;
    switch( action.type ){
        case LOAD_COORDINATES:
            newState = Object.assign({}, state);
            newState = action.coordinates
            // // console.log(newState, "NEW STATE _+_+_+_+_+_+_+")
            // newState.mapControl = action.mapControl;
            // console.log(action.mapControl, "ACTION!?!?!?!?!?")
            return newState;

        default:
            return state;

    };
};

export default coordinates
