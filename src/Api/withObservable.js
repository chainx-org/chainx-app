import * as React from 'react';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import withApi from './withApi';

export default function withObservable(subscription, { propName = subscription, transform = x => x } = {}) {
  return Component => {
    class WithObservable extends React.PureComponent {
      constructor(props) {
        super(props);

        this.state = {
          subscriptions: [],
          value: void 0,
        };
      }

      componentDidMount() {
        this.subscribe();
      }

      componentWillUnmount() {
        this.unSubscribe();
      }

      render() {
        const { children } = this.props;
        const { value } = this.state;
        const _props = {
          ...this.props,
          [propName]: value,
        };

        return <Component {..._props}>{children}</Component>;
      }

      subscribe(...params) {
        const { apiObservable } = this.props;
        const observable = apiObservable[subscription](...params);
        this.setState({
          subscriptions: [observable.pipe(map(transform)).subscribe(value => this.triggerUpdate(this.props, value))],
        });
      }

      unSubscribe() {
        this.state.subscriptions.forEach(subscription => subscription.unsubscribe());
      }

      triggerUpdate = (props, value) => {
        this.setState({ value });
      };
    }

    return withApi(WithObservable);
  };
}
