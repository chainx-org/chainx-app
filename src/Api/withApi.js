import * as React from 'react';

import ApiContext from './Context';

export default function withApi(Inner, defaultProps) {
  return class WithApi extends React.PureComponent {
    render() {
      return (
        <ApiContext.Consumer>
          {apiProps => {
            return <Inner {...defaultProps} {...apiProps} {...this.props} />;
          }}
        </ApiContext.Consumer>
      );
    }
  };
}
