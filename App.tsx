import * as React from 'react';
import './style.css';
import styled from 'styled-components';

const Button = styled.button`
  width : 100px;
  heigh : 30px;
  padding : 15px;
`;

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Button>Click me!</Button>
    </div>
  );
}
