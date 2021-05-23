
const LOAD_USERS = 'session/LOAD_USERS';
const LOAD_ALL = 'session/LOAD_ALL';


export const loadUsers = ( list ) => {
    return {
        type: LOAD_USERS,
        list
    };
};

export const loadAll = ( list ) => {
    return {
        type: LOAD_ALL,
        list
    };
};


export const fetchUsers = () => async (dispatch) => {
    const response = await fetch('/testing');

    if(response.ok){
        const list = await response.json();
        dispatch(loadUsers(list));
    };
  };


  export const fetchAll = () => async (dispatch) => {
    const response = await fetch('/all');

    if(response.ok){
        const list = await response.json();
        dispatch(loadAll(list));
    };
  };



  const initialState = { list: null }

  const fetchReducer = (state = initialState, action) => {
    let newState;
    switch( action.type ){
        case LOAD_USERS:
            newState = Object.assign({}, state);
            newState.list = action.list;
            return newState;
        case LOAD_ALL:
            newState = Object.assign({}, state);
            newState.list = action.list;
            return newState;
        default:
            return state;


    };
};

export default fetchReducer
