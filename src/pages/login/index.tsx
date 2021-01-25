import * as React from 'react';
import ApiButton from '../../components/ApiButton';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import {useState} from 'react';
import axios from 'axios';
import {API} from '../../constants/api';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 240px;
`;

const Nickname = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const Password = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const Login: React.FC = () => {
  const [input, setInput] = useState({
    nickname: '',
    password: '',
  });

  const {nickname, password} = input;

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {value, name} = e.currentTarget;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const request = {...input};

    const response = await axios.post(API('Login'), request);
    console.log(response.data.token);
  };

  return (
    <Layout>
      <h1>로그인</h1>
      <Container onSubmit={submit}>
        <Nickname>
          <div>닉네임</div>
          <input
            type="text"
            name="nickname"
            value={nickname}
            onChange={onChange}
          />
        </Nickname>
        <Password>
          <div>비밀번호</div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </Password>
        <ApiButton content={'로그인 하기'} />
      </Container>
    </Layout>
  );
};

export default Login;
