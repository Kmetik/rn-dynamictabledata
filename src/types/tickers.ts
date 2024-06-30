export interface ITicker {
  sequence: number; //Sequence number
  symbol: string; //Symbol
  /**
   * @param Side of liquidity taker
   */
  side: string;
  size: number; //Filled quantity
  price: string; //Filled price
  bestBidSize: number; //Best bid size
  bestBidPrice: string; //Best bid price
  bestAskPrice: string; //Best ask price
  tradeId: string; //Transaction ID
  bestAskSize: number; //Best ask size
  ts: number;
}
