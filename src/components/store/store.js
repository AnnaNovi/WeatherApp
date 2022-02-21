import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {weatherReducer} from './weatherReducer';
import {weatherWeekReducer} from './weatherWeekReducer';

const rootReducer = combineReducers({
  weather: weatherReducer,
  weatherWeek: weatherWeekReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
