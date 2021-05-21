import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';
const ADD_USER = 'session/addUser';

const setUser = ( user ) => {
    return {
        type: SET_USER,
        user
    };
};

const addUser = ( user ) => {
    return {
        type: ADD_USER,
        user
    };
};

const removeUser = () => {
    return {
        type: REMOVE_USER,
    };
};


export const logout = () => async (dispatch) => {
    const response = await csrfFetch('/api/session', {
      method: 'DELETE',
    });
    dispatch(removeUser());
    return response;
  };

export const signup = ( user ) => async (dispatch) => {
    const { username, email, password } = user;
    const res = await csrfFetch("/api/users", {
        method: "POST",
        body: JSON.stringify({
          username,
          email,
          password,
        }),
    });
    const data = await res.json();
    dispatch(addUser(data.user));
    return res;

}

export const restore = () => async dispatch => {
    const res = await csrfFetch('/api/session');
    const data = await res.json();
    dispatch(setUser(data.user));
    return res;
  };



export const login = (user) => async (dispatch) => {
    const {credential, password} = user;
    const res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({ credential, password })
    });
    const data = await res.json();
    dispatch(setUser(data.user));
    return res;
}

const initialState = { user: null }

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch( action.type ){
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.user;
            return newState;
        case REMOVE_USER:
             newState = Object.assign({}, state);
             newState.user = null;
             return newState;
        case ADD_USER:
            newState = Object.assign({}, state);
            newState.user = action.user;
            return newState;
        default:
            return state;


    };
};

export default sessionReducer
