import React from 'react';
// context
import StateContext from '../../contexts/state';
// components
import { Row } from '../../components';
// styles
import { GridContainer } from './style';

const Grid = () => {
  const { currentGuess, guesses, turn } = React.useContext(StateContext);
  return (
    <GridContainer>
      {guesses.map((guess, index) => {
        if (turn === index) {
          return <Row key={index} currentGuess={currentGuess} />;
        }
        return <Row key={index} guess={guess} />;
      })}
    </GridContainer>
  );
};

export default Grid;
