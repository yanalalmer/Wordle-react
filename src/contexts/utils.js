import React from 'react';
import StateContext from './state';

// context
const UtilsContext = React.createContext();

export function UtilsProvider({ children }) {
  // state import
  const {
    theme,
    setTheme,
    correctWord,
    turn,
    setTurn,
    currentGuess,
    setCurrentGuess,
    setGuesses,
    history,
    setHistory,
    setIsCorrect,
    setUsedKeys,
  } = React.useContext(StateContext);
  // theme functionality
  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  // guessing a letter
  const formatGuess = () => {
    let wordsArray = [...correctWord];
    let formattedGuess = [...currentGuess].map((le) => {
      return { key: le, color: 'grey' };
    });
    // find green letters
    formattedGuess.forEach((le, i) => {
      if (wordsArray[i] === le.key) {
        formattedGuess[i].color = 'green';
        wordsArray[i] = null;
      }
    });
    // find yellow letters
    formattedGuess.forEach((le, i) => {
      if (wordsArray.includes(le.key) && le.color !== 'green') {
        formattedGuess[i].color = 'yellow';
        wordsArray[wordsArray.indexOf(le.key)] = null;
      }
    });
    return formattedGuess;
  };
  const addNewGuess = (formattedGuess) => {
    if (currentGuess === correctWord) {
      setIsCorrect(true);
    }
    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });
    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });
    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
    // tracking used keys and add colort
    setUsedKeys((prevUsedKeys) => {
      let newKeys = { ...prevUsedKeys };

      formattedGuess.forEach((guess) => {
        const currentColor = newKeys[guess.key];

        if (guess.color === 'green') {
          newKeys[guess.key] = 'green';
          return;
        }
        if (guess.color === 'yellow' && currentColor !== 'green') {
          newKeys[guess.key] = 'yellow';
          return;
        }
        if (
          guess.color === 'grey' &&
          currentColor !== 'green' &&
          currentColor !== 'yellow'
        ) {
          newKeys[guess.key] = 'grey';
          return;
        }
      });
      return newKeys;
    });
    setCurrentGuess('');
  };
  // key event handler
  const handleKeyUp = ({ key }) => {
    // enter functionality
    if (key === 'Enter') {
      // only guess if turn is less than 5
      if (turn > 5) {
        alert('you used all your guesses');
        return;
      }
      // do not allow duplicate words
      if (history.includes(currentGuess)) {
        alert('you already tried this word');
        return;
      }
      if (currentGuess.length !== 5) {
        alert('word must be 5 characters long');
        return;
      }
      const formatted = formatGuess();
      addNewGuess(formatted);
    }
    // delete functionality
    if (key === 'Backspace') {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
      return;
    }
    // other keys
    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }
  };
  // onclick event handler
  const hadleClick = (key) => {
    console.log('handleclick');
  };
  return (
    <UtilsContext.Provider
      value={{ changeTheme, formatGuess, addNewGuess, handleKeyUp, hadleClick }}
    >
      {children}
    </UtilsContext.Provider>
  );
}

export default UtilsContext;
