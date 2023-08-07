import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { LogBox } from 'react-native';
import { RootNavigator } from 'src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { httpClientConfig } from 'src/utils/httpClientConfig';
import store from 'src/store/index';
import { api } from 'src/utils/api';

const setupAppConfigs = async () => {
  await httpClientConfig.initialize(store);
  api.initialize(httpClientConfig.httpClient);
};

function App() {
  useEffect(() => {
    setupAppConfigs();
  }, []);

  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
