// import {useContext} from "react";
// import {FavoritesContext} from "../store/context/favorites-context";
import MealsList from "../components/MealsList/MealsList";
import {MEALS} from "../data/dummy-data";
import {StyleSheet, View, Text} from "react-native";
import {useSelector} from "react-redux";

export default function FavoritesScreen() {
  // const favoriteMealsContext = useContext(FavoritesContext);
  // const favoriteMeals = MEALS.filter(meal => favoriteMealsContext.ids.includes(meal.id));

  const favoriteMealsIds = useSelector((state: any) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter(meal => favoriteMealsIds.includes(meal.id));

  if (favoriteMeals.length === 0) {
    return <View style={styles.rootContainer}>
      <Text style={styles.text}>You have no favorite meals yet.</Text>
      <Text style={styles.text}>Start adding some! 😋</Text>
    </View>;
  }

  return <MealsList meals={favoriteMeals}/>;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});