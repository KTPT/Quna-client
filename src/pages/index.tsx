import Head from 'next/head';
import QuestionList from '../components/QuestionList';
import * as React from 'react';
import {useEffect, useState} from 'react';
import useSWR from 'swr';
import {API} from '../constants/api';
import fetcher from '../utils/fetcher';
import QuestionInput from '../components/QuestionInput';

const Home: React.FC = () => {
  const {data: questionAPI} = useSWR(API('Question'), fetcher);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (questionAPI) {
      setQuestions(questionAPI);
    }
  }, [questionAPI]);

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
