import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "../../util/colors";

function Button({ children, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <Text>{children}</Text>
    </Pressable>
  );
}

export default Button;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: { height: 0.5, width: 2 },
    backgroundColor: Colors.primary800,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    color: Colors.primary50,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
