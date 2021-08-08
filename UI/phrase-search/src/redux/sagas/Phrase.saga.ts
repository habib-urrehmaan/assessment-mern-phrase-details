import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';

import {
  getPhraseDetailsSuccess
} from '../actionCreators/Auth.action';
import { GET_PHRASE_DETAILS } from '../types/Phrase.type';
import { PhraseDetailsResponse } from '../../common/types/dtos';
import { getPhraseDetailsApi } from '../../common/utils/Api/phrase.api';

export function* getPhraseDetails({ obj }: any) {
  try {
    const result: PhraseDetailsResponse = yield call(getPhraseDetailsApi, obj);
    yield put(getPhraseDetailsSuccess(result));
  } catch(err) {
    console.log('error=', err);
  }
}

export default function* watcher() {
  yield all([takeLatest(GET_PHRASE_DETAILS, getPhraseDetails)]);
}
