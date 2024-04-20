import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.buttonInnerContainer, styles.pressed] : ""
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
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

  buttonInnerContainer: {
    backgroundColor: "#cf8471",
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
