import styled from 'styled-components';

export const TitleContainer = styled.h1`
  text-transform: uppercase;
  text-align: center;
  width: fit-content;
  margin: 0 auto;
  padding: 2rem 0;
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 2rem;
  ::after {
    content: '';
    width: 100%;
    display: block;
    height: 2px;
    background-color: ${({ theme }) => theme.text};
    margin-top: 1rem;
  }
`;
