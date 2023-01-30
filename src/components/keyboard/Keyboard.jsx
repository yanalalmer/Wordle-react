import React from 'react';
// context
import StateContext from '../../contexts/state';
import UtilsContext from '../../contexts/utils';
// data
import { keys } from './keys';
// styles
import { KeyboardContainer, RowOfKeys, Key } from './style';

const Keyboard = () => {
  const { usedKeys } = React.useContext(StateContext);
  const { hadleClick } = React.useContext(UtilsContext);
  return (
    <KeyboardContainer>
      {keys &&
        keys.map((rowOfKeys, index) => (
          <RowOfKeys key={index}>
            {rowOfKeys.map((letter) => {
              const color = usedKeys[letter.key];
              return (
                <Key
                  onClick={hadleClick}
                  key={letter.key}
                  className={color}
                  id={
                    letter.key === 'ENTER' || letter.key === 'BACK' ? 'big' : ''
                  }
                >
                  {letter.key}
                </Key>
              );
            })}
          </RowOfKeys>
        ))}
    </KeyboardContainer>
  );
};

export default Keyboard;
