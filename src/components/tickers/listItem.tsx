import React from 'react';
import {ListRenderItem, Text, View} from 'react-native';
import {ITicker} from '../../types/tickers';
import styles from './styles';

export const TickerListItem: ListRenderItem<ITicker> = info => {
  return (
    <View style={styles.row}>
      <View style={[styles.cell, styles.symbol]}>
        <Text style={styles.cellText}>{info.item.symbol}</Text>
      </View>
      <View style={[styles.cell, styles.rest]}>
        <Text style={styles.cellText}>{info.item.price}</Text>
      </View>
      <View style={[styles.cell, styles.rest]}>
        <Text style={styles.cellText}>{info.item.bestBidPrice}</Text>
      </View>
      <View style={[styles.cell, styles.rest]}>
        <Text style={styles.cellText}>{info.item.bestAskPrice}</Text>
      </View>
      <View style={[styles.cell, styles.rest]}>
        <Text style={styles.cellText}>{info.item.bestAskSize}</Text>
      </View>
    </View>
  );
};
