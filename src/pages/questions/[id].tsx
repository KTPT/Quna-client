import Layout from '../../components/Layout';
import * as React from 'react';
import QuestionDetail from '../../components/QuestionDetail';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from 'next';
import {getAllPostIds, getQuestionDetailData} from '../../lib/questions';
import {getAnswersDetailData} from '../../lib/answers';
import AnswerDetail from '../../components/AnswerDetail';
import Button from '../../components/Button';
import {ParsedUrlQuery} from 'querystring';
import {Answer, Model, Question} from '../../types/model';

interface Props {
  questionData: Model<Question>;
  answersData: Model<Answer>[];
}

const ShowQuestion: React.FC<Props> = ({answersData, questionData}) => {
  return questionData && answersData ? (
    <Layout>
      <QuestionDetail props={questionData} />
      <Button
        content={'나도 답변 달래요!'}
        pathname={'/answer/post'}
        query={{id: questionData.id}}
        hideQuery={true}
      />
      {answersData.map(answer => (
        <AnswerDetail key={answer.id} props={answer} />
      ))}
      <Button
        content={'나도 답변 달래요!'}
        pathname={'/answer/post'}
        query={{id: questionData.id}}
        hideQuery={true}
      />
    </Layout>
  ) : (
    <Layout>
      <QuestionDetail props={questionData} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export async function getStaticProps({
  params,
}: GetStaticPropsContext<Params>): Promise<GetStaticPropsResult<Props>> {
  const {id} = params as Params;
  const questionData = await getQuestionDetailData(id);
  const answersData = await getAnswersDetailData(id);
  return {
    props: {
      questionData,
      answersData,
    },
  };
}

export default ShowQuestion;
