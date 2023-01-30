import React from 'react';
// context
import StateContext from './contexts/state';
import UtilsContext from './contexts/utils';
// styles
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/globalStyles';
import { darkTheme, lightTheme } from './styles/theme';
// componenets
import {
  Loading,
  Title,
  ThemeToggleBtn,
  Wordle,
  Keyboard,
  Modal,
} from './components';

function App() {
  // states and utils
  const {
    theme,
    correctWord,
    setCorrectWord,
    isLoading,
    setIsLoading,
    isCorrect,
    turn,
    setShowModal,
    showModal,
  } = React.useContext(StateContext);
  const { changeTheme, handleKeyUp } = React.useContext(UtilsContext);
  // loading
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  });
  // fetching random correct words
  React.useEffect(() => {
    fetch('https://random-word-api.herokuapp.com/word?length=5&number=100')
      .then((res) => res.json())
      .then((json) => {
        const randomWord = json[Math.floor(Math.random() * json.length)];
        setCorrectWord(randomWord);
      });
  }, [setCorrectWord]);

  //handling key events
  React.useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    // ENDING THE GAME
    if (isCorrect) {
      setShowModal(true);
      window.removeEventListener('keyup', handleKeyUp);
    }
    if (turn > 5) {
      setShowModal(true);
      window.removeEventListener('keyup', handleKeyUp);
    }
    return () => window.removeEventListener('keyup', handleKeyUp);
  }, [handleKeyUp, isCorrect, turn, setShowModal]);

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {isLoading === true ? (
        <Loading />
      ) : (
        <>
          <ThemeToggleBtn theme={theme} changeTheme={changeTheme} />
          <Title title='wordle' />
          <h1 style={{ textAlign: 'center' }}>{correctWord}</h1>
          {correctWord && <Wordle />}
          <Keyboard />
          {showModal && <Modal />}
        </>
      )}
    </ThemeProvider>
  );
}

export default App;
