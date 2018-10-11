import { RxApiInterface } from '@polkadot/api-rx/types';
import { Header } from '@polkadot/primitives/header';
import { Observable } from 'rxjs';
import { defaultIfEmpty, map } from 'rxjs/operators';
import { Storages } from '@polkadot/storage/types';
import { SectionItem } from '@polkadot/params/types';
import storage from '@polkadot/storage';
import BN from 'bn.js';

export default class ApiObservable {
  constructor(api) {
    this.api = api;
  }

  chainNewHead = () => {
    return this.api.chain.newHead().pipe(defaultIfEmpty());
  };

  systemChain = () => {
    return this.api.system.chain();
  };

  systemName = () => {
    return this.api.system.name();
  };

  systemVersion = () => {
    return this.api.system.version();
  };

  timestampBlockPeriod = () => {
    return this.rawStorage(storage.timestamp.public.blockPeriod);
  };

  timestampNow = () => {
    return this.rawStorage(storage.timestamp.public.now);
  };

  timestampDidUpdate = () => {
    return this.rawStorage(storage.timestamp.public.didUpdate);
  };

  rawStorage = (key, ...params) => {
    return this.rawStorageMulti([key, ...params]).pipe(map(([result]) => result));
  };

  rawStorageMulti = (...keys) => {
    return this.api.state.storage(keys).pipe(map(result => (result === undefined ? [] : result)));
  };
}
