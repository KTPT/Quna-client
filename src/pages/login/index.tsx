import * as React from 'react';
import {useState} from 'react';
import ApiButton from '../../components/ApiButton';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import axios from 'axios';
import {API} from '../../constants/api';
import {useRouter} from 'next/router';
import {TOKEN} from '../../constants/token';

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
  const router = useRouter();

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {value, name} = e.currentTarget;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const validate = (): boolean => {
    if (nickname === null || nickname === '') {
      alert('nickname을 입력해주세요.');
      return true;
    }
    if (password === null || password === '') {
      alert('password를 입력해주세요.');
      return true;
    }
    return false;
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validate()) {
      return;
    }
    const request = {...input};

    await axios
      .post(API('Login'), request)
      .then(response => {
        localStorage.setItem(TOKEN, response.data.token);
        alert('로그인되었습니다.');
        router.push('/');
      })
      .catch(e => {
        alert('로그인에 실패했습니다. 다시 시도해주세요.');
      });
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
