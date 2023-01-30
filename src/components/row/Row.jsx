import React from 'react';
// context
// components
import { Cell } from '../../components';
// styles
import { RowContainer, CurrentRow } from './style';

const Row = ({ guess, currentGuess }) => {
  if (guess) {
    return (
      <RowContainer>
        {guess.map((letter, index) => (
          <Cell key={index} color={letter.color} letter={letter.key} />
        ))}
      </RowContainer>
    );
  }
  // return current guess only if we have a value
  if (currentGuess) {
    let letters = currentGuess.split('');
    return (
      <CurrentRow>
        {letters.map((letter, index) => (
          <Cell className='filled' key={index} letter={letter} />
        ))}
        {[...Array(5 - letters.length)].map((_, index) => (
          <Cell key={index} />
        ))}
      </CurrentRow>
    );
  }
  return (
    <RowContainer>
      <Cell />
      <Cell />
      <Cell />
      <Cell />
      <Cell />
    </RowContainer>
  );
};

export default Row;
