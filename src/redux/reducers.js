import {
  SET_ARROWS_SHOT,
  SET_DEATH_MINES,
  SET_DEATH_WUMPUS,
  SET_GAMES_LOST,
  SET_GAMES_WON,
  SET_PASSWORD,
  SET_USERNAME,
  SET_WUMPI_KILLED,
} from './actions';

const initState = {
  Username: '',
  Password: '',
  DeathWumpus: 0,
  DeathMines: 0,
  WumpiKilled: 0,
  ArrowsShot: 0,
  GamesWon: 0,
  GamesLost: 0,
};

function credReducer(state = initState, action) {
  switch (action.type) {
    case SET_USERNAME:
      return {...state, Username: action.payload};
    case SET_PASSWORD:
      return {...state, Password: action.payload};
    case SET_GAMES_WON:
      return {...state, GamesWon: action.payload};
    case SET_GAMES_LOST:
      return {...state, GamesLost: action.payload};
    case SET_ARROWS_SHOT:
      return {...state, ArrowsShot: action.payload};
    case SET_DEATH_MINES:
      return {...state, DeathMines: action.payload};
    case SET_DEATH_WUMPUS:
      return {...state, DeathWumpus: action.payload};
    case SET_WUMPI_KILLED:
      return {...state, WumpiKilled: action.payload};
    default:
      return state;
  }
}

export default credReducer;
