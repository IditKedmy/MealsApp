import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import {TouchableOpacity, View, Text, StyleSheet, GestureResponderEvent, Pressable, Platform} from "react-native";

type CategoryGridTileProps = {
  // onSelect: ((event: GestureResponderEvent) => void) | undefined;
  color: any;
  title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined;
}

export default function CategoryGridTile({title, color}: CategoryGridTileProps) {
  return (
    <View style={[styles.gridItem, {backgroundColor: color}]}>
      <Pressable
        android_ripple={{color: '#ccc'}}
        style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}>
      {/*<TouchableOpacity style={{flex: 1}} >*/}
        <View style={[styles.container, {backgroundColor: color}]}>
          <Text style={styles.title} numberOfLines={2}>{title}</Text>
        </View>
      {/*</TouchableOpacity>*/}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    // width: '100%',
    // borderRadius: 8,
    // elevation: 4,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 8,
    elevation: 4,
    borderRadius: 10,
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'right',
  },
});
