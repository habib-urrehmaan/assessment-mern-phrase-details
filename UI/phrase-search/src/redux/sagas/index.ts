import { all } from 'redux-saga/effects';

import phraseWatcher from './Phrase.saga';

export default function* rootSaga() {
  yield all([phraseWatcher()]);
}
// Import the watcher function here and add that in the above array.
