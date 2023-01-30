import React from 'react';
// context
const StateContext = React.createContext();

export function StateProvider({ children }) {
  // loading
  const [isLoading, setIsLoading] = React.useState(true);
  // theme
  const [theme, setTheme] = React.useState('light');
  // states
  const [correctWord, setCorrectWord] = React.useState();
  const [turn, setTurn] = React.useState(0);
  const [currentGuess, setCurrentGuess] = React.useState('');
  const [guesses, setGuesses] = React.useState([...Array(6)]);
  const [history, setHistory] = React.useState([]);
  const [isCorrect, setIsCorrect] = React.useState(false);
  const [usedKeys, setUsedKeys] = React.useState({});
  // modal
  const [showModal, setShowModal] = React.useState(false);
  // keyboard
  const [letters, setLetters] = React.useState(null);

  return (
    <StateContext.Provider
      value={{
        usedKeys,
        setUsedKeys,
        isLoading,
        setIsLoading,
        theme,
        setTheme,
        correctWord,
        setCorrectWord,
        turn,
        setTurn,
        currentGuess,
        setCurrentGuess,
        guesses,
        setGuesses,
        history,
        setHistory,
        isCorrect,
        setIsCorrect,
        letters,
        setLetters,
        showModal,
        setShowModal,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export default StateContext;
