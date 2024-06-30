import React from 'react';
import {FlatList, ScrollView, Text, View} from 'react-native';
import {ITicker} from '../../types/tickers';
import {TickerListItem} from './listItem';
import {observer} from 'mobx-react-lite';
import styles from './styles';

interface TickersListProps {
  items: Array<ITicker>;
}

export const TickersList: React.FC<TickersListProps> = observer(({items}) => {
  return (
    <ScrollView horizontal>
      <View style={[styles.tableWrap]}>
        <View style={[styles.row, styles.headRow]}>
          <View style={[styles.cell, styles.symbol]}>
            <Text style={[styles.cellText, styles.headCellText]}>Symbol</Text>
          </View>
          <View style={[styles.cell, styles.rest]}>
            <Text style={[styles.cellText, styles.headCellText]}>Price</Text>
          </View>
          <View style={[styles.cell, styles.rest]}>
            <Text style={[styles.cellText, styles.headCellText]}>
              Best Bid Price
            </Text>
          </View>
          <View style={[styles.cell, styles.rest]}>
            <Text style={[styles.cellText, styles.headCellText]}>
              Best Ask Price
            </Text>
          </View>
          <View style={[styles.cell, styles.rest]}>
            <Text style={[styles.cellText, styles.headCellText]}>
              Best Ask Size
            </Text>
          </View>
        </View>
        <FlatList
          data={items}
          keyExtractor={item => item.tradeId}
          renderItem={TickerListItem}
        />
      </View>
    </ScrollView>
  );
});
