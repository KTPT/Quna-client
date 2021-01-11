import {FunctionComponent} from 'react';
import styled from 'styled-components';
import Link from 'next/link';

type Props = {};

const Container = styled.div`
  display: flex;
  background: white;
  vertical-align: center;
`;

const HomeButton = styled.button`
  margin: 1rem 1rem;
  color: black;
  font-size: large;
  background: white;
  border-color: black;
  border-width: thin;
`;

const Navbar: FunctionComponent<Props> = props => {
  return (
    <Container>
      <Link href={'/'}>
        <HomeButton>HOME</HomeButton>
      </Link>
    </Container>
  );
};

export default Navbar;
