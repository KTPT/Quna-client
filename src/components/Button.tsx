import styled from 'styled-components';
import * as React from 'react';
import Router from 'next/router';

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

const Button: React.FC<{id: number; content: string}> = ({id, content}) => {
  return (
    <Container
      type="submit"
      onClick={() => Router.push(`/answer/post?id=${id}`, '/answer/post')}
    >
      {content}
    </Container>
  );
};

export default Button;
