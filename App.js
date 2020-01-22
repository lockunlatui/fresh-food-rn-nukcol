/**
 * @ Author: Do Xuan Loc - Kun
 * @ Create Time: 1985-10-26 15:15:00
 * @ Modified by: Do Xuan Loc - Kun
 * @ Modified time: 2020-01-22 21:22:46
 * @ Description:
 */

import React, { useState } from 'react';
import { 
  StyleSheet,
  View,
  Image
} from 'react-native';
import {
  AppLoading,
  SplashScreen
} from 'expo';
import {
  Asset
} from 'expo-asset';

import Home from "./screens/Home";
import SignIn from './screens/SignIn';

const App = () => {

  const [isSplashReady, setIsSplashReady] = useState(false);
  const [isAppReady, setIsAppReady] = useState(false);

  _cacheSplashResourcesAsync = async () => {
    const gif = require('./assets/images/logo.png');
    return Asset.fromModule(gif).downloadAsync();
  };

  _cacheResourcesAsync = async () => {
    SplashScreen.hide();
    const images = [
      require('./assets/images/logo.png'),
      require('./assets/images/logo.png'),
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    await Promise.all(cacheImages);
    setIsAppReady(true)
  };

  if (!isSplashReady) {
    return (
      <AppLoading
        startAsync={_cacheSplashResourcesAsync}
        onFinish={() => setIsSplashReady(true)}
        onError={console.warn}
        autoHideSplash={false}
      />
    );
  }

  if (!isAppReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Image
          source={require('./assets/images/logo.png')}
          onLoad={_cacheResourcesAsync}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: '#444',
    paddingTop: 20,
    backgroundColor: 'white'
  },
});

export default App;
