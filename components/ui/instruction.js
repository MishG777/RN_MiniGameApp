import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Instruction = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

export default Instruction;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.mainYellow400,
    fontSize: 20,
    fontWeight: "bold",
    opacity: 0.7,
  },
});
