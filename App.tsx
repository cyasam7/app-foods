import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as ReduxProvider } from 'react-redux';
import Navigation from './src/navigation';

import { theme } from './src/theme';
import { store } from './src/redux/store';
import { StatusBar } from 'react-native';

const App = () => {
  return <Navigation />;
};

export default () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <StatusBar networkActivityIndicatorVisible translucent={true} />
          <App />
        </SafeAreaProvider>
      </PaperProvider>
    </ReduxProvider>
  );
};
