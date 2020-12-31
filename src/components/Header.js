import React from 'react';
import styled from 'styled-components'


const HeaderContainer = styled.header`
    border: 3px solid #000;
    margin: auto;
    padding: 1em;
    margin-top: 5%;

`;

export const WebHeader = () => {
  return (
    <HeaderContainer>
      <h3>Ahmed Taweel</h3>

    </HeaderContainer>
  );
}
