import styled from 'styled-components';
import QuestionListItem from './QuestionListItem';
import * as React from 'react';
import {Model, Question} from '../types/model';

const Container = styled.div`
  width: 60%;
  margin-left: 20%;
  margin-top: 200px;
  margin-bottom: 200px;
  background-color: var(--white-yellow);
`;

const QuestionList: React.FC<{data: Model<Question>[]}> = ({data}) => {
  return data ? (
    <Container>
      {data.map(question => (
        <QuestionListItem data={question} />
      ))}
    </Container>
  ): <Container />
};

export default QuestionList;
