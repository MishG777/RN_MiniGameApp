import { useState } from "react";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppLoading from "expo-app-loading";
import Colors from "./constants/colors";

import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import GameOverScreen from "./screens/GameOverScreen";

import { useFonts } from "expo-font";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [Gameover, setGameover] = useState(false);
  const [roundsToGuessNum, setRoundsToGuessNum] = useState(0);

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  const gameOverHandler = () => {
    setGameover(true);
  };

  let screen = <StartGameScreen onChosenNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = (
      <GameScreen
        userNumber={userNumber}
        gameOverHandler={gameOverHandler}
        setRoundsToGuessNum={setRoundsToGuessNum}
      />
    );
  }

  if (Gameover) {
    screen = (
      <GameOverScreen
        numberToGuess={userNumber}
        roundsToGuessNum={roundsToGuessNum}
      />
    );
  }

  return (
    <LinearGradient
      colors={[Colors.yellow600, Colors.mainRed600]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
