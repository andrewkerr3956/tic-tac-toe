import { createReducer } from "@reduxjs/toolkit";
import { setGameActive, setPlayers, setMenuOpen, setWinner } from "./actions";
import IGameController from "@interfaces/GameController";
import IPlayer from "@interfaces/Player";

const initialState = {
    gameActive: false,
    players: [],
    menuOpen: false,
    winner: undefined
};

const gameReducers = (state: any = initialState, action: any) => {
    if (action?.payload) {
        switch (action.type) {
            case 'setGameActive': {
                return {
                    ...state,
                    gameActive: action.payload
                }
            }
            case 'setPlayers': {
                return {
                    ...state,
                    players: action.payload
                }
            }
            case 'setMenuOpen': {
                return {
                    ...state,
                    menuOpen: action.payload
                }
            }
            case 'setWinner': {
                return {
                    ...state,
                    winner: action.payload
                }
            }
            default: {
                return state;
            }
        }
    }
    else {
        return state;
    }
}

const reducers = createReducer(initialState, [gameReducers] as any);

export default reducers;