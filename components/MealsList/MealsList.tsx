import {FlatList, View, StyleSheet} from "react-native";
import MealItem from "./Mealitem";
import Meal from "../../models/meal";

export default function MealsList({meals, navigation}: {meals: Meal[], navigation?: any}) {
  function renderMealItem(itemData: { item: Meal; }) {
    return <MealItem item={itemData.item}/>;
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});