import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const CellContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  width: 62px;
  height: 62px;
  border: 2px solid ${variables.colors.darkGrey};
  font-size: normal;
  font-weight: 700;
  line-height: 39px;
  font-size: 32px;
  margin: 4px;

  &.green {
    background-color: ${variables.colors.green};
    border: 2px solid ${variables.colors.green};
    color: ${variables.colors.white};
  }
  &.yellow {
    background-color: ${variables.colors.yellow};
    border: 2px solid ${variables.colors.yellow};
    color: ${variables.colors.white};
  }
  &.grey {
    background-color: ${variables.colors.midGrey};
    border: 2px solid ${variables.colors.midGrey};
    color: ${variables.colors.white};
  }
  &.filled {
    background-color: blue;
  }
`;
