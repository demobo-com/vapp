/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// react && redux module
import React from 'react';

// Third party plug-in
import {
  Router,
  Stack,
  Scene,
} from 'react-native-router-flux';

// import page container
import HomeScene from 'containers/HomeScene';
import SettingsScene from 'containers/SettingsScene';
import HistoryScene from 'containers/HistoryScene';

export default function AppRouter(props) {
  return (
    <Router>
      <Stack hideNavBar>
        <Scene key="home" component={HomeScene} initial {...props} />
        <Scene key="settings" component={SettingsScene} {...props} />
        <Scene key="history" component={HistoryScene} {...props} />
      </Stack>
    </Router>
  );
}
