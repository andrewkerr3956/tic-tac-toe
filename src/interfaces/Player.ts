import PlayerSymbol from '../types/PlayerSymbol';

interface IPlayer {
    slot: number;
    name?: string;
    symbol: PlayerSymbol;
}

export default IPlayer;