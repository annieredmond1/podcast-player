import { ADD_TO_PLAYLIST } from '../actions';
import { createReducer } from '../utils';

const addToPlaylist = (state, { payload }) => ({ ...state, ...payload });

const handlers = {
  [ADD_TO_PLAYLIST]: addToPlaylist,
};

export default createReducer({}, handlers);
