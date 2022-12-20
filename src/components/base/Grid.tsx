import { useState } from "react";
import GameController from "../../interfaces/GameController";
import Row from "./Row";

const Grid = () => {

    return (
        <div className="grid grid-cols-3 grid-rows-3">
            <Row />
            <Row />
            <Row />
        </div>
    )
}

export default Grid;