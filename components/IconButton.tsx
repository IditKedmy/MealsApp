import {GestureResponderEvent, Pressable, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";

type IconButtonProps = {
  icon: any;
  color: string;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
};

export default function IconButton({icon, color, onPress}: IconButtonProps) {
  return <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
    <Ionicons name={icon} size={24} color={color} />
  </Pressable>;
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
