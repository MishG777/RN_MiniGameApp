import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  return (
    <Pressable style={({ pressed }) => (pressed ? styles.pressed : "")}>
      <View style={styles.buttonOuterContainer}>
        <Text style={styles.buttonText}>{children}</Text>
      </View>
    </Pressable>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 8,
    margin: 4,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#cf8471",
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
