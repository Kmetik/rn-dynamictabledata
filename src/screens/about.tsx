import React from 'react';
import {Link} from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';

export const AboutScreen: React.FC = () => {

  return (
    <View style={styles.container}>
      <Link
        to={{
          screen: 'Tickers',
        }}>
        <Text style={styles.link}>To Tickers</Text>
      </Link>
      <Text>About app</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: '#0984e3',
  },
});
