import styled from 'styled-components';
import QuestionListItem from './QuestionListItem';

const Container = styled.div`
  /*Layout 적용 이후 width, margin 변경 요망* */
  width: 60%;
  margin-left: 20%;
  margin-top: 200px;
  margin-bottom: 200px;
  background-color: var(--white-yellow);
`;

export default function QuestionList() {
  return (
    <Container>
      <QuestionListItem />
      <QuestionListItem />
      <QuestionListItem />
      <QuestionListItem />
      <QuestionListItem />
      <QuestionListItem />
    </Container>
  );
}
