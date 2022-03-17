import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export function withProvider(Component) {
  return function WrappedScreen(props) {
    return (
      <SafeAreaProvider>
        <Component {...props} />
      </SafeAreaProvider>
    );
  };
}
