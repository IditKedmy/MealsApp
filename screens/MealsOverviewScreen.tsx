import {View, StyleSheet, Text, FlatList} from "react-native";
import {CATEGORIES, MEALS} from "../data/dummy-data";
import MealItem from "../components/Mealitem";
import Meal from "../models/meal";
import {useLayoutEffect} from "react";

export default function MealsOverviewScreen({route, navigation}: {route: any, navigation: any}) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  function renderMealItem(itemData: { item: Meal; }) {
    return <MealItem item={itemData.item}/>;
  }

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(cat => cat.id === catId)?.title;
    navigation.setOptions({title: categoryTitle});
  }, [catId, navigation]);

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
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