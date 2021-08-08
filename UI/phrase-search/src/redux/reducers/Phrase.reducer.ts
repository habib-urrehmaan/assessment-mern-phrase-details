import {
  GET_PHRASE_DETAILS,
  GET_PHRASE_DETAILS_SUCCESS,
  PhraseActionType,
  PhraseState,
} from '../types/Phrase.type';

export const initialPhraseState: PhraseState = {
  phraseDetails: '',
  loading: false,
  success: true,
};

export function phraseReducer(
  state = initialPhraseState,
  action: PhraseActionType,
): PhraseState {
  switch (action.type) {
    case GET_PHRASE_DETAILS:
      return {
        ...state,
        loading:true,
        success: true,
      };
    case GET_PHRASE_DETAILS_SUCCESS:
      return {
        ...state,
        loading:true,
        success: false,
      };
    default:
      return state;
  }
}
