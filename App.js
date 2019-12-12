import React from "react";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import report from "./store/reducers/report";
import ButtonsNav from "./navigation/buttonsNavigation";
import ReduxThunk from "redux-thunk";
import { reduxFirestore, getFirestore , firestoreReducer } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebaseConfig from "./firebase";
import authReducer from "./store/reducers/auth"
import { composeWithDevTools } from 'redux-devtools-extension'
import FullMapp from "./components/FullMapPreview"
import MapsNavigation from "./navigation/MapsNavigation"

//reducer we are storing
const rootReducer = combineReducers({
  report: report,
  auth : authReducer,
  fireStore:firestoreReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({ getFirebase, getFirestore })
    ),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig)
  )
); // store saved data from reducer

//store.dispatch(reportAction.createReport());

export default function main() {


  return (

    <MapsNavigation/>
  /*  <Provider store={store}>
      <ButtonsNav />
    </Provider>*/
  );
}
