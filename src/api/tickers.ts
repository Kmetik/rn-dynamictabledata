import IResponse from '../types/response';
import {ITicker} from '../types/tickers';
import http from './_client';

export async function list(): Promise<IResponse<Array<ITicker>>> {
  const res = await http.get('https://futures-api.poloniex.com/api/v2/tickers');

  return res.data;
}
