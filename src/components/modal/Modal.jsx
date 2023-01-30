import React from 'react';
// context
import StateContext from '../../contexts/state';
// styles
import {
  ModalContainer,
  ModalContentBox,
  ModalTitle,
  ModalPara,
} from './style';

const Modal = () => {
  const { isCorrect, turn, correctWord } = React.useContext(StateContext);
  return (
    <ModalContainer>
      {isCorrect && (
        <ModalContentBox>
          <ModalTitle>You won</ModalTitle>

          <ModalPara>
            You found the correct word in <b>{turn}</b> guesses!
          </ModalPara>
        </ModalContentBox>
      )}
      {!isCorrect && (
        <ModalContentBox>
          <ModalTitle>Unlucky</ModalTitle>
          <ModalPara>
            The correct word was: <b>{correctWord}</b>
          </ModalPara>
          <ModalPara>Better luck next time...</ModalPara>
        </ModalContentBox>
      )}
    </ModalContainer>
  );
};

export default Modal;
