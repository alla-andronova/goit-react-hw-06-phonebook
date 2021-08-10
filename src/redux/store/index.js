// import { createStore } from 'redux';
import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contacts from '../slices/contacts';
import filter from '../slices/filter';
// import { composeWithDevTools } from 'redux-devtools-extension';

// import { rootReducer } from '../reducers/index';

// const store = createStore(rootReducer, composeWithDevTools());
const persistConfig = {
  key: 'hello',
  storage,
};

const rootReducer = {
  contacts,
  filter,
};
const persistedReducer = persistReducer(
  persistConfig,
  combineReducers(rootReducer),
);
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

const persistor = persistStore(store);

export default { store, persistor };
