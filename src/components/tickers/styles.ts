import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tableWrap: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
    padding: 16,
  },
  headRow: {
    borderBottomColor: '#b2bec3',
    borderBottomWidth: 1,
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    paddingVertical: 8,
  },
  cell: {
    marginHorizontal: 4,
  },
  cellText: {
    fontSize: 16,
  },
  headCellText: {
    fontWeight: 500,
  },
  symbol: {
    width: 200,
  },
  rest: {
    width: 80,
  },
});

export default styles;
