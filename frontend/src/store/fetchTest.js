
const LOAD_ALL = 'session/LOAD_ALL';

export const loadAll = ( list ) => {
    return {
        type: LOAD_ALL,
        list
    };
};


export const fetchAll = () => async (dispatch) => {
    const response = await fetch('/testing');

    console.log("WTFWTFWTFWTFWTFWTFWTFWTFWTF")
    if(response.ok){
        const list = await response.json();
        dispatch(loadAll(list));
    };
  };


  const initialState = { list: null }

  const fetchReducer = (state = initialState, action) => {
    let newState;
    switch( action.type ){
        case LOAD_ALL:
            newState = Object.assign({}, state);
            newState.list = action.list;
            return newState;
        default:
            return state;


    };
};

export default fetchReducer
