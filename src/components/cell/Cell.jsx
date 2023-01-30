import React from 'react';
// context
// styles
import { CellContainer } from './style';

const Cell = ({ letter, color }) => {
  return <CellContainer className={color}>{letter}</CellContainer>;
};

export default Cell;
