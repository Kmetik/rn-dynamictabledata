import {makeAutoObservable, runInAction} from 'mobx';
import api from '../api';
import {ITicker} from '../types/tickers';

export default class TickersRepository {
  items: Array<ITicker> = [];
  error: string = '';
  loading: boolean = true;

  constructor() {
    makeAutoObservable(this);
  }

  async list() {
    runInAction(() => {
      this.loading = false;
    });
    try {
      const res = await api.tickers.list();
      runInAction(() => {
        this.items = res.data;
        this.loading = false;
        this.error = '';
      });
    } catch (error) {
      runInAction(() => {
        this.error = error as string;
      });
      console.log(error);
    }
  }
}
