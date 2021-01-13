import React from 'react';
import { Description } from './components/Description';
import styled from 'styled-components'

const AppContainer = styled.div`
  margin: auto;
  color: #000;
  border-radius: 15px;
`


function App() {
  return (
    <AppContainer>
        <Description />
    </AppContainer>
  );
}

export default App;
