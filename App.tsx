import { StatusBar } from 'expo-status-bar';
import {StyleSheet} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {StrictMode} from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import {createDrawerNavigator} from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
import {Ionicons} from "@expo/vector-icons";
import FavoritesContextProvider from "./store/context/favorites-context";
import {Provider} from "react-redux";
import {store} from "./store/redux/store";

export type RootStackParamList = {
  MealSCategory: undefined;
  MealsOverview: { categoryId: string };
  MealDetail: { mealId: string };
};

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#351401'},
        headerTintColor: 'white',
        sceneContainerStyle: {backgroundColor: '#3f2f25'},
        drawerContentStyle: {backgroundColor: '#351401'},
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#e4baa1',
      }}>
      <Drawer.Screen
        name="MealsCategories"
        component={CategoriesScreen}
        options={{
          title: 'All Categories',
          drawerIcon: ({color}) => (
            <Ionicons name="list" size={24} color={color}/>
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({color}) => (
            <Ionicons name="star" size={24} color={color}/>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light"/>
      {/*<FavoritesContextProvider>*/}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="MealsCategories"
            screenOptions={{
              headerStyle: {backgroundColor: '#351401'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#3f2f25'},
            }}>
            <Stack.Screen
              name="DrawerScreen"
              component={DrawerNavigator}
              options={{headerShown: false,}}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{title: 'Meal Detail'}}/>
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/*</FavoritesContextProvider>*/}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
