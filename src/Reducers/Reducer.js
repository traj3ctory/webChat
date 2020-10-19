import { combineReducers }from 'redux';
import authReducer from './AuthReducer';
import userReducer from './User';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer
});


export default rootReducer;