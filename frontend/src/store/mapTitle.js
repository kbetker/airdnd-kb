const MAP_TITLE = 'session/MAP_TITLE';


export const loadMapTitle = ( mapTitle ) => {
    return {
        type: MAP_TITLE,
        mapTitle
    };
};

export const dispatchMapTitle = (mapTitle) => async (dispatch) => {
        dispatch(loadMapTitle(mapTitle));

  };

let initialState = "Click on map to move location marker"

  const mapTitle = (state = initialState, action) => {
    let newState;
    switch( action.type ){
        case MAP_TITLE:
            newState = Object.assign({}, state);
            newState = action.mapTitle
            return newState;

        default:
            return state;

    };
};

export default mapTitle
