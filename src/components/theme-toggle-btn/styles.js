import styled from 'styled-components';
import * as variables from '../../styles/variables';

// styles
export const ToggleButtonContainer = styled.section`
  width: 100%;
  height: ${variables.spacing.headerHeight};
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ToggleButtonWrapper = styled.div`
  @media ${variables.query.sm} {
    padding: 0 50px;
  }
`;
export const ToggleHandler = styled.span`
  display: inline-block;
  position: relative;
  z-index: 1;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background-color: #ffcf96;
  border-radius: 50px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: rotate(-45deg);
`;
export const ToggleButtonLabel = styled.label`
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 90px;
  height: 50px;
  background-color: #83d8ff;
  border-radius: 90px;
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  &::before {
    content: 'AM';
    position: absolute;
    left: -50px;
    top: 15px;
    font-size: 18px;
  }
  &::after {
    content: 'PM';
    position: absolute;
    right: -48px;
    top: 15px;
    font-size: 18px;
  }
`;
export const Crater1 = styled.span`
  position: absolute;
  background-color: #adacab;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  border-radius: 100%;
  top: 18px;
  left: 10px;
  width: 4px;
  height: 4px;
`;
export const Crater2 = styled.span`
  position: absolute;
  background-color: #adacab;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  border-radius: 100%;
  top: 28px;
  left: 22px;
  width: 6px;
  height: 6px;
`;
export const Crater3 = styled.span`
  position: absolute;
  background-color: #adacab;
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  border-radius: 100%;
  top: 10px;
  left: 25px;
  width: 8px;
  height: 8px;
`;
export const Star1 = styled.span`
  position: absolute;
  background-color: #ffffff;
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;
  top: 10px;
  left: 35px;
  z-index: 0;
  width: 30px;
  height: 3px;
`;
export const Star2 = styled.span`
  position: absolute;
  background-color: #ffffff;
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;
  top: 18px;
  left: 28px;
  z-index: 1;
  width: 30px;
  height: 3px;
`;
export const Star3 = styled.span`
  position: absolute;
  background-color: #ffffff;
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;
  top: 27px;
  left: 40px;
  z-index: 0;
  width: 30px;
  height: 3px;
`;
export const Star4 = styled.span`
  position: absolute;
  background-color: #ffffff;
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;
  opacity: 0;
  transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
  top: 16px;
  left: 11px;
  z-index: 0;
  width: 2px;
  height: 2px;
  transform: translate3d(3px, 0, 0);
`;
export const Star5 = styled.span`
  position: absolute;
  background-color: #ffffff;
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;
  opacity: 0;
  transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
  top: 32px;
  left: 17px;
  z-index: 0;
  width: 3px;
  height: 3px;
  transform: translate3d(3px, 0, 0);
`;
export const Star6 = styled.span`
  position: absolute;
  background-color: #ffffff;
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;
  opacity: 0;
  transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
  top: 36px;
  left: 28px;
  z-index: 0;
  width: 2px;
  height: 2px;
  transform: translate3d(3px, 0, 0);
`;
export const ToggleButtonInput = styled.input`
  position: absolute;
  left: -99em;
  &:checked {
    + ${ToggleButtonLabel} {
      background-color: black;

      ${ToggleHandler} {
        background-color: rgba(255, 255, 255, 0.9);
        transform: translate3d(40px, 0, 0) rotate(0);
        ${Crater1}, ${Crater2}, ${Crater3} {
          opacity: 1;
        }
      }
      ${Star1} {
        width: 2px;
        height: 2px;
      }
      ${Star2} {
        width: 4px;
        height: 4px;
        transform: translate3d(-5px, 0, 0);
      }
      ${Star3} {
        width: 2px;
        height: 2px;
        transform: translate3d(-7px, 0, 0);
      }
      ${Star4}, ${Star5}, ${Star6} {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
      ${Star4} {
        transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }
      ${Star5} {
        transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }
      ${Star6} {
        transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
      }
    }
  }
`;
