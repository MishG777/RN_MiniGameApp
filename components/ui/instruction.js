import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const Instruction = ({ children, style }) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

export default Instruction;

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.mainYellow400,
    fontSize: 20,
    //fontWeight: "bold",
    fontFamily: "open-sans-bold",
    opacity: 0.7,
  },
});
