import {  PhraseDetailsResponse } from '../../types/dtos';
import { ErrorResponse } from '../../types/Responses';
import { doGet } from '..';

const hostname = process.env.REACT_APP_API_HOSTNAME;
const getDetails = '/phraseDetails';

export const getPhraseDetailsApi = async (obj: any): Promise<PhraseDetailsResponse | ErrorResponse> => {
  const response = await doGet(`${hostname}${getDetails}`, `phrase=${obj.phrase}`);
  if (response.error) {
    return response.errorResponse as ErrorResponse;
  }
  const details: PhraseDetailsResponse = response.data;
  return details;
};
