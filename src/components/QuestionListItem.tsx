import styled from 'styled-components';
import Questioner from './Questioner';
import Link from 'next/link';
import * as React from 'react';
import {Model, Question} from '../types/model';

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

const QuestionListItem: React.FC<{data: Model<Question>}> = ({data}) => {
  return (
    <Link href={`/questions/${data.id}`}>
      <Container>
        <Questioner />
        <Title>{data.title}</Title>
      </Container>
    </Link>
  );
};

export default QuestionListItem;
