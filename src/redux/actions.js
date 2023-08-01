export const SET_USERNAME = 'SET_USERNAME';
export const SET_PASSWORD = 'SET_PASSWORD';
export const SET_GAMES_WON = 'SET_GAMES_WON';
export const SET_GAMES_LOST = 'SET_GAMES_LOST';
export const SET_WUMPI_KILLED = 'SET_WUMPI_KILLED';
export const SET_DEATH_MINES = 'SET_DEATH_MINES';
export const SET_DEATH_WUMPUS = 'SET_DEATH_WUMPUS';
export const SET_ARROWS_SHOT = 'SET_ARROWS_SHOT';

export const setUsername = username => dispatch => {
  dispatch({
    type: SET_USERNAME,
    payload: username,
  });
};

export const setPassword = password => dispatch => {
  dispatch({
    type: SET_PASSWORD,
    payload: password,
  });
};

export const setGamesWon = gamesWon => dispatch => {
  dispatch({
    type: SET_GAMES_WON,
    payload: gamesWon,
  });
};

export const setGamesLost = gamesLost => dispatch => {
  dispatch({
    type: SET_GAMES_LOST,
    payload: gamesLost,
  });
};

export const setKilledWumpus = kWumpus => dispatch => {
  dispatch({
    type: SET_DEATH_WUMPUS,
    payload: kWumpus,
  });
};

export const setKilledMines = kMines => dispatch => {
  dispatch({
    type: SET_DEATH_MINES,
    payload: kMines,
  });
};

export const setWumpiKilled = wKilled => dispatch => {
  dispatch({
    type: SET_WUMPI_KILLED,
    payload: wKilled,
  });
};

export const setArrowsShot = aShot => dispatch => {
  dispatch({
    type: SET_ARROWS_SHOT,
    payload: aShot,
  });
};
