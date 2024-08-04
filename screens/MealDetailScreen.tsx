import {View, Text, StyleSheet, Image, ScrollView, Button} from "react-native";
import {MEALS} from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import {useLayoutEffect} from "react";

export default function MealDetailScreen({route, navigation}: {route: any, navigation: any}) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log('Favorite pressed');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title="Tap me" onPress={headerButtonPressHandler}/>
    });
  }, [navigation, headerButtonPressHandler]);

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