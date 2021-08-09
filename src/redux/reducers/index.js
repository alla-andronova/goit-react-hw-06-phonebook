import { combineReducers } from 'redux';
import contactsReducer from './contacts';
import filterReducer from './filter';

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
