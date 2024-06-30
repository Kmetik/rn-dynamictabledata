import React, {useCallback} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {TickersList} from '../components/tickers/list';
import TickersStore from '../store/tickers.store';
import {observer} from 'mobx-react-lite';
import {useFocusEffect} from '@react-navigation/native';

const tickersStore = new TickersStore();

export const TickersScreen: React.FC = observer(() => {
  useFocusEffect(
    useCallback(() => {
      const unsub = tickersStore.subscribeToTickers();
      return () => {
        console.log('unsub');
        unsub();
      };
    }, []),
  );
  return (
    <View style={StyleSheet.absoluteFill}>
      {tickersStore.repo.error && (
        <View style={styles.errorView}>
          <Text style={styles.errorText}>{tickersStore.repo.error}</Text>
        </View>
      )}
      {tickersStore.repo.loading && tickersStore.repo.items.length === 0 ? (
        <View style={styles.activitiyView}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <TickersList items={tickersStore.repo.items} />
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  activitiyView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorView: {
    paddingVertical: 8,
  },
  errorText: {
    color: '#d63031',
    fontSize: 14,
    textAlign: 'center',
  },
});
