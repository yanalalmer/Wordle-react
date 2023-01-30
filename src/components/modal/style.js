import styled from 'styled-components';
import * as variables from '../../styles/variables';

export const ModalContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
export const ModalContentBox = styled.div`
  background-color: ${variables.colors.white};
  width: 600px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
`;
export const ModalTitle = styled.h1`
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
`;
export const ModalPara = styled.p`
  font-size: 2rem;
  text-transform: capitalize;
  margin: 1rem 0;
  text-align: center;
`;
