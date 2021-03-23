import * as React from 'react';
import {useContext, useState} from 'react';
import ApiButton from '../../components/ApiButton';
import styled from 'styled-components';
import Layout from '../../components/Layout';
import {useRouter} from 'next/router';
import {storeToken} from "../../utils/tokenHandler";
import {fetchAPI} from "../../constants/api";
import {isOk} from "../../constants/status";
import {MemberContext} from "../../contexts/MemberContext";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  width: 240px;
`;

const NicknameContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const PasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const Login: React.FC = () => {
  const {member, setMember} = useContext(MemberContext);
  const [input, setInput] = useState({
    nickname: '',
    password: '',
  });
  const {back} = useRouter();

  const {nickname, password} = input;
  const {isLogin} = member;

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {value, name} = e.currentTarget;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const isNotVerified = () => {
    if (!nickname) {
      alert('nickname을 입력해주세요.');
      return true;
    }
    if (!password) {
      alert('password를 입력해주세요.');
      return true;
    }
    return false;
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isNotVerified()) {
      return;
    }
    const request = {...input};

    try {
      const {data: {type, token}, status} = await fetchAPI("POST", 'Login', null, request);

      if (isOk(status)) {
        storeToken(type, token);
        alert('로그인되었습니다.');
        back();
      }
    } catch (e) {
      console.error(e);
      alert('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <Layout>
      <h1>로그인</h1>
      <Container onSubmit={submit}>
        <NicknameContainer>
          <div>닉네임</div>
          <input
            type="text"
            name="nickname"
            value={nickname}
            onChange={onChange}
          />
        </NicknameContainer>
        <PasswordContainer>
          <div>비밀번호</div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </PasswordContainer>
        <ApiButton content={'로그인 하기'}/>
      </Container>
    </Layout>
  );
};

export default Login;
