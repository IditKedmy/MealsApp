import {View, Text, StyleSheet} from "react-native";

type ListProps = {
  data: string[] | undefined;
};

export default function List({data}: ListProps) {
  return <>
    {data?.map(dataPoint =>
      <View key={dataPoint} style={styles.listItem}>
        <Text style={styles.itemText}>{dataPoint}</Text>
      </View>
    )}
  </>;
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: '#e2b497',
    fontSize: 12
  },
  itemText: {
    color: '#351401',
    textAlign: 'center',
  },
});