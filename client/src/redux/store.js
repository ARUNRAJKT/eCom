import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers";  // Root reducers
import { thunk } from 'redux-thunk';


// Enable Redux DevTools Extension if available, otherwise fallback to default compose
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store with reducers and middleware (thunk)
const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
