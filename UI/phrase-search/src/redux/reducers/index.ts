import { combineReducers } from 'redux';

import { phraseReducer } from './Phrase.reducer';

export default combineReducers({
  phrase: phraseReducer,
});
