import styled from 'styled-components';

export const LoadingContainer = styled.div`
  height: 100vh;
  width: 100%;
  z-index: 50;
  background-color: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  flex-direction: column;
`;
export const LoadingTitle = styled.h1`
  margin-top: 2rem;
  font-size: 2rem;
`;
export const LoadingLoader = styled.span`
  width: 80px;
  height: 40px;
  position: relative;

  ::before,
  ::after {
    position: absolute;
    content: '';
    top: 6px;
    background-color: #ff3e9e;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    mix-blend-mode: multiply;
    animation: tiktok-loader-anim 1s linear infinite;
  }
  ::after {
    background-color: #4de8f4;
    animation-delay: 0.5s;
  }
  @keyframes tiktok-loader-anim {
    0%,
    100% {
      top: 6px;
      left: 0px;
      width: 28px;
      z-index: 0;
    }
    25% {
      top: 0px;
      height: 40px;
      width: 40px;
      z-index: 1;
      left: 20px;
    }
    50% {
      top: 6px;
      width: 28px;
      height: 28px;
      left: 48px;
    }
    75% {
      top: 8px;
      width: 28px;
      height: 28px;
      left: 26px;
    }
  }
`;
