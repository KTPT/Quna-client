import styled from 'styled-components';

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

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  );
}
