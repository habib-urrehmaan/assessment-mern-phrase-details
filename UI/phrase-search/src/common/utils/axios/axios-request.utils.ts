// import * as qs from 'querystring';
import { AxiosUtilResponse } from '../../types/Responses';
import { doJsonRequest } from './axios-utils';

export const doGet = async (path: string, params = ''): Promise<AxiosUtilResponse> => {
  const checkParams = () => {
    if (params) return `?${params}`;
    return '';
  };
  const response: AxiosUtilResponse = await doJsonRequest(
    'GET',
    `${path}${checkParams()}`,
  );

  return response;
};

export const doPost = async (path: string, body = {}): Promise<AxiosUtilResponse> => {
  const response: AxiosUtilResponse = await doJsonRequest(
    'POST',
    `${path}`,
    body,
  );

  return response;
};

export const doPut = async (path: string, body = {}): Promise<AxiosUtilResponse> => {
  const response: AxiosUtilResponse = await doJsonRequest(
    'PUT',
    `${path}`,
    body,
  );

  return response;
};

export const doDelete = async (path: string): Promise<AxiosUtilResponse> => {
  const response: AxiosUtilResponse = await doJsonRequest(
    'DELETE',
    `${path}`,
  );

  return response;
};
