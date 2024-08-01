import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import {CATEGORIES} from "../data/dummy-data";
import {FlatList, View, StyleSheet, Text} from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import Category from "../models/category";

export default function CategoriesScreen() {

  function renderCategoryItem(itemData: { item: Category; }) {
    return (
      <CategoryGridTile color={itemData.item.color} title={itemData.item.title} />
    );
  }

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
        style={{width: '100%'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});