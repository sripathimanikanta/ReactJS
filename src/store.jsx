import { legacy_createStore as createStore } from 'redux';
// import {configureState} from '@reduxjs/toolkit'

import mainReducer from './Reducers/allReducers'

const mainStore = createStore(mainReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default mainStore;