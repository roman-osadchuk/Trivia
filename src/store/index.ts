import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './rootReducer';
import { rootSaga } from '../redux';

// Fix warnings from redux-persist with @reduxjs/toolkit
const ignoreActionsFromReduxPersist = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];
// Fix warnings from react-native-localization with @reduxjs/toolkit
const ignoreActionsFromReactNativeLocalization = ['TRANSLATE/setTranslation'];
const ignorePathFromReactNativeLocalization = ['translate'];

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [...ignoreActionsFromReduxPersist, ...ignoreActionsFromReactNativeLocalization],
        ignoredPaths: [...ignorePathFromReactNativeLocalization],
        ignoredActionPaths: ['payload.success', 'payload.failure', 'payload.anyway'],
      },
      immutableCheck: true,
      thunk: true,
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export type TStore = typeof store;
export type TRootState = ReturnType<typeof store.getState>;
export type TStoreGetState = typeof store.getState;
export type TStoreDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
