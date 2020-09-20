import React, { Component } from 'react';
import * as Font from 'expo-font';
import AppNavigator from './src/navigations/Navigator';
import { AppLoading } from 'expo'

export default class App extends Component {
  state = {
    isFontLoaded: false
  }

  async componentDidMount() {
    await Font.loadAsync({
      'Bold':require('./src/fonts/Montserrat-ExtraBold.otf'),
      'Medium':require('./src/fonts/Montserrat-Medium.otf'),
      'Regular':require('./src/fonts/Montserrat-Regular.otf'),
    });
    this.setState({
      isFontLoaded: true
    })
  }

  render() {
    return (
      this.state.isFontLoaded === true ? <AppNavigator/> : <AppLoading/>
    );
  }
}

// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View, ScrollView } from 'react-native';

// export default function App() {
//   return (
//     <ScrollView style={styles.scrollView}>    
//       <View style={styles.container}>
//         <Text>
//           Hello React Native!
//         </Text>
//         <StatusBar style="auto" />
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
