//will be shown once the game is over

import { View, Image, StyleSheet, Text, Button } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ numberToGuess, roundsToGuessNum }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game is Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text style={styles.mainText}>
        Your device needed{" "}
        <Text style={styles.highlight}>{roundsToGuessNum}</Text> rounts to guess
        the number
        <Text style={styles.highlight}> {numberToGuess}</Text>.
      </Text>

      <PrimaryButton style={styles.restartBtn}>Restart the Game!</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 52,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: 150,
    borderColor: "white",
    borderWidth: 5,
    width: 300,
    height: 300,
    margin: 20,
    overflow: "hidden",
  },
  image: {
    width: 300,
    height: 300,
  },
  mainText: {
    fontFamily: "open-sans",
    fontSize: 20,
  },
  highlight: {
    color: "white",
    opacity: 0.8,
    fontFamily: "open-sans-bold",
  },
  restartBtn: {
    marginTop: 40,
    borderColor: "white",
  },
});
