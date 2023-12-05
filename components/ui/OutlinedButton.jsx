import { Pressable, StyleSheet, Text, View } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../util/colors";

function OutlinedButton({ children, onPress, icon }) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Ionicons name={icon} size={18} color={Colors.primary500} />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default OutlinedButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    columnGap: 6,
    borderWidth: 1,
    borderColor: Colors.primary500,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
  },

  pressed: {
    opacity: 0.75,
  },

  text: {
    color: Colors.primary500,
  },
});
