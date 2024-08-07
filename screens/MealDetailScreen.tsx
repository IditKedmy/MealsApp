import {View, Text, StyleSheet, Image, ScrollView} from "react-native";
import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import {useLayoutEffect} from "react";
import IconButton from "../components/IconButton";
import {useDispatch, useSelector} from "react-redux";
import {addFavorite, removeFavorite}  from "../store/redux/favorites";
// import {FavoritesContext} from "../store/context/favorites-context";

export default function MealDetailScreen({route, navigation}: {route: any, navigation: any}) {
  // const favoriteMealsContext = useContext(FavoritesContext);
  const favoriteMealsIds = useSelector((state: any) => state.favoriteMeals.ids);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  // const mealIsFavorite = favoriteMealsIds.isFavorite(mealId);
  const mealIsFavorite = favoriteMealsIds.includes(mealId);

  function changeFavoriteStatusHandler() {
    mealIsFavorite ?
      dispatch(removeFavorite({id: mealId})) :
      dispatch(addFavorite({id: mealId}));
    /*mealIsFavorite ?
      favoriteMealsContext.removeFavorite(mealId) :
      favoriteMealsContext.addFavorite(mealId);*/
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        <IconButton
          onPress={changeFavoriteStatusHandler}
          color="white"
          icon={mealIsFavorite ? 'star' : 'star-outline'}
        />
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={{marginBottom: 32}}>
      <Image source={{uri: selectedMeal?.imageUrl}} style={styles.image}/>
      <Text style={styles.title}>{selectedMeal?.title}</Text>
      <MealDetails item={selectedMeal} textStyle={{color: 'white'}}/>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle subtitle="Ingredients"/>
          <List data={selectedMeal?.ingredients}/>
          <Subtitle subtitle="Steps"/>
          <List data={selectedMeal?.steps}/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    margin: 8,
    fontWeight: 'bold',
    color: 'white',
  },
  listOuterContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    width: '80%'
  }
});