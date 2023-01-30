import React from 'react';
// styles
import {
  ToggleButtonContainer,
  ToggleButtonWrapper,
  ToggleButtonInput,
  ToggleButtonLabel,
  ToggleHandler,
  Crater1,
  Crater2,
  Crater3,
  Star1,
  Star2,
  Star3,
  Star4,
  Star5,
  Star6,
} from './styles';

// component
const ThemeToggleButton = ({ theme, changeTheme }) => {
  return (
    <ToggleButtonContainer>
      <ToggleButtonWrapper>
        <ToggleButtonInput type='checkbox' id='hide-checkbox' />
        <ToggleButtonLabel htmlFor='hide-checkbox' onClick={changeTheme}>
          <ToggleHandler>
            <Crater1></Crater1>
            <Crater2></Crater2>
            <Crater3></Crater3>
          </ToggleHandler>
          <Star1></Star1>
          <Star2></Star2>
          <Star3></Star3>
          <Star4></Star4>
          <Star5></Star5>
          <Star6></Star6>
        </ToggleButtonLabel>
      </ToggleButtonWrapper>
    </ToggleButtonContainer>
  );
};

export default ThemeToggleButton;
