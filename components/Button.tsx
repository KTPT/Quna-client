import styled from 'styled-components';

export type Content = {
  content: string;
};

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

export function Button({content}: Content) {
  return <Container type="submit">{content}</Container>;
}
