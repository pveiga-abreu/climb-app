import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Alert,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.body}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('./images/logo.png')} />
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.titlePrimary}>Climb with</Text>
            <Text style={styles.titleSecondary}>intelligence</Text>
          </View>
          <View style={styles.buttonContainerPrimary}>
            <Button
              title="CLIMB"
              color="#4F87CE"
              onPress={() => Alert.alert('CLIMB')}
            />
          </View>
          <View style={styles.buttonContainerSecondary}>
            <Button
              title="No, thanks"
              color="#4F87CE"
              onPress={() => Alert.alert('No, thanks')}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: '#F5F5F5',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  logo: {
    width: 250,
    height: 160,
  },
  titleContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titlePrimary: {
    fontSize: 40,
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: '#4F87CE',
  },
  titleSecondary: {
    fontSize: 40,
    fontWeight: '600',
    fontFamily: 'Poppins',
    color: '#112257',
  },
  buttonContainerPrimary: {
    paddingTop: 120,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonContainerSecondary: {
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default App;
