import Head from 'next/head';
import QuestionList from '../components/QuestionList';
import * as React from 'react';
import {useEffect, useState} from 'react';
import useSWR from 'swr';
import {getAPIPath} from '../constants/api';
import fetcher from '../utils/fetcher';
import QuestionInput from '../components/QuestionInput';
import {Model, Question} from '../types/model';

const Home: React.FC = () => {
  const {data: questionsAPI} = useSWR(getAPIPath('Questions'), fetcher);
  const [questions, setQuestions] = useState<Model<Question>[]>();

  useEffect(() => {
    if (questionsAPI) {
      setQuestions(questionsAPI);
    }
  }, [questionsAPI]);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <QuestionInput />
      <QuestionList data={questions} />
    </>
  );
};

export default Home;
