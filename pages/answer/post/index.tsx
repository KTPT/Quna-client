import {ChangeEvent, useState} from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Navbar from '../../../components/Navbar';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const AnswerInputContainer = styled.div`
  display: flex;
  padding: 5rem;
  flex-direction: column;
`;

const AnswerInput = styled.textarea`
  width: 30rem;
  height: 30rem;
  font-size: medium;
  outline: none;
  margin-top: 1rem;
  border: none;
  padding: 3rem;
  resize: none;
  background: #fff176;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.4);
`;

const SubmitButton = styled.button`
  margin-left: auto;
  margin-top: 0.5rem;
  width: 5rem;
  height: 2rem;
`;

export default function Index() {
  const [contents, setContents] = useState('');

  const createAnswer = async () => {
    if (contents.length === 0) {
      alert('답변을 입력해주세요');
      return;
    }

    const {status, data} = await axios.post('http://localhost:8080/answers', {
      contents,
    });
  };

  const handleChange = ({target: {value}}: ChangeEvent<HTMLTextAreaElement>) =>
    setContents(value);

  return (
    <>
      <Head>
        <title>답변 남기기</title>
      </Head>
      <Navbar />
      <Container>
        <AnswerInputContainer>
          <AnswerInput
            placeholder={'답변을 남겨주세요.'}
            onChange={handleChange}
          />
          <SubmitButton onClick={createAnswer}>남기기</SubmitButton>
        </AnswerInputContainer>
      </Container>
    </>
  );
}
