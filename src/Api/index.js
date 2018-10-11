import * as React from 'react';

import WsProvider from '@polkadot/api-provider/ws';
import createApi from '@polkadot/api-rx';
import { RxApiInterface } from '@polkadot/api-rx/types';
import { Subscription } from 'rxjs/Subscription';

import ApiObservable from './ApiObservable';
import ApiContext from './Context';

export default class ApiProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    const { url } = props;
    const api = createApi(new WsProvider(url));

    this.state = {
      api,
      apiObservable: new ApiObservable(api),
      apiConnected: false,
      subscriptions: [],
    };
  }

  componentDidMount() {
    this.updateSubscriptions();
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const { api, apiObservable, apiConnected } = this.state;
    return (
      <ApiContext.Provider value={{ api, apiObservable, apiConnected }}>{this.props.children}</ApiContext.Provider>
    );
  }

  updateSubscriptions() {
    const { api } = this.state;

    this.unsubscribe();
    this.setState({
      subscriptions: [this.subscribeIsConnected(api)],
    });
  }

  unsubscribe() {
    for (const subscription of this.state.subscriptions) {
      try {
        subscription.unsubscribe();
      } catch (error) {
        console.error(error);
      }
    }
  }

  subscribeIsConnected(api) {
    return api.isConnected().subscribe(isConnected => {
      this.setState({ apiConnected: !!isConnected });
    });
  }
}
