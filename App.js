import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import CategoriesScreen from "./screens/CategoriesScreen";
import {StrictMode} from "react";

export default function App() {
  return (
    <StrictMode>
      <View style={styles.container}>
        <StatusBar style="light" />
        <CategoriesScreen/>
      </View>
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
