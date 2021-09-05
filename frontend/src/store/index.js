import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import fetchReducer from "./fetchTest";
import sessionReducer from './session';
import spotReducer from './spot';
import fetchSpotsReducer from './spots';
import reviewReducer from './review';
import booking from "./booking"
import mapControl from "./mapControl";
import coordinates from "./locCoordinates";

const rootReducer = combineReducers({
   session: sessionReducer,
   fetch: fetchReducer,
   spot: spotReducer,
   spots: fetchSpotsReducer,
   review: reviewReducer,
   booking,
   mapControl,
   coordinates,
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
