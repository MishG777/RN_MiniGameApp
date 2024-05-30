import { Text, StyleSheet } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#b33059",
    textAlign: "center",
    borderWidth: 2,
    borderRadius: 7,
    borderColor: "#b33059",
    padding: 12,
  },
});
