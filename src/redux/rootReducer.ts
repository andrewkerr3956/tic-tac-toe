import { combineReducers } from "redux";
import game from './game/reducers';

const reducers = (
    game
);

export default combineReducers(reducers);