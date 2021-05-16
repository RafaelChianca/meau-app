import { combineReducers } from 'redux';

import profile from './profile';
import pet from './pet';
import chat from './chat';

export default combineReducers({
    profile,
    pet,
    chat
});