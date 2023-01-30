import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const KeyboardContainer = styled.div`
  padding-top: 3rem;
  margin: 0 auto;
`;
export const RowOfKeys = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px;
`;
export const Key = styled.div`
  text-transform: uppercase;
  width: 43px;
  height: 58px;
  margin: 5px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  background-color: ${variables.colors.grey};
  color: ${variables.colors.white};
  cursor: pointer;

  &.green {
    background-color: ${variables.colors.green};
  }
  &.yellow {
    background-color: ${variables.colors.yellow};
  }
  &.grey {
    background-color: ${variables.colors.darkGrey};
  }
  &#big {
    width: 71px;
  }
`;
