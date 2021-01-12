import Layout from '../../components/Layout';
import * as React from 'react';
import {
  QuestionDetail,
  QuestionDetailProps,
} from '../../components/QuestionDetail';
import {GetStaticPaths, GetStaticPropsResult} from 'next';
import {
  getAllPostIds,
  getQuestionDetailData,
} from '../../components/lib/questions';
import {getAnswersDetailData} from '../../components/lib/answers';
import {AnswerDetail, AnswerDetailProps} from '../../components/AnswerDetail';
import {Button} from '../../components/Button';

interface Props {
  questionData: QuestionDetailProps;
  answersData: AnswerDetailProps[];
}

export default function Question(props: Props) {
  const questionData = props.questionData;
  const answersData = props.answersData;
  return questionData && answersData ? (
    <Layout>
      <QuestionDetail data={questionData.data} />
      <Button content={'나도 답변 달래요!'} />
      {answersData.map(answer => (
        <AnswerDetail key={answer.data.id} data={answer.data} />
      ))}
      <Button content={'나도 답변 달래요!'} />
    </Layout>
  ) : (
    <Layout>
      <QuestionDetail data={questionData.data} />
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

export async function getStaticProps(
  context
): Promise<GetStaticPropsResult<Props>> {
  const params = context.params;
  const questionData = await getQuestionDetailData(params.id as string);
  const answersData = await getAnswersDetailData(params.id as string);
  return {
    props: {
      questionData,
      answersData,
    },
  };
}
