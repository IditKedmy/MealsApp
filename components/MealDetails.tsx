import {View, Text, StyleSheet} from "react-native";
import Meal from "../models/meal";

export default function MealDetails({item, style, textStyle}: {item: Meal | undefined, style?: any, textStyle?: any}) {
  return (
    <View style={[styles.mealDetail, style]}>
      <Text style={[styles.detailItem, textStyle]}>{item?.duration}m</Text>
      <Text style={[styles.detailItem, textStyle]}>{item?.complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{item?.affordability.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mealDetail: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12
  },
});