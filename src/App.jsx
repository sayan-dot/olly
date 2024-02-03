import React from "react";
import styled from "styled-components";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <>
      <Main>
        <HomePage />
      </Main>
    </>
  );
}

export default App;

const Main = styled.main`
  overflow: hidden;
`;
