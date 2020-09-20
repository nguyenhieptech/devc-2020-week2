import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import AppNavigator from './src/navigations/Navigator';
import { AppLoading } from 'expo'

const App = () => {
  const [isFontLoaded, setIsFontLoaded] = useState(false);

  // for loading or componentDidMount(), create an arrow function to do all the connection
  // then invoke it inside useEffect hook

  const loadFonts = async () => {
    await Font.loadAsync({
      'Bold':require('./src/fonts/Montserrat-ExtraBold.otf'),
      'Medium':require('./src/fonts/Montserrat-Medium.otf'),
      'Regular':require('./src/fonts/Montserrat-Regular.otf'),
    });
    setIsFontLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, [])

  return (
    isFontLoaded === true ? <AppNavigator/> : <AppLoading/>
  );
}

export default App;
