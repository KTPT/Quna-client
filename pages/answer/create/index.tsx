import {FunctionComponent} from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Navbar from '../../../components/Navbar';

type Props = {};

const AnswerInput = styled.input`
  font-size: 3rem;
  outline: none;
  padding-bottom: 0.5rem;
  border: none;
  border-bottom: 1px solid;
  margin-bottom: 2rem;
`;

const index: FunctionComponent<Props> = props => {
  return (
    <>
      <Head>
        <title>답변 남기기</title>
      </Head>
      <Navbar />
      <AnswerInput placeholder={'답변을 남겨주세요.'} />
    </>
  );
};

export default index;
