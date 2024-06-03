//is responsible for actual game

import { useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import Title from "../components/ui/title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minNum = 1;
let maxMum = 100;

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(minNum, maxMum, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  function nextGuessHandler(direction) {
    // "direction" argument --> a string - 'lower' or 'greater'\

    if (
      (direction === "lower" && userNumber > currentGuess) ||
      (direction === "greater" && userNumber < currentGuess)
    ) {
      Alert.alert(
        "Don't Lie!",
        "you know that this is wrong..."[{ text: "Okay", style: "cancel" }]
      );
      return;
    }

    if (direction === "lower") {
      maxMum = currentGuess;
    } else {
      minNum = currentGuess + 1;
    }
    console.log(minNum, maxMum);
    const newRandNUmber = generateRandomBetween(minNum, maxMum, currentGuess);
    setCurrentGuess(newRandNUmber);
  }

  return (
    <View style={styles.screen}>
      <Title>Device Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
            +
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
            -
          </PrimaryButton>
        </View>
      </View>
      {/*<View>Log rounds</View>*/}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
