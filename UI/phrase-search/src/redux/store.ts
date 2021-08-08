import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { AppState } from './types/App.type';
import rootReducer from './reducers';

import { initialPhraseState } from './reducers/Phrase.reducer';

const init: AppState = {
  phrase: initialPhraseState,
};

export function store(initialState: AppState = init) {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];

  return {
    ...createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))),
    runSaga: sagaMiddleware.run,
  };
}
