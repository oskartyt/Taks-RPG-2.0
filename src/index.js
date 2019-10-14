import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'

import './index.scss';
import App from './components/App/App';
// import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app'
import store from "./store";

const fbConfig = {
    apiKey: "AIzaSyDdzOYDeZ-b7IEiNXVN1QId4oQcgaIG9cY",
    authDomain: "task-rpg.firebaseapp.com",
    databaseURL: "https://task-rpg.firebaseio.com",
    projectId: "task-rpg",
    storageBucket: "task-rpg.appspot.com",
    messagingSenderId: "801171409556",
    appId: "1:801171409556:web:c196530c3f2536c93b8281"
};
const rrfConfig = {
    userProfile: 'users',
};
firebase.initializeApp(fbConfig);

window.store = store;

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    // createFirestoreInstance // <- needed if using firestore
}

ReactDOM.render(
    <ReactReduxFirebaseProvider {...rrfProps}>
        <Provider store={store}>
            <App />
        </Provider>
    </ReactReduxFirebaseProvider>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
