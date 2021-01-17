import styled from 'styled-components';
import Link from 'next/link';
import * as React from 'react';

const Container = styled.div`
  display: flex;
  background: white;
  vertical-align: center;
`;

const Button = styled.button`
  margin: 1rem;
  color: black;
  font-size: large;
  background: white;
  border-color: black;
  border-width: thin;
  padding: 1rem;
  width: 8rem;
`;

const LoginButton = styled.button`
  margin-left: auto;
  color: black;
  font-size: large;
  background: white;
  border-color: black;
  border-width: thin;
  padding: 1rem;
  width: 8rem;
`;

const Navbar: React.FC = () => {
  return (
    <Container>
      <Link href={'/'}>
        <Button>Quna</Button>
      </Link>
      <Link href={'/'}>
        <Button>질문 목록</Button>
      </Link>
      <Link href={'/'}>
        <LoginButton>로그인</LoginButton>
      </Link>
    </Container>
  );
};

export default Navbar;
