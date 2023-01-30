import React from 'react';
// styles
import { LoadingContainer, LoadingLoader, LoadingTitle } from './style';

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingLoader></LoadingLoader>
      <LoadingTitle>Loading....</LoadingTitle>
    </LoadingContainer>
  );
};

export default Loading;
