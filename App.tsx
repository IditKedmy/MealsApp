import { StatusBar } from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {StrictMode} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

export type RootStackParamList = {
  MealSCategory: undefined;
  MealsOverview: { categoryId: string };
  MealDetail: { mealId: string };
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <StrictMode>
      <StatusBar style="light"/>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerStyle: {backgroundColor: '#351401'},
            headerTintColor: 'white',
            contentStyle: {backgroundColor: '#3f2f25'},
          }}>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{title: 'All Categories'}}/>
          <Stack.Screen
            name="MealsOverview"
            component={MealsOverviewScreen}
            /*options={({route, navigation}) => {
              const catId = route.params.categoryId;
              return {
                title: catId
              };
            }}*/
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{title: 'Meal Detail'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
