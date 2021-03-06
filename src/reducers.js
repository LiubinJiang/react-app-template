'use strict'

import { combineReducers } from 'redux'
import counter from './counter'

const rootReducer = combineReducers ({
    counter: counter.reducer
});

export default rootReducer
