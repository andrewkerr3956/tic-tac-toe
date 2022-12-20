import { createAction } from "@reduxjs/toolkit";

const setGameActive = createAction("setGameActive");
const setPlayers = createAction("setPlayers");
const setMenuOpen = createAction("setMenuOpen");
const setWinner = createAction("setWinner");

export { setGameActive, setPlayers, setMenuOpen, setWinner };