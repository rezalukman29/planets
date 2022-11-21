import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import planetReducer from './planet/planet.reducer';

const rootReducer = combineReducers({
  planet: planetReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;

export type ReduxState = ReturnType<typeof rootReducer>;

export default store;
