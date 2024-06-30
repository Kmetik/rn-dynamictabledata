import {makeAutoObservable} from 'mobx';
import TickersRepository from './tickers.repository';

export default class TickersStore {
  repo: TickersRepository;
  constructor() {
    makeAutoObservable(this);
    this.repo = new TickersRepository();
  }
  //вот тут можно было бы побаловаться с допустим, flow, подкинуть генератор, но иногда лучшее решение, самое очевидное решение.
  subscribeToTickers() {
    const interval = setInterval(() => {
      this.repo.list();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }
}
