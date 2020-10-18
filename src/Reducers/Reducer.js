import { combineReducers }from 'redux';
import AuthReducer from './AuthReducer';
import User from './User';

const rootReducer = combineReducers({
    auth: AuthReducer,
    user: User
});


export default rootReducer;