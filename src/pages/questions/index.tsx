import Layout from '../../components/Layout';
import * as React from 'react';
import {useEffect, useState} from 'react';
import QuestionDetail from '../../components/QuestionDetail';
import AnswerDetail from '../../components/AnswerDetail';
import Button from '../../components/Button';
import {Answer, Model, Question} from '../../types/model';
import {useRouter} from "next/router";
import useSWR from "swr";
import {API} from "../../constants/api";
import fetcher from "../../utils/fetcher";

interface Props {
  questionData: Model<Question>;
  answersData: Model<Answer>[];
}

const ShowQuestion: React.FC<Props> = () => {
  const {query: {id}} = useRouter();
  const {data: questionAPI} = useSWR(API('QuestionDetail', id as string), fetcher);
  const {data: answersAPI} = useSWR(API('Answers', id as string), fetcher);
  const [question, setQuestion] = useState<Model<Question>>();
  const [answers, setAnswers] = useState<Model<Answer>[]>();

  useEffect(() => {
    if (questionAPI) {
      setQuestion(questionAPI);
    }
    if (answersAPI) {
      setAnswers(answersAPI);
    }
  }, [questionAPI, answersAPI]);

  return question && answers ? (
    <Layout>
      <QuestionDetail props={question}/>
      <Button
        content={'나도 답변 달래요!'}
        pathname={'/answer/post'}
        query={{id: question.id}}
        hideQuery={true}
      />
      {answers.map(answer => (
        <AnswerDetail key={answer.id} props={answer}/>
      ))}
      <Button
        content={'나도 답변 달래요!'}
        pathname={'/answer/post'}
        query={{id: question.id}}
        hideQuery={true}
      />
    </Layout>
  ) : (
    <Layout>
      <QuestionDetail props={question}/>
    </Layout>
  );
};

export default ShowQuestion;
