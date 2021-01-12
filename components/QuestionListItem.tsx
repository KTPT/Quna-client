import styled from 'styled-components';
import Questioner from './Questioner';

const Container = styled.div`
  width: 100%;
  background-color: var(--yellow);
  padding: 30px 30px 30px 50px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Title = styled.div`
  margin-left: 60px;
  font-size: 2em;
  font-weight: 600;
`;

export default function QuestionListItem() {
  return (
    <Container>
      <Questioner />
      <Title>이게 궁금해용</Title>
    </Container>
  );
}
