import {View, Text, StyleSheet, GestureResponderEvent, Pressable, Image, Platform} from "react-native";
import Meal from "../models/meal";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../App";
import MealDetails from "./MealDetails";

type MealItemProps = {
  item: Meal;
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export default function MealItem({item, onPress}: MealItemProps) {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const selectMealHandler = (event: GestureResponderEvent) => {
    navigation.navigate('MealDetail', {
      mealId: item.id,
    });
    onPress && onPress(event);
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        onPress={selectMealHandler}
        style={({pressed}) => pressed ? styles.buttonPressed : null}>
        <View>
        <View>
          <Image source={{uri: item.imageUrl}} style={styles.image}/>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <MealDetails item={item}/>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    width: '93%',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 4,
  },
  innerContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  buttonPressed: {
    opacity: 0.5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    margin: 8
  },
});