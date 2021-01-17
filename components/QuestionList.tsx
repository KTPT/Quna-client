import styled from 'styled-components';
import QuestionListItem from './QuestionListItem';
import {QuestionModel} from '../types/model';
import {getAllQuestions} from './lib/questions';
import {useEffect, useState} from 'react';

const Container = styled.div`
  /*Layout 적용 이후 width, margin 변경 요망* */
  width: 60%;
  margin-left: 20%;
  margin-top: 200px;
  margin-bottom: 200px;
  background-color: var(--white-yellow);
`;

export function QuestionListItems({data}) {
  const listData = data;
  console.log('json???: ', listData[0]);

  const listItems = listData.map(item => (
    <QuestionListItem questionData={item} />
  ));
  return <Container>{listItems}</Container>;
}

export default function QuestionList() {
  const [questionsList, setQuestionsList] = useState<Array<QuestionModel>>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllQuestions();
      console.log('getAllQuestions: ', data);
      setQuestionsList(data.data);
    };

    fetchData();
  });

  return <QuestionListItems data={questionsList} />;
}
