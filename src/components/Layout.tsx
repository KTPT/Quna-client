import styled from 'styled-components';
import * as React from 'react';

const Container = styled.div`
  width: 60vw;
  height: 100%;
  background-color: white;
  margin-left: 20%;
  padding: 2rem 0;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Layout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
