import Head from 'next/head';
import Question from '../components/Question';
import QuestionList from '../components/QuestionList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      
      <Question/>
      <QuestionList/>

    </>
  );
}
