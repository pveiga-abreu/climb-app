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
  TouchableOpacity,
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

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonPrimary}
              onPress={() => Alert.alert('CLIMB')}>
              <Text style={styles.textButtonPrimary}>CLIMB</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonSecondary}
              onPress={() => Alert.alert('No, thanks')}>
              <Text style={styles.textButtonSecondary}>No, thanks</Text>
            </TouchableOpacity>
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
  buttonContainer: {
    paddingTop: 120,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonPrimary: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    marginBottom: 10,
    padding: 8,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderColor: '#62A5DF',
    borderRadius: 30,
  },
  buttonSecondary: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    padding: 8,
  },
  textButtonPrimary: {
    fontWeight: '700',
    fontSize: 20,
    fontFamily: 'Poppins',
    color: '#62A5DF',
  },
  textButtonSecondary: {
    fontWeight: '300',
    fontSize: 20,
    fontFamily: 'Poppins',
    color: '#62A5DF',
  },
});

export default App;
