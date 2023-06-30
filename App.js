import { LinearGradient } from 'expo-linear-gradient';
import { 
    StyleSheet,
    ImageBackground,
    SafeAreaView
    } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import Colors from './constants/colors';
import { useState } from 'react';

export default function App() {

  const [useNumber, setUseNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function pickedNumberHandler(pickedNumber){
    setUseNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(){
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if (useNumber) {
    screen = (<GameScreen userNumber={useNumber} onGameOver={gameOverHandler}/>);
  }

  if (gameIsOver && useNumber){
    screen = <GameOverScreen />
  }

  

  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground 
        source={require('./assets/images/background.png')} 
        resizeMode='cover'
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={styles.rootScreen}>
            {screen}
          </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1, 
  },

  backgroundImage:{
    opacity: 0.15
  }
});
