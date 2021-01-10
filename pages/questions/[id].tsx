import Layout from '../../components/Layout';
import * as React from 'react';
import QuestionDetail from '../../components/QuestionDetail';
import {GetStaticPaths, GetStaticProps} from 'next';
import {getAllPostIds, getDetailData} from '../../components/lib/questions';

export default function Question({
  questionData,
}: {
  questionData: {
    id: number;
    title: string;
    contents: string;
    responderId?: number;
    createdAt: string;
    lastModifiedAt: string;
  };
}) {
  return (
    <Layout>
      <QuestionDetail data={questionData} />
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const params = context.params;
  const questionData = await getDetailData(params.id as string);
  return {
    props: {
      questionData: questionData,
    },
  };
};
