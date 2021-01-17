import styled from 'styled-components';
import QuestionListItem from './QuestionListItem';
import Link from 'next/link';
import * as React from 'react';
import {Model, Question} from '../types/model';
const Container = styled.div`
  /*Layout 적용 이후 width, margin 변경 요망* */
  width: 60%;
  margin-left: 20%;
  margin-top: 200px;
  margin-bottom: 200px;
  background-color: var(--white-yellow);
`;

const QuestionList: React.FC<{data: Model<Question>[]}> = ({data}) => {
  return (
    <Container>
      {data.map(question => (
        <QuestionListItem data={question} />
      ))}
    </Container>
  );
};

export default QuestionList;
