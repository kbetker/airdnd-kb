const MAP_CONTROL = 'session/MAP_CONTROL';


export const loadMapControl = ( mapControl ) => {
    return {
        type: MAP_CONTROL,
        mapControl
    };
};

export const dispatchMapControl = (mapControl) => async (dispatch) => {
        dispatch(loadMapControl(mapControl));

  };


  const initialState = {
      scale: 1,
      mapX: 0,
      mapY: 0,
      offsetX: 0,
      offsetY: 0,
      fontSize: 12,
      padding: 5,
      shadowX: 5,
      shadowY: 5,
      shadowBlur: 9,
      maxMapX: 0,
      maxMapY: -200,
      minMapX: 0,
      minMapY: 0,
    }

  const mapControl = (state = initialState, action) => {
    let newState;
    switch( action.type ){
        case MAP_CONTROL:
            // newState = Object.assign({}, state);
            // // console.log(newState, "NEW STATE _+_+_+_+_+_+_+")
            // newState.mapControl = action.mapControl;
            // console.log(action.mapControl, "ACTION!?!?!?!?!?")
            return action.mapControl;

        default:
            return state;

    };
};

export default mapControl
