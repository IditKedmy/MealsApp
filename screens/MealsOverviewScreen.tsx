import {CATEGORIES, MEALS} from "../data/dummy-data";
import {useLayoutEffect} from "react";
import MealsList from "../components/MealsList/MealsList";

export default function MealsOverviewScreen({route, navigation}: {route: any, navigation: any}) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(cat => cat.id === catId)?.title;
    navigation.setOptions({title: categoryTitle});
  }, [catId, navigation]);

  return <MealsList meals={displayedMeals} />
}
