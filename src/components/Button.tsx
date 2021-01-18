import styled from 'styled-components';
import * as React from 'react';
import Link from 'next/link';
import {ParsedUrlQueryInput} from 'querystring';

const Container = styled.button`
  max-width: 500px;
  cursor: pointer;
  background: inherit;
  box-shadow: 5px 5px 15px #aaaaaa;
  border-radius: 5px;
  background-color: var(--light-yellow);
  border: none;
  margin-top: 2rem;
  padding: 1rem 3rem;
  font-size: x-large;
  user-select: none;

  :hover {
    background-color: var(--yellow);
  }

  :focus {
    outline: none;
  }
`;

const Button: React.FC<{
  pathname: string;
  query?: ParsedUrlQueryInput;
  content: string;
  hideQuery?: boolean;
}> = ({pathname, query, content, hideQuery}) => {
  return hideQuery ? (
    <Link href={{pathname, query}} as={pathname}>
      <Container type="submit">{content}</Container>
    </Link>
  ) : (
    <Link href={{pathname, query}}>
      <Container type="submit">{content}</Container>
    </Link>
  );
};

export default Button;
