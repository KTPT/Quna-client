import Link from 'next/link';
import styled from 'styled-components';
import Questioner from './Questioner';
import {QuestionModel} from '../types/model';

const Container = styled.div`
  width: 100%;
  background-color: var(--yellow);
  padding: 30px 30px 30px 50px;
  display: flex;
  align-items: center;
  margin-bottom: 30px;
  :hover {
    cursor: pointer;
  }
`;

const Title = styled.div`
  margin-left: 60px;
  font-size: 2em;
  font-weight: 600;
`;

interface Props {
  questionData: QuestionModel;
}

export default function QuestionListItem({questionData}: Props) {
  const link = '/questions/' + questionData.id;
  return (
    <Link href={link}>
      <Container>
        <Questioner />
        <Title>{questionData.title}</Title>
      </Container>
    </Link>
  );
}
