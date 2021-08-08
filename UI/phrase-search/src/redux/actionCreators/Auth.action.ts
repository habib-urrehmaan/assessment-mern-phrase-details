import {
  GET_PHRASE_DETAILS,
  GET_PHRASE_DETAILS_SUCCESS,
  PhraseActionType
} from '../types/Phrase.type';

export const getPhraseDetails = (obj: any):PhraseActionType => ({
  type: GET_PHRASE_DETAILS,
  obj,
});

export const getPhraseDetailsSuccess = (details: any):PhraseActionType => ({
  type: GET_PHRASE_DETAILS_SUCCESS,
  payload: details,
});

export type PhraseActions = ReturnType<
    | typeof getPhraseDetails
    | typeof getPhraseDetailsSuccess
      >;
