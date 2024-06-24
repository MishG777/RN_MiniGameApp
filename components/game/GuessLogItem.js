import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const GuessLogItem = ({ roundNumber, guess, lier }) => {
  console.log(lier);
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={[styles.itemText, lier && styles.lieText]}>
        {lier ? "You lied" : `Opponent's Guess: ${guess}`}
      </Text>
    </View>
  );
};

export default GuessLogItem;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: Colors.mainYellow400,
    borderRadius: 30,
    padding: 8,
    paddingHorizontal: 12,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  itemText: {
    fontFamily: "open-sans",
  },
  lieText: {
    color: "red",
    fontFamily: "open-sans",
  },
});
