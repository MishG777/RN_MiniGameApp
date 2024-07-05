//will be shown once the game is over

import { View, Image, StyleSheet, Text, Dimensions } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ numberToGuess, roundsToGuessNum, startNewGame }) => {
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

      <PrimaryButton style={styles.restartBtn} onPress={startNewGame}>
        Restart the Game!
      </PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    padding: 52,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    borderRadius: deviceWidth < 380 ? 90 : 150,
    borderColor: "white",
    borderWidth: 5,
    width: deviceWidth < 380 ? 180 : 300,
    height: deviceWidth < 380 ? 180 : 300,
    margin: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
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
    padding: 50,
  },
});
