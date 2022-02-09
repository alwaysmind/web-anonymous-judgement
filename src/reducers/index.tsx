import { combineReducers } from '@reduxjs/toolkit';

// Activate Redux-Persist
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import UserReducer from './UserReducer';
import PostReducer from './PostReducer';

// Configure persist-reducer
const configPersist = {
    key: 'root',
    storage,
    whitelist: [
        'UserReducer',
        'PostReducer'
    ]
}

const combinedReducers = combineReducers({
    // Add your reducers here
    'UserReducer': UserReducer,
    'PostReducer': PostReducer
});

export default persistReducer(configPersist, combinedReducers)