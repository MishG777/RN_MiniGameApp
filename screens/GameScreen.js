//is responsible for actual game

import { useState, useEffect } from "react";
import { View, StyleSheet, Alert, Text, FlatList } from "react-native";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Instruction from "../components/ui/instruction";
import Card from "../components/ui/Card";
import GuessLogItem from "../components/game/GuessLogItem";

//import Ionicons from "@expo/vector-icons/Ionicons";

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

const GameScreen = ({ userNumber, gameOverHandler, setRoundsToGuessNum }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([
    { guess: initialGuess, lier: false },
  ]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      gameOverHandler();
    }
  }, [currentGuess, userNumber, gameOverHandler]);

  useEffect(() => {
    minNum = 1;
    maxMum = 100;
  }, []);

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
      setGuessRounds((prevRounds) => [
        { guess: currentGuess, lier: true },
        ...prevRounds,
      ]);
      return;
    }

    if (direction === "lower") {
      maxMum = currentGuess;
    } else {
      minNum = currentGuess + 1;
    }
    setRoundsToGuessNum(guessRounds.length);
    const newRandNumber = generateRandomBetween(minNum, maxMum, currentGuess);
    setCurrentGuess(newRandNumber);
    //setGuessRounds((prevRound) => [newRandNumber, ...prevRound]);
    setGuessRounds((prevRounds) => [
      { guess: newRandNumber, lier: false },
      ...prevRounds,
    ]);
  }

  return (
    <View style={styles.screen}>
      <Title>Device Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Instruction style={styles.instructionText}>
          Higher or Lower
        </Instruction>
        <View style={styles.buttons}>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              -
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>

      {/*Log rounds*/}
      <View style={styles.flatListContainer}>
        <FlatList
          style={styles.flat}
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              lier={itemData.item.lier}
              roundNumber={guessRounds.length - itemData.index}
              guess={itemData.item.guess}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 8,
  },
  button: {
    flex: 1,
  },
  instructionText: {
    margin: 8,
  },
  flatListContainer: {
    flex: 1,
    marginTop: 15,
  },
  flat: {
    paddingHorizontal: 12,
    paddingBottom: 15,
  },
});
