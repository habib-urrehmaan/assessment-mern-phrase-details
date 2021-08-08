export const GET_PHRASE_DETAILS = 'GET_PHRASE_DETAILS';
export const GET_PHRASE_DETAILS_SUCCESS = 'GET_PHRASE_DETAILS_SUCCESS';

export type PhraseState = {
  phraseDetails: string,
  loading: boolean,
  success: boolean
};

interface getPhraseDetailsAction {
  type: typeof GET_PHRASE_DETAILS;
  obj: any;
}

interface getPhraseDetailsSuccess {
  type: typeof GET_PHRASE_DETAILS_SUCCESS;
  payload: any;
}

export type PhraseActionType = getPhraseDetailsAction
  | getPhraseDetailsSuccess;
