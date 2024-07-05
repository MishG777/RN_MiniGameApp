import { View, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.inputContainer}>{children}</View>;
};

export default Card;

const deviceWith = Dimensions.get("window").width;

const styles = StyleSheet.create({
  inputContainer: {
    fontFamily: "open-sans",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginTop: deviceWith < 380 ? 16 : 32,
    marginHorizontal: 24,
    backgroundColor: Colors.mainRed900,
    borderRadius: 8,
  },
});
